import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import InputWthithSelect from '../../InputWthithSelect/InputWthithSelect';

export default function StepFour({ languages }: any) {
  // console.log('languages: ', languages);
  return (
    <div>
      <SubTitle subtitle='Иностранный язык (необязательно)' />
      <InputWthithSelect placeholder={'Английский'} options={languages} />
       <SubTitle subtitle='Дополнительные требования (необязательно)' />
      <TextArea placeholder={'Наличие водительский прав, мёд. книжки и др.'} />
    </div>
  );
}

// options={languages}