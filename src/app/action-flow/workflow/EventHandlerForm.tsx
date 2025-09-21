import { TextArea } from '@/cuteui/components/textarea';
const EventHandlerForm = () => {
  return (
    <form>
      <TextArea labelName="intial" value="" onChange={(e) => console.log(e)}></TextArea>
    </form>
  );
};
export default EventHandlerForm;
