import { dataStepNine } from '../../../utils/constants';
import InputSalary from '../../InputSalary/InputSalaryMin';
import InputSelect from '../../InputSelect/InputSelect';
import SubTitle from '../../Subtitle/Subtitle';
import './StepNine.css';

export default function StepNine() {
  return (
    <div className='step-nine'>
      <SubTitle subtitle='Выплата' />
      <InputSelect
        multi={dataStepNine}
        height='100px'
        stylize='input-select__type_wrap'
      />
      <SubTitle subtitle='Вознаграждение за сотрудника' />
      <InputSalary width='294px' />
    </div>
  );
}
