import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomSelect } from '@/cuteui/components/custom-select';
import { Button } from '@/cuteui/components/button/button';
import { TextArea } from '@/cuteui/components/textarea';
import { WorkFlowContext } from '@/context/WorkFlowProvider';

const channels: string[] = ['Email', 'SMS', 'Push'];

const IndividualChannels = ({ closeOverlay }: { closeOverlay: () => void }) => {
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { addNode } = context;

  const [channel, setChannel] = useState<string>(''); // stores selected channel (Email/SMS/Push)
  const [content, setContent] = useState<string>(''); // stores typed content

  const handleSave = () => {
    // Each new node needs its own unique ID
    // Date.now() ensures that every time we click "Save", a fresh ID is generated
    const id = `individual-${Date.now()}`;

    // Create the new node object
    const newNode = {
      id,
      position: { x: Math.random() * 300, y: Math.random() * 300 }, // place randomly for now so nodes don’t overlap
      data: { label: channel || 'Channel', channel, content }, // pass along what user selected/typed
      type: 'individualChannels', // tells React Flow which custom node component to use
    };

    // Push this node into global context → it will immediately show up on the canvas
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
            <h2 className="text-sm font-semibold flex text-black">Individual Channel</h2>
          </div>

          {/* Form fields for channel + content */}
          <div className="flex flex-col gap-6">
            <section>
              <p className="text-gray-500 mb-2">Channel</p>
              <CustomSelect
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                options={channels}
                placeholder="Choose channel"
                size="sm"
                height={42}
              />
            </section>

            <section>
              <p className="text-gray-500 mb-2">Content</p>
              <TextArea
                labelName=""
                height="40px"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </section>
          </div>
        </div>

        {/* Save button that adds the node */}
        <Button text="Save" onClick={handleSave} />

        {/* Smooth little slide-in animation */}
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

export default IndividualChannels;
