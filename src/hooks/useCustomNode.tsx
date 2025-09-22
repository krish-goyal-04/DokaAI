import { Handle, Position } from '@xyflow/react';
export const RecipientNode = ({ data }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <p className="justify-center text-md font-semibold">{data.label}</p>
      <p className="text-sm">
        You are using <span className="text-green-500">{data.searchQuery}</span> from{' '}
        <span className="text-green-500">{data.platform}</span> pool.
      </p>
      <Handle
        type="source"
        position={Position.Bottom}
        id="recipient-output"
        style={{ background: 'gray' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="recipient-input"
        style={{ background: 'gray' }}
      />
    </div>
  );
};

export const BinaryConditionsNode = ({ data }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <p className="justify-center text-md font-semibold">{data.label}</p>
      <p className="text-sm">
        if {data.condition} {data.operator} {data.inputValue}
      </p>
      <Handle
        type="source"
        position={Position.Bottom}
        id="binarycondition-output"
        style={{ background: 'gray' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="binarycondition-input"
        style={{ background: 'gray' }}
      />
    </div>
  );
};

export const InitialNode = ({ data }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <p className="justify-center text-md font-semibold">{data.label}</p>
      {data.description != '' && <p className="text-sm">{data.description}</p>}
      <Handle
        type="source"
        position={Position.Bottom}
        id="initial-output"
        style={{ background: 'gray' }}
      />
    </div>
  );
};
