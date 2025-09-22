import React, { createContext, useState,useEffect } from 'react';
import type { Node, Edge } from '@xyflow/react';

type WorkFlowContextValue = {
  nodes: Node[];
  edges: Edge[];
  addNode: (node: Node) => void;
  addEdge: (edge: Edge) => void;
};

export const WorkFlowContext = createContext<WorkFlowContextValue | null>(null);

type WorkFlowProviderProps = {
  children: React.ReactNode;
  initialNode?: Node[];
};

const WorkFlowProvider = ({ children, initialNode = [] }: WorkFlowProviderProps) => {
  const [nodes, setNodes] = useState<Node[]>(initialNode);
  const [edges, setEdges] = useState<Edge[]>([]);
  
  // Update nodes when initialNode changes
  useEffect(() => {
    if (initialNode.length > 0) {
      setNodes(initialNode);
    }
  }, [initialNode]);
  
  const addNode = (node: Node) => setNodes((prev) => [...prev, node]);

  const addEdge = (edge: Edge) => setEdges((prev) => [...prev, edge]);

  return (
    <WorkFlowContext.Provider value={{ nodes, edges, addNode, addEdge }}>
      {children}
    </WorkFlowContext.Provider>
  );
};

export default WorkFlowProvider;
