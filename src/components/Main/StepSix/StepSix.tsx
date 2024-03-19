import './StepSix.css';
import SubTitle from '../../Subtitle/Subtitle';
import MultiInput from '../../MultiInput/MultiInput';

export default function StepSix() {
  return (
    <div className="step-six">
      <SubTitle subtitle='Командировки (необязательно)' />
      <MultiInput />
      <SubTitle subtitle='Бонусы от работадателя (необязательно)' />
      <MultiInput />
    </div>
  )
}