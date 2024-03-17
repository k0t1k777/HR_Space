import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';

export default function StepTwo() {
  return (
    <div>
      <SubTitle subtitle='Обязанности сотрудника' />
      <TextArea
        placeholder={'Опишите чем придется заниматься на данной должности'}
      />
    </div>
  );
}
