import { CustomSelect } from '@/cuteui/components/custom-select';
import { useState, useContext } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Search } from '@/cuteui/components/searchbar';
import { Button } from '@/cuteui/components/button/button';
import { WorkFlowContext } from '@/context/WorkFlowProvider';
const Recipients = ({ closeOverlay }: { closeOverlay: () => void }) => {
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { addNode, addEdge } = context as any;

  const [value, setValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const newNode = {
    id: 'Recipient',
    position: { x: 0, y: 100 },
    data: { label: 'Recipients', platform: value, searchQuery: searchValue },
    type: 'recipient',
  };

  const newEdge = {
    id: 'Initial-Recipient',
    source: 'InitialNode',
    target: 'Recipient',
    sourceHandle: 'initial-output',
    targetHandle: 'recipient-input',
    type: 'smoothstep',
  };

  const recipientItems: string[] = ['Instagram', 'Twitter', 'Reddit'];
  return (
    <div className="absolute z-50 flex items-stretch mt-5  " style={{ top: '64px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[calc(100vh-100px)] ml-2 flex flex-col justify-between">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
            <h2 className="text-sm font-semibold flex text-black">Choose recipient type</h2>
          </div>
          <div className="flex flex-col gap-8">
            <section>
              <p className="text-gray-500 mb-2">Customer Pool</p>
              <CustomSelect
                value={value}
                onChange={(e) => setValue(e.target.value)}
                options={recipientItems}
                placeholder="Choose an option"
                size="sm"
                height={42}
              />
            </section>
            <section>
              <Search
                placeholderText="Search target audience"
                className="h-10"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              {searchValue === '' ? (
                <p className="text-gray-400 mt-2 text-sm ml-5">No recipient selected</p>
              ) : (
                <p className="text-green-400 mt-2 text-sm ml-5">
                  Searched recipients: {searchValue}
                </p>
              )}
            </section>
          </div>
        </div>
        <Button
          text="Save"
          onClick={() => {
            addNode(newNode);
            addEdge(newEdge);
            closeOverlay();
          }}
        />
      </div>
    </div>
  );
};
export default Recipients;
