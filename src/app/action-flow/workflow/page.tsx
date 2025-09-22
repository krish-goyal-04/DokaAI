'use client';
import WorkFlowHeader from './WorkFlowHeader';
import WorkFlowProvider from '@/context/WorkFlowProvider';
import '@xyflow/react/dist/style.css';
import { Button } from '@/cuteui/components/button/button';
import { useContext, useState } from 'react';
import WorkFlowPage from './WorkFlowPage';
import { WorkFlowContext } from '@/context/WorkFlowProvider';
import WorkFlowCanvas from './WorkFlowCanvas';
import EventHandlerForm from './EventHandlerForm';
const CanvasPage = () => {
  const [startClicked, setStartClicked] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [workflowName, setWorkflowName] = useState('Untitled');
  const [initialNode, setInitialNode] = useState([]);

  const handleStart = (e) => {
    e.preventDefault();
    setStartClicked(true);
    setDisplayForm(true);
  };

  return (
    <WorkFlowProvider initialNode={initialNode}>
      <div className="flex flex-col h-screen">
        <WorkFlowHeader name={workflowName} />
        <div className="bg-gray-600/60 flex flex-1 ">
          <div className="flex items-center ">
            <WorkFlowPage disabled={!startClicked} />
          </div>
          <div className="w-full h-full relative flex items-center justify-center">
            {startClicked ? (
              !displayForm ? (
                <WorkFlowCanvas />
              ) : (
                <EventHandlerForm
                  setInitialNode={setInitialNode}
                  setWorkflowName={setWorkflowName}
                  setDisplayForm={setDisplayForm}
                />
              )
            ) : (
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
    </WorkFlowProvider>
  );
};
export default CanvasPage;
