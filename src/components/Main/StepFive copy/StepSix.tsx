import SubTitle from '../../Subtitle/Subtitle';
import MultiInput from '../../MultiInput/MultiInput';

export default function StepSix({ mission, bonus }: any ) {
  return (
    <div>
      <SubTitle subtitle='Оформление' />
      <MultiInput placeholder={'Английский'} multi={mission} />
      <SubTitle subtitle='Тип занятости' />
      <MultiInput placeholder={'Английский'} multi={bonus} />{' '}
    </div>
  );
}
