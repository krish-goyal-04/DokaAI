import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@/cuteui/components/button/button';
import { TextArea } from '@/cuteui/components/textarea';
import { WorkFlowContext } from '@/context/WorkFlowProvider';

const NextNode = ({ closeOverlay }: { closeOverlay: () => void }) => {
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { addNode } = context;

  const [label, setLabel] = useState<string>('');

  const newNode = {
    id: 'NextNode',
    position: { x: 0, y: 620 },
    data: { label: label || 'Next' },
    type: 'next',
  } as const;

  return (
    <div className="absolute z-50 flex items-stretch mt-5  " style={{ top: '64px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[calc(100vh-100px)] ml-2 flex flex-col justify-between animate-slide-in">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
            <h2 className="text-sm font-semibold flex text-black">Next Node</h2>
          </div>
          <div className="flex flex-col gap-6">
            <section>
              <p className="text-gray-500 mb-2">Label</p>
              <TextArea labelName="" height="40px" value={label} onChange={(e) => setLabel(e.target.value)} />
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
            from { opacity: 0; transform: translateX(-8px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-in { animation: slide-in 200ms ease-out; }
        `}</style>
      </div>
    </div>
  );
};

export default NextNode;
