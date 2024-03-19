import InputSalary from '../../InputSalary/InputSalary';
import MultiInput from '../../MultiInput/MultiInput';
import SubTitle from '../../Subtitle/Subtitle';
import './StepNine.css';

export default function StepNine() {
  return (
    <div className="step-nine">
      <SubTitle subtitle='Выплата' />
      <MultiInput />
      <SubTitle subtitle='Вознаграждение за сотрудника' />
      <InputSalary />
    </div>
  )
}