import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomSelect } from '@/cuteui/components/custom-select';
import { Button } from '@/cuteui/components/button/button';
import { WorkFlowContext } from '@/context/WorkFlowProvider';
import { TextArea } from '@/cuteui/components/textarea';

// Options for the dropdowns (just demo values for now)
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
  // Grab workflow state/actions from context
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { addNode } = context as any;

  // Local state for the form fields
  const [value, setValue] = useState<string>(''); // Which condition (Twitter, Reddit, etc.)
  const [operator, setOperator] = useState<string>(''); // Operator (equals, >, <, etc.)
  const [dataProp, setDataProp] = useState<string>(''); // Property being checked
  const [inputValue, setInputValue] = useState<string>(''); // The value to compare against

  // Dropdowns for property and operator fields
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

  // Define a new node to add when user saves this condition
  const newNode = {
    id: `BinaryConditions-${Date.now()}`, // unique id using timestamp
    position: { x: 0, y: 200 }, // default position, can be updated later
    data: {
      label: 'Condition',
      operator: operator,
      condition: dataProp,
      inputValue: inputValue,
    },
    type: 'binaryConditions',
  };

  return (
    // Overlay modal for adding a new condition
    <div className="absolute z-50 flex items-stretch mt-5" style={{ top: '64px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[calc(100vh-100px)] ml-2 flex flex-col justify-between animate-slide-in">
        <div>
          {/* Header with back button + title */}
          <div className="flex gap-4 items-center mb-6">
            <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
            <h2 className="text-sm font-semibold flex text-black">Add condition details</h2>
          </div>

          {/* Form fields */}
          <div className="flex flex-col gap-6">
            {/* Dropdown for condition name (Instagram, Twitter, etc.) */}
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

            {/* Dropdowns for property + operator, then value input */}
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
              {/* Input for the actual comparison value */}
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

        {/* Save button creates the node and closes the overlay */}
        <Button
          text="Save"
          onClick={() => {
            addNode(newNode);
            closeOverlay();
          }}
        />

        {/* Small slide-in animation for modal */}
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
