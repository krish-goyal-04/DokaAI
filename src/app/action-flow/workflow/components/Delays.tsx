import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomSelect } from '@/cuteui/components/custom-select';
import { Button } from '@/cuteui/components/button/button';
import { TextArea } from '@/cuteui/components/textarea';
import { WorkFlowContext } from '@/context/WorkFlowProvider';

const units: string[] = ['Minutes', 'Hours', 'Days'];

const Delays = ({ closeOverlay }: { closeOverlay: () => void }) => {
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { addNode } = context;

  const [amount, setAmount] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const newNode = {
    id: 'Delays',
    position: { x: 220, y: 550 },
    data: { label: 'Delay', amount, unit, note },
    type: 'delays',
  } as const;

  return (
    <div className="absolute z-50 flex items-stretch mt-5  " style={{ top: '64px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[calc(100vh-100px)] ml-2 flex flex-col justify-between animate-slide-in">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
            <h2 className="text-sm font-semibold flex text-black">Add delay</h2>
          </div>
          <div className="flex flex-col gap-6">
            <section>
              <p className="text-gray-500 mb-2">Delay amount</p>
              <TextArea
                labelName=""
                height="40px"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </section>
            <section>
              <p className="text-gray-500 mb-2">Unit</p>
              <CustomSelect
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                options={units}
                placeholder="Choose unit"
                size="sm"
                height={42}
              />
            </section>
            <section>
              <p className="text-gray-500 mb-2">Note</p>
              <TextArea
                labelName=""
                height="40px"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </section>
          </div>
        </div>
        <Button
          text="Save"
          onClick={() => {
            addNode(newNode as any);
            closeOverlay();
          }}
        />
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

export default Delays;
