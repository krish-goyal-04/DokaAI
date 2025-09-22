import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomSelect } from '@/cuteui/components/custom-select';
import { Button } from '@/cuteui/components/button/button';
import { TextArea } from '@/cuteui/components/textarea';
import { WorkFlowContext } from '@/context/WorkFlowProvider';

const periods: string[] = ['Daily', 'Weekly', 'Monthly'];

const Digest = ({ closeOverlay }: { closeOverlay: () => void }) => {
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { addNode, addEdge } = context;

  const [period, setPeriod] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  const newNode = {
    id: 'Digest',
    position: { x: 220, y: 320 },
    data: { label: 'Digest', period, title },
    type: 'digest',
  } as const;

  const newEdge = {
    id: 'binaryCondition-true_channel',
    source: 'BinaryConditions',
    target: 'Digest',
    sourceHandle: 'binarycondition-output',
    targetHandle: 'digest-input',
    type: '',
  };

  return (
    <div className="absolute z-50 flex items-stretch mt-5  " style={{ top: '64px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[calc(100vh-100px)] ml-2 flex flex-col justify-between animate-slide-in">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
            <h2 className="text-sm font-semibold flex text-black">Create digest</h2>
          </div>
          <div className="flex flex-col gap-6">
            <section>
              <p className="text-gray-500 mb-2">Period</p>
              <CustomSelect
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                options={periods}
                placeholder="Choose period"
                size="sm"
                height={42}
              />
            </section>
            <section>
              <p className="text-gray-500 mb-2">Title</p>
              <TextArea
                labelName=""
                height="40px"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </section>
          </div>
        </div>
        <Button
          text="Save"
          onClick={() => {
            addNode(newNode as any);
            addEdge(newEdge);
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

export default Digest;
