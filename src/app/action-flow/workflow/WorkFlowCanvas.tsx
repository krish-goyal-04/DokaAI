import React, { useContext } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { WorkFlowContext } from '@/context/WorkFlowProvider';
import { BinaryConditionsNode, RecipientNode, InitialNode } from '@/hooks/useCustomNode';
const nodeTypes = {
  initial: InitialNode,
  recipient: RecipientNode,
  binaryConditions: BinaryConditionsNode,
};

const WorkFlowCanvas = () => {
  const { nodes, edges, addNode, addEdge } = useContext(WorkFlowContext);
  return (
    <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default WorkFlowCanvas;
