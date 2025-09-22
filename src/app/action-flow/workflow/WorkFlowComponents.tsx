import {
  FiUsers,
  FiCheckCircle,
  FiLayers,
  FiClock,
  FiInbox,
  FiCalendar,
  FiRepeat,
  FiGrid,
  FiArrowRight,
} from 'react-icons/fi';

const workflowItems: {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  component: string;
}[] = [
  { name: 'Recipients', icon: FiUsers, component: 'Recipients' },
  { name: 'Binary Conditions', icon: FiCheckCircle, component: 'BinaryConditions' },
  { name: 'Multiple Conditions', icon: FiLayers, component: 'MultipleConditions' },
  { name: 'Delays', icon: FiClock, component: 'Delays' },
  { name: 'Digest', icon: FiInbox, component: 'Digest' },
  { name: 'Schedule', icon: FiCalendar, component: 'Schedule' },
  { name: 'Channel Router', icon: FiRepeat, component: 'ChannelRouter' },
  { name: 'Individual Channels', icon: FiGrid, component: 'IndividualChannels' },
  { name: 'Next Node', icon: FiArrowRight, component: 'NextNode' },
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
            <Icon size={18} className="text-green-500" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkFlowComponents;
