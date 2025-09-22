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

// This page is the main controller for the workflow node selection and configuration overlays.
// It manages which node overlay is open, and disables interaction if the workflow hasn't started yet.
// This is the entry point for users to add/configure each workflow step in the builder.
const WorkFlowPage = ({ disabled = false }) => {
  // Tracks which overlay  is currently open for node configuration.
  // When null, no overlay is shown.
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  // Closes the current overlay/modal, returning to the main workflow sidebar.
  const closeOverlay = () => setActiveOverlay(null);

  return (
    // If disabled, block all pointer events and fade out for clear UX feedback.
    <div className={disabled ? 'pointer-events-none opacity-50' : ''}>
      {/* Sidebar for selecting workflow nodes. Each button opens a node overlay. */}
      <WorkFlowComponents onSelect={setActiveOverlay} />

      {/* Render overlays for each workflow node type. Only one is open at a time. */}
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

// This component is the connects the workflow sidebar and the node overlays.
export default WorkFlowPage;
