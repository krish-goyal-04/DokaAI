import { AccountTreeOutlined } from '@mui/icons-material';
import { FiChevronRight, FiSave, FiSend } from 'react-icons/fi';

const WorkFlowHeader = ({ name }: { name: string }) => {
  return (
    <div className="w-full flex justify-between items-center bg-white px-5 py-4 text-lg">
      <div className="flex items-center gap-2">
        <div className="bg-green-100 p-2 rounded text-green-400">
          <AccountTreeOutlined />
        </div>
        <FiChevronRight className="text-green-500" />
        <span className="font-semibold text-gray-100 ">{name}</span>
      </div>
      <div className="flex gap-4 text-green-500 px-8">
        <button className="border border-green-500 px-4 py-1 flex justify-between items-center rounded text-md gap-2 bg-white hover:bg-gray-900">
          <FiSave />
          Save
        </button>
        <button
          className="border border-gray-800 bg-gray-800 px-4 py-1 rounded text-md flex justify-between gap-2 items-center"
          disabled
        >
          <FiSend />
          Publish
        </button>
      </div>
    </div>
  );
};

export default WorkFlowHeader;
