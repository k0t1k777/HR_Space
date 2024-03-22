import { numbers } from '../../../utils/constants';
import DateInput from '../../DateInput/DateInput';
import InputSelect from '../../InputSelect/InputSelect';
import Range from '../../Range/Range';
import SubTitle from '../../Subtitle/Subtitle';

interface StepEightProps {
  valueDate: string;
  setValueDate: (value: string ) => void;
  valueRecruters: string;
  setValueRecruters: (value: string) => void;
}

export default function StepEight({
  valueDate,
  setValueDate,
  valueRecruters,
  setValueRecruters
}: StepEightProps) {
  return (
    <div className="step-eight">
      <SubTitle subtitle='Количество кандидатов для поиска' />
      <Range />
      <SubTitle subtitle='Дата выхода сотрудника' />
      <DateInput selectedItem={valueDate} setSelectedItem={setValueDate} />
      <SubTitle subtitle='Количество рекрутеров' />
      <InputSelect 
        multi={numbers.map(num => num.toString())} 
        width='41px' 
        selectedItem={valueRecruters} 
        setSelectedItem={setValueRecruters}
      />
    </div>
  )
}