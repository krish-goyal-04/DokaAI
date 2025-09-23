import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomSelect } from '@/cuteui/components/custom-select';
import { Button } from '@/cuteui/components/button/button';
import { TextArea } from '@/cuteui/components/textarea';
import { WorkFlowContext } from '@/context/WorkFlowProvider';

// Options user can choose from
const scheduleTypes: string[] = ['Once', 'Recurring'];

const Schedule = ({ closeOverlay }: { closeOverlay: () => void }) => {
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { addNode } = context;

  // Track user selections in local state
  const [scheduleType, setScheduleType] = useState<string>('');
  const [cron, setCron] = useState<string>('');

  // Save button click handler → creates a new node
  const handleSave = () => {
    // Each node needs a unique ID. Using Date.now() ensures every new one is distinct.
    const id = `schedule-${Date.now()}`;

    // Build the node object React Flow understands
    const newNode = {
      id,
      position: { x: Math.random() * 400, y: Math.random() * 400 }, // temporary random position so they don’t overlap
      data: {
        label: 'Schedule',
        scheduleType, // e.g., "Once" or "Recurring"
        cron, // the cron string or time entered by the user
      },
      type: 'schedule', // tells React Flow which custom node renderer to use
    };

    // Add it to the global workflow context → it instantly shows up on the canvas
    addNode(newNode as any);

    // Close the overlay after saving
    closeOverlay();
  };

  return (
    <div className="absolute z-50 flex items-stretch mt-5" style={{ top: '64px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[calc(100vh-100px)] ml-2 flex flex-col justify-between animate-slide-in">
        {/* Header with back button */}
        <div>
          <div className="flex gap-4 items-center mb-6">
            <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
            <h2 className="text-sm font-semibold flex text-black">Schedule</h2>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-6">
            <section>
              <p className="text-gray-500 mb-2">Type</p>
              <CustomSelect
                value={scheduleType}
                onChange={(e) => setScheduleType(e.target.value)}
                options={scheduleTypes}
                placeholder="Choose type"
                size="sm"
                height={42}
              />
            </section>

            <section>
              <p className="text-gray-500 mb-2">Cron / Time</p>
              <TextArea
                labelName=""
                height="40px"
                value={cron}
                onChange={(e) => setCron(e.target.value)}
              />
            </section>
          </div>
        </div>

        {/* Save button */}
        <Button text="Save" onClick={handleSave} />

        {/* Friendly little animation for sliding in */}
        <style jsx>{`
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateX(-8px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slide-in {
            animation: slide-in 200ms ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Schedule;
