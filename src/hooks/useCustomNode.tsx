import { Handle, Position } from '@xyflow/react';
import StorageOutlined from '@mui/icons-material/StorageOutlined';
import CallSplitOutlined from '@mui/icons-material/CallSplitOutlined';
import DeviceHubOutlined from '@mui/icons-material/DeviceHubOutlined';
import QueryBuilderOutlined from '@mui/icons-material/QueryBuilderOutlined';
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import AltRouteOutlined from '@mui/icons-material/AltRouteOutlined';
import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
type AnyData = any;

export const RecipientNode = ({ data }: { data: AnyData }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <div className="flex items-center gap-2">
        <StorageOutlined fontSize="small" className="text-green-500" />
        <p className="justify-center text-md font-semibold">{data.label}</p>
      </div>
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

export const BinaryConditionsNode = ({ data }: { data: AnyData }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <div className="flex items-center gap-2">
        <CallSplitOutlined fontSize="small" className="text-green-500" />
        <p className="justify-center text-md font-semibold">{data.label}</p>
      </div>
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

export const InitialNode = ({ data }: { data: AnyData }) => {
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

export const MultipleConditionsNode = ({ data }: { data: AnyData }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <div className="flex items-center gap-2">
        <DeviceHubOutlined fontSize="small" className="text-green-500" />
        <p className="justify-center text-md font-semibold">{data.label}</p>
      </div>
      <p className="text-sm">
        {data.groupOp} — {data.field} {data.operator} {data.value}
      </p>
      <Handle
        type="source"
        position={Position.Bottom}
        id="multipleconditions-output"
        style={{ background: 'gray' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="multipleconditions-input"
        style={{ background: 'gray' }}
      />
    </div>
  );
};

export const DelaysNode = ({ data }: { data: AnyData }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <div className="flex items-center gap-2">
        <QueryBuilderOutlined fontSize="small" className="text-green-500" />
        <p className="justify-center text-md font-semibold">{data.label}</p>
      </div>
      <p className="text-sm">
        Wait {data.amount} {data.unit}
      </p>
      {data.note && <p className="text-xs text-gray-500">{data.note}</p>}
      <Handle
        type="source"
        position={Position.Bottom}
        id="delays-output"
        style={{ background: 'gray' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="delays-input"
        style={{ background: 'gray' }}
      />
    </div>
  );
};

export const DigestNode = ({ data }: { data: AnyData }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <div className="flex items-center gap-2">
        <ChatBubbleOutlineOutlined fontSize="small" className="text-green-500" />
        <p className="justify-center text-md font-semibold">{data.label}</p>
      </div>
      <p className="text-sm">
        {data.period} — {data.title}
      </p>
      <Handle
        type="source"
        position={Position.Bottom}
        id="digest-output"
        style={{ background: 'gray' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="digest-input"
        style={{ background: 'gray' }}
      />
    </div>
  );
};

export const ScheduleNode = ({ data }: { data: AnyData }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <div className="flex items-center gap-2">
        <DescriptionOutlined fontSize="small" className="text-green-500" />
        <p className="justify-center text-md font-semibold">{data.label}</p>
      </div>
      <p className="text-sm">
        {data.scheduleType}
        {data.cron ? ` — ${data.cron}` : ''}
      </p>
      <Handle
        type="source"
        position={Position.Bottom}
        id="schedule-output"
        style={{ background: 'gray' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="schedule-input"
        style={{ background: 'gray' }}
      />
    </div>
  );
};

export const ChannelRouterNode = ({ data }: { data: AnyData }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <div className="flex items-center gap-2">
        <AltRouteOutlined fontSize="small" className="text-green-500" />
        <p className="justify-center text-md font-semibold">{data.label}</p>
      </div>
      <p className="text-sm">Strategy: {data.strategy}</p>
      <Handle
        type="source"
        position={Position.Bottom}
        id="channelrouter-output"
        style={{ background: 'gray' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="channelrouter-input"
        style={{ background: 'gray' }}
      />
    </div>
  );
};

export const IndividualChannelsNode = ({ data }: { data: AnyData }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <div className="flex items-center gap-2">
        <GroupsOutlined fontSize="small" className="text-green-500" />
        <p className="justify-center text-md font-semibold">{data.label}</p>
      </div>
      <p className="text-sm">{data.channel}</p>
      {data.content && <p className="text-xs text-gray-500">{data.content}</p>}
      <Handle
        type="source"
        position={Position.Bottom}
        id="individualchannels-output"
        style={{ background: 'gray' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="individualchannels-input"
        style={{ background: 'gray' }}
      />
    </div>
  );
};

export const NextStepNode = ({ data }: { data: AnyData }) => {
  return (
    <div className="p-2 bg-white rounded shadow flex flex-col w-[300px]">
      <div className="flex items-center gap-2">
        <AddCircleOutline fontSize="small" className="text-green-500" />
        <p className="justify-center text-md font-semibold">{data.label}</p>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="nextnode-output"
        style={{ background: 'gray' }}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="nextnode-input"
        style={{ background: 'gray' }}
      />
    </div>
  );
};
