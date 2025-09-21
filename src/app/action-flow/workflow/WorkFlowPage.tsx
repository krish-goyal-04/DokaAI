import React, { useState } from 'react';
import WorkFlowComponents from './WorkFlowComponents';
import Recipients from './components/Recipients';
import BinaryConditions from './components/BinaryConditions';

const WorkFlowPage = ({ disabled = false }) => {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  const closeOverlay = () => setActiveOverlay(null);

  return (
    <div className={disabled ? 'pointer-events-none opacity-50' : ''}>
      <WorkFlowComponents onSelect={setActiveOverlay} />
      {activeOverlay === 'Recipients' && <Recipients closeOverlay={closeOverlay} />}
      {activeOverlay === 'BinaryConditions' && <BinaryConditions closeOverlay={closeOverlay} />}
    </div>
  );
};

export default WorkFlowPage;
