'use client'

import { useState, useCallback, useEffect } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, NodeChange, EdgeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { task } from '$/data/task';
 
// const initialNodes = [
//   { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
//   { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
// ];
// const initialEdges = [{ id: 'n1-n2', source: 'n1', target: 'n2' }];
type Node = {
    id: string,
    position: {
        x: number,
        y: number,
    },
    data: {
        label: string
    },
}
type Edge = {
    id: string,
    source: string,
    target: string,
}

const initialNodes: Node[]  = [];
const initialEdges: Edge[] = [];
let x: number = 0;
let y: number = 0;

export default function TaskTree({tasks}: {tasks: task[]}) {

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  tasks.map((task) => {
    initialNodes.push({
        id: task.tid,
        position: 
            {
                x: x,
                y: y
            },
        data: 
            {
                label: task.name
            }
    });
    console.log(task.tid);
    if (task.parentTask !== null) {
        initialEdges.push({
            id: `${task.parentTask}-${task.tid}`,
            source: task.parentTask,
            target: task.tid
        })
    };
    x += 100;
    y += 100;
  })
 
  return (
    <div className="w-full h-[50vh]">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
      />
    </div>
  );
}