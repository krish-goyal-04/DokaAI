import React, { useState } from 'react';
import WorkFlowComponents from './WorkFlowComponents';
import Recipients from './components/Recipients';
import BinaryConditions from './components/BinaryConditions';
import MultipleConditions from './components/MultipleConditions';
import Delays from './components/Delays';
import Digest from './components/Digest';
import Schedule from './components/Schedule';
import ChannelRouter from './components/ChannelRouter';
import IndividualChannels from './components/IndividualChannels';

const WorkFlowPage = ({ disabled = false }) => {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  const closeOverlay = () => setActiveOverlay(null);

  return (
    <div className={disabled ? 'pointer-events-none opacity-50' : ''}>
      <WorkFlowComponents onSelect={setActiveOverlay} />
      {activeOverlay === 'Recipients' && <Recipients closeOverlay={closeOverlay} />}
      {activeOverlay === 'BinaryConditions' && <BinaryConditions closeOverlay={closeOverlay} />}
      {activeOverlay === 'MultipleConditions' && <MultipleConditions closeOverlay={closeOverlay} />}
      {activeOverlay === 'Delays' && <Delays closeOverlay={closeOverlay} />}
      {activeOverlay === 'Digest' && <Digest closeOverlay={closeOverlay} />}
      {activeOverlay === 'Schedule' && <Schedule closeOverlay={closeOverlay} />}
      {activeOverlay === 'ChannelRouter' && <ChannelRouter closeOverlay={closeOverlay} />}
      {activeOverlay === 'IndividualChannels' && <IndividualChannels closeOverlay={closeOverlay} />}
    </div>
  );
};

export default WorkFlowPage;
