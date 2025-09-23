import React, { useCallback, useContext, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from '@xyflow/react';
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

// This object maps each workflow node type to its custom React component.
// If we add a new node type, just we need to drop it here and React Flow will render it.
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

// This is the main canvas for visualizing our workflow as a flowchart.
// It uses React Flow to render nodes and edges which is made global using context API, and pulls data from context.
const WorkFlowCanvas = () => {
  // Get the workflow state from context. This gives us all the nodes and edges to display.
  const context = useContext(WorkFlowContext);
  if (!context) return null; // If context isn't ready, don't render anything.
  const { nodes, edges, setNodes, setEdges } = context;

  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [setEdges]
  );

  console.log(edges);

  const onConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), []);

  // ReactFlow is the engine that draws the workflow diagram.
  // We pass in our nodes, edges, and custom node types.
  // The fitView prop makes sure everything fits nicely in the viewport.
  return (
    <ReactFlow
      nodes={nodes}
      fitView
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      {/* Adds a subtle grid background to help users orient themselves. */}
      <Background />
      {/* Custom controls for zoom, fit view, and interactivity. Positioned at the bottom center. */}
      <Controls
        showZoom={true}
        showFitView={true}
        showInteractive={true}
        orientation="horizontal"
        position="bottom-center"
        className=""
      />
    </ReactFlow>
  );
};

export default WorkFlowCanvas;
