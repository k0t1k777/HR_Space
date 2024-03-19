import SubTitle from '../../Subtitle/Subtitle';
import MultiInput from '../../InputSelect/InputSelect';
import MultiInputSelect from '../../MultiInputSelect/MultiInputSelect';

export default function StepFive({ decoration, occupation, timetable }: any) {
  return (
    <div>
      <SubTitle subtitle='Оформление' />
      <MultiInput placeholder={'Английский'} multi={decoration} />
      <SubTitle subtitle='Тип занятости' />
      <MultiInputSelect placeholder={'Английский'} multi={occupation} />{' '}
      <SubTitle subtitle='График работы' />
      <MultiInputSelect placeholder={'Английский'} multi={timetable} />
    </div>
  );
}
