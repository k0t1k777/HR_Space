import './StepFour.css';
import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import Input from '../../Input/Input';

export default function StepFour() {
  return (
    <div>
      <SubTitle subtitle='Иностранный язык (необязательно)' />
      <Input placeholder={'Английский'} />
      <SubTitle subtitle='Дополнительные требования (необязательно)' />
      <TextArea placeholder={'Наличие водительский прав, мёд. книжки и др.'} />
    </div>
  );
}
