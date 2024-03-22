import { numbers } from '../../../utils/constants';
import DateInput from '../../DateInput/DateInput';
import InputSelect from '../../InputSelect/InputSelect';
import Range from '../../Range/Range';
import SubTitle from '../../Subtitle/Subtitle';
import './StepEight.css';

export default function StepEight() {
  return (
    <div className='step-eight'>
      <SubTitle subtitle='Количество кандидатов для поиска' />
      <Range />
      <SubTitle subtitle='Дата выхода сотрудника' />
      <DateInput />
      <SubTitle subtitle='Количество рекрутеров' />
      <InputSelect multi={numbers} width='41px' />
    </div>
  );
}
