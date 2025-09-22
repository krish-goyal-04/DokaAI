import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomSelect } from '@/cuteui/components/custom-select';
import { Button } from '@/cuteui/components/button/button';
import { WorkFlowContext } from '@/context/WorkFlowProvider';
import { TextArea } from '@/cuteui/components/textarea';

const conditionItems: string[] = ['Instagram', 'Twitter', 'Reddit'];

const dataPropertyItems: string[] = ['Influencer', 'Casual Users'];
const operators: string[] = [
  'Is equal to',
  'Is greater than',
  'Is less than',
  'Is greater than or equal to',
  'Is less than or equal to',
];

const BinaryConditions = ({ closeOverlay }: { closeOverlay: () => void }) => {
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { addNode, addEdge } = context as any;
  const [value, setValue] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [dataProp, setDataProp] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const displayItems = [
    {
      title: 'Data Property',
      options: dataPropertyItems,
      value: dataProp,
      onChange: (e: string) => setDataProp(e),
      placeholder: 'Select user type',
    },
    {
      title: 'Operator',
      options: operators,
      value: operator,
      onChange: (e: string) => setOperator(e),
      placeholder: 'Select operator',
    },
  ];
  const newNode = {
    id: 'BinaryConditions',
    position: { x: 0, y: 200 },
    data: { label: 'Condition', operator: operator, condition: dataProp, inputValue: inputValue },
    type: 'binaryConditions',
  };

  const newEdge = {
    id: 'Recipient-BinaryConditions',
    source: 'Recipient',
    target: 'BinaryConditions',
    sourceHandle: 'recipient-output',
    targetHandle: 'binarycondition-input',
    type: 'smoothstep',
  };
  return (
    <div className="absolute z-50 flex items-stretch mt-5  " style={{ top: '64px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[calc(100vh-100px)] ml-2 flex flex-col justify-between animate-slide-in">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
            <h2 className="text-sm font-semibold flex text-black">Add condition details</h2>
          </div>
          <div className="flex flex-col gap-6">
            <section>
              <p className="text-gray-500 mb-2">Condition name</p>
              <CustomSelect
                value={value}
                onChange={(e) => setValue(e.target.value)}
                options={conditionItems}
                placeholder="Choose an option"
                size="sm"
                height={42}
              />
            </section>
            <div className="flex flex-col gap-5 p-3">
              {displayItems.map((item, ind) => (
                <section key={ind}>
                  <p className="text-gray-500 mb-2">{item.title}</p>
                  <CustomSelect
                    value={item.value}
                    onChange={(e) => item.onChange(e.target.value)}
                    options={item.options}
                    placeholder={item.placeholder}
                    size="sm"
                    height={35}
                  />
                </section>
              ))}
              <section>
                <p className="text-gray-500">Value</p>
                <TextArea
                  labelName=""
                  height="40px"
                  required
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </section>
            </div>
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
        <style jsx>{`
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateX(-8px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slide-in {
            animation: slide-in 200ms ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BinaryConditions;
