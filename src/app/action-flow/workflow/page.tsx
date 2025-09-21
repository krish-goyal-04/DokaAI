'use client';

import { useState } from 'react';
import WorkFlowHeader from './WorkFlowHeader';
import WorkFlowComponents from './WorkFlowComponents';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Button } from '@/cuteui/components/button/button';
import EventHandlerForm from './EventHandlerForm';
import Recipients from './components/Recipeints';
import WorkFlowPage from './WorkFlowPage';

const CanvasPage = () => {
  const [startClicked, setStartClicked] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [workflowName, setWorkflowName] = useState('Untilted');
  const [workflowDescription, setWorkflowDescription] = useState('');
  const [workflowTag, setWorkflowTag] = useState('');
  const [notificationType, setNotificationType] = useState('');

  const handleStart = (e) => {
    e.preventDefault();
    setStartClicked(true);
    setDisplayForm(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <WorkFlowHeader name={workflowName} />
      <div className="bg-gray-600/60 flex flex-1 ">
        <div className="flex items-center h-full">
          <WorkFlowPage />
        </div>
        <div className="w-full relative">
          <ReactFlow>
            <Background />
            <Controls />
          </ReactFlow>
          {!startClicked && (
            <div className="absolute inset-0 flex items-center w-full h-full justify-center pointer-events-zero">
              <Button
                variant="contained"
                classname="bg-black w-fit text-white"
                onClick={handleStart}
                text="Click to start"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CanvasPage;
