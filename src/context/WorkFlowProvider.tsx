import React, { createContext, useState,useEffect } from 'react';
export const WorkFlowContext = createContext(null);
const WorkFlowProvider = ({ children, initialNode = [] }) => {
  const [nodes, setNodes] = useState(initialNode);
  const [edges, setEdges] = useState([]);
  
  // Update nodes when initialNode changes
  useEffect(() => {
    if (initialNode.length > 0) {
      setNodes(initialNode);
    }
  }, [initialNode]);
  
  const addNode = (node) => setNodes((prev) => [...prev, node]);

  const addEdge = (edge) => setEdges((prev) => [...prev, edge]);

  return (
    <WorkFlowContext.Provider value={{ nodes, edges, addNode, addEdge }}>
      {children}
    </WorkFlowContext.Provider>
  );
};

export default WorkFlowProvider;
