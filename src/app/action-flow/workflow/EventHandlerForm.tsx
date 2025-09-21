import { TextArea } from '@/cuteui/components/textarea';
import { CustomSelect } from '@/cuteui/components/custom-select';
import { useState } from 'react';
import { Search } from '@/cuteui/components/searchbar';
import { Button } from '@/cuteui/components/button/button';

const tags = ['Tag-1', 'Tag-2', 'Tag-3'];
const notificationTypes = ['Type-1', 'Type-2', 'Type-3'];

const EventHandlerForm = ({ setInitialNode, setWorkflowName, setDisplayForm }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [notificationType, setNotificationType] = useState('');

  const intialNode = [
    {
      id: 'InitialNode',
      position: { x: 0, y: 0 },
      data: { label: name },
      type: 'initial',
    },
  ];
  return (
    <div className="absolute z-50 flex w-[500px] h-full left-0">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full flex flex-col justify-between">
        <div>
          <div className="flex gap-4 items-center mb-6">
            <h2 className="text-sm font-semibold flex text-black">Event Handler Details</h2>
          </div>
          <div className="flex flex-col gap-6">
            <section className="">
              <p className="text-gray-500 ">Name</p>
              <TextArea
                labelName=""
                height="40px"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </section>
            <section>
              <p className="text-gray-500">Description</p>
              <TextArea
                labelName=""
                value={description}
                height="40px"
                onChange={(e) => setDescription(e.target.value)}
              />
            </section>
            <section>
              <p className="text-gray-500 mb-2">Tags</p>
              <CustomSelect
                onChange={(e) => setTag(e.target.value)}
                options={tags}
                value={tag}
                placeholder="Select"
                size="sm"
                height={42}
              />
            </section>
            <section>
              <p className="text-gray-500 mb-2">Notification type</p>
              <CustomSelect
                value={notificationType}
                onChange={(e) => setNotificationType(e.target.value)}
                options={notificationTypes}
                placeholder="Select"
                size="sm"
                height={42}
              />
            </section>
          </div>
        </div>
        <Button
          text="Save"
          onClick={() => {
            setInitialNode(intialNode);
            setWorkflowName(name);
            setDisplayForm(false);
          }}
        />
      </div>
    </div>
  );
};
export default EventHandlerForm;
