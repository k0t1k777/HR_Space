import SubTitle from '../../Subtitle/Subtitle';
import MultiInput from '../../InputSelect/InputSelect';
import TextArea from '../../TextArea/TextArea';
import { useState } from 'react';
import './StepSix.css';

export default function StepSix({ mission, bonus }: any ) {
  const [ showBlock, setShowBlock ] = useState(0);
  return (
    <div className='step-six'>
      <SubTitle subtitle='Командировки' />
      <MultiInput placeholder={'Английский'} multi={mission} click={showBlock} setClick={setShowBlock} />
      <SubTitle subtitle='Бонусы от работадателя (необязательно)' />
      <MultiInput placeholder={'Английский'} multi={bonus} click={showBlock} setClick={setShowBlock} />
      <div className={showBlock ? 'step-six__area' : 'step-six__area_display_none'}>
        <SubTitle subtitle='Перечислите какие бонусы предоставляет ваша компания' />
        <TextArea placeholder='ДМС, транспорт, спортзал и тд.' />
      </div>
      
    </div>
  );
}
