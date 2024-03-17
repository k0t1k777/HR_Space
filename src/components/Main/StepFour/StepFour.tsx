import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import InputWthithSelect from '../../InputWthithSelect/InputWthithSelect';

export default function StepFour({ langages }: any) {
  return (
    <div>
      <SubTitle subtitle='Иностранный язык (необязательно)' />
      <InputWthithSelect placeholder={'Английский'} options={langages} />
      <SubTitle subtitle='Дополнительные требования (необязательно)' />
      <TextArea placeholder={'Наличие водительский прав, мёд. книжки и др.'} />
    </div>
  );
}
