import React, { useContext, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CustomSelect } from '@/cuteui/components/custom-select';
import { Button } from '@/cuteui/components/button/button';
import { TextArea } from '@/cuteui/components/textarea';
import { WorkFlowContext } from '@/context/WorkFlowProvider';
// MultipleConditions overlay/modal lets the user define a group of conditions for advanced workflow branching.
// This is used when you want to check several properties at once (e.g., user type AND country).
const groupOperators: string[] = ['ALL must match', 'ANY can match'];
const conditionFields: string[] = ['User Type', 'Country', 'Signup Age'];
const operators: string[] = ['Equals', 'Not equals', 'Contains'];

const MultipleConditions = ({ closeOverlay }: { closeOverlay: () => void }) => {
  // Access workflow context to add nodes to the React Flow diagram.
  const context = useContext(WorkFlowContext);
  if (!context) return null;
  const { addNode } = context;

  // State for each form field: group operator, field, operator, and value.
  const [groupOp, setGroupOp] = useState<string>('');
  const [field, setField] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [value, setValue] = useState<string>('');

  // Define the new node to add to the workflow graph.
  // This node represents the multiple conditions and stores the selected values.
  const newNode = {
    id: 'MultipleConditions',
    position: { x: 220, y: 450 },
    data: { label: 'Multiple Conditions', groupOp, field, operator, value },
    type: 'multipleConditions',
  } as const;

  return (
    // Modal overlay for multiple conditions configuration. Uses a slide-in animation for smooth UX.
    <div className="absolute z-50 flex items-stretch mt-5  " style={{ top: '64px' }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[calc(100vh-100px)] ml-2 flex flex-col justify-between animate-slide-in">
        <div>
          {/* Header with back arrow and title. */}
          <div className="flex gap-4 items-center mb-6">
            <ArrowBackIcon onClick={closeOverlay} className="cursor-pointer" />
            <h2 className="text-sm font-semibold flex text-black">Add multiple conditions</h2>
          </div>
          <div className="flex flex-col gap-6">
            {/* Dropdown for group operator (ALL/ANY). */}
            <section>
              <p className="text-gray-500 mb-2">Group operator</p>
              <CustomSelect
                value={groupOp}
                onChange={(e) => setGroupOp(e.target.value)}
                options={groupOperators}
                placeholder="Choose an option"
                size="sm"
                height={42}
              />
            </section>
            {/* Dropdown for field to check (user type, country, etc.). */}
            <section>
              <p className="text-gray-500 mb-2">Field</p>
              <CustomSelect
                value={field}
                onChange={(e) => setField(e.target.value)}
                options={conditionFields}
                placeholder="Choose field"
                size="sm"
                height={42}
              />
            </section>
            {/* Dropdown for operator (equals, not equals, contains). */}
            <section>
              <p className="text-gray-500 mb-2">Operator</p>
              <CustomSelect
                value={operator}
                onChange={(e) => setOperator(e.target.value)}
                options={operators}
                placeholder="Choose operator"
                size="sm"
                height={42}
              />
            </section>
            {/* Text input for the condition value. */}
            <section>
              <p className="text-gray-500">Value</p>
              <TextArea
                labelName=""
                height="40px"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </section>
          </div>
        </div>
        {/* Save button adds the node, then closes the overlay. */}
        <Button
          text="Save"
          onClick={() => {
            addNode(newNode as any);
            closeOverlay();
          }}
        />
        {/* Slide-in animation for the modal. */}
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

// This overlay is for advanced branching logic in the workflow.
// If you want to add more fields or operators, update the dropdowns above.
export default MultipleConditions;
