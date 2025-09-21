import React, { useState } from 'react';
import WorkFlowComponents from './WorkFlowComponents';
import Recipients from './components/Recipeints';

const WorkFlowPage = () => {
  const [activeOverlay, setActiveOverlay] = useState<string | null>(null);

  const closeOverlay = () => setActiveOverlay(null);

  return (
    <div>
      <WorkFlowComponents onSelect={setActiveOverlay} />
      {activeOverlay == 'Recipients' && <Recipients closeOverlay={closeOverlay} />}
    </div>
  );
};

export default WorkFlowPage;
