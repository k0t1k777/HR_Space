import './StepFive.css';
import SubTitle from '../../Subtitle/Subtitle';
import MultiInput from '../../MultiInput/MultiInput';

export default function StepFive({ decoration, occupation, timetable }: any) {
  return (
    <div>
      <SubTitle subtitle='Оформление' />
      <MultiInput placeholder={'Английский'} multi={decoration} />
      <SubTitle subtitle='Тип занятости' />
      <MultiInput placeholder={'Английский'} multi={occupation} />{' '}
      <SubTitle subtitle='График работы' />
      <MultiInput placeholder={'Английский'} multi={timetable} />
    </div>
  );
}
