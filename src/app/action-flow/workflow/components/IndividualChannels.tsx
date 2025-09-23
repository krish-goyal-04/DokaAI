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
  const { addNode, addEdge } = context;

  const [channel, setChannel] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const newNode = {
    id: 'IndividualChannels',
    position: { x: -220, y: 450 },
    data: { label: 'Channel', channel, content },
    type: 'individualChannels',
  } as const;

  /*const newEdge = {
    id: 'channelRouter_indivisualChannel',
    source: 'ChannelRouter',
    target: 'IndividualChannels',
    sourceHandle: 'channelrouter-output',
    targetHandle: 'individualchannels-input',
    type: '',
  };*/

  return (
    <div className="absolute z-50 flex items-stretch mt-5  " style={{ top: '64px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[calc(100vh-100px)] ml-2 flex flex-col justify-between animate-slide-in">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
            <h2 className="text-sm font-semibold flex text-black">Individual Channel</h2>
          </div>
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
        <Button
          text="Save"
          onClick={() => {
            addNode(newNode as any);
            //addEdge(newEdge);
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

export default IndividualChannels;
