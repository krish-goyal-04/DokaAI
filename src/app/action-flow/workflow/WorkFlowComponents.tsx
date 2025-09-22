import StorageOutlined from '@mui/icons-material/StorageOutlined';
import CallSplitOutlined from '@mui/icons-material/CallSplitOutlined';
import DeviceHubOutlined from '@mui/icons-material/DeviceHubOutlined';
import QueryBuilderOutlined from '@mui/icons-material/QueryBuilderOutlined';
import ChatBubbleOutlineOutlined from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined';
import AltRouteOutlined from '@mui/icons-material/AltRouteOutlined';
import GroupsOutlined from '@mui/icons-material/GroupsOutlined';
import CalendarMonthOutlined from '@mui/icons-material/CalendarMonthOutlined';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';

const workflowItems: {
  name: string;
  icon: React.ElementType;
  component: string;
}[] = [
  { name: 'Recipients', icon: StorageOutlined, component: 'Recipients' },
  { name: 'Binary Conditions', icon: CallSplitOutlined, component: 'BinaryConditions' },
  { name: 'Multiple Conditions', icon: DeviceHubOutlined, component: 'MultipleConditions' },
  { name: 'Delays', icon: QueryBuilderOutlined, component: 'Delays' },
  { name: 'Digest', icon: ChatBubbleOutlineOutlined, component: 'Digest' },
  { name: 'Schedule', icon: DescriptionOutlined, component: 'Schedule' },
  { name: 'Channel Router', icon: AltRouteOutlined, component: 'ChannelRouter' },
  { name: 'Individual Channels', icon: GroupsOutlined, component: 'IndividualChannels' },
  { name: 'Next Node', icon: AddCircleOutline, component: 'NextNode' },
];

const WorkFlowComponents = ({ onSelect }: { onSelect: (name: string) => void }) => {
  return (
    <div className="w-max bg-white p-2 ml-2 h-max overflow-auto rounded-lg">
      <div className="flex flex-col gap-3 items-center">
        {workflowItems.map(({ name, icon: Icon, component }, index) => (
          <button
            key={index}
            title={name}
            onClick={() => onSelect(component)}
            className="flex items-center gap-3 px-3 py-2 rounded  w-full text-left"
          >
            <Icon className="text-black" fontSize="small" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkFlowComponents;
