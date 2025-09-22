import React, { useContext, useEffect } from 'react';
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { WorkFlowContext } from '@/context/WorkFlowProvider';
import {
  BinaryConditionsNode,
  RecipientNode,
  InitialNode,
  MultipleConditionsNode,
  DelaysNode,
  DigestNode,
  ScheduleNode,
  ChannelRouterNode,
  IndividualChannelsNode,
  NextStepNode,
} from '@/hooks/useCustomNode';
const nodeTypes = {
  initial: InitialNode,
  recipient: RecipientNode,
  binaryConditions: BinaryConditionsNode,
  multipleConditions: MultipleConditionsNode,
  delays: DelaysNode,
  digest: DigestNode,
  schedule: ScheduleNode,
  channelRouter: ChannelRouterNode,
  individualChannels: IndividualChannelsNode,
  next: NextStepNode,
};

const WorkFlowCanvas = () => {
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { nodes, edges } = context;
  return (
    <ReactFlow nodes={nodes} fitView edges={edges} nodeTypes={nodeTypes}>
      <Background />
      <Controls />
    </ReactFlow>
  );
};

export default WorkFlowCanvas;
