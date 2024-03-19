import InputSalary from '../../InputSalary/InputSalary';
import InputSelect from '../../InputSelect/InputSelect';
import SubTitle from '../../Subtitle/Subtitle';
import './StepNine.css';

export default function StepNine() {
  return (
    <div className="step-nine">
      <SubTitle subtitle='Выплата' />
      {/* <InputSelect/> */}
      <SubTitle subtitle='Вознаграждение за сотрудника' />
      <InputSalary />
    </div>
  )
}