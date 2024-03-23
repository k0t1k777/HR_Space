import { dataStepNine } from "../../../utils/constants";
import InputSalaryMin from "../../InputSalary/InputSalaryMin";
import InputSelect from "../../InputSelect/InputSelect";
import SubTitle from "../../Subtitle/Subtitle";
import { ShowContent } from '../Main';

interface StepNineProps {
  valuePay: string;
  setValuePay: (value: string) => void;
  reward: number;
  setReward: (value: number) => void;
  isValid: boolean;
  showContent: ShowContent;
}

export default function StepNine({
  valuePay,
  setValuePay,
  reward,
  setReward,
  isValid

}: StepNineProps) {
  return (
    <div className='step-nine'>
      <SubTitle subtitle='Выплата' clue='subtitle__clue' />
      <InputSelect 
        multi={dataStepNine} 
        height='100px' 
        stylize='input-select__type_wrap' 
        selectedItem={valuePay} 
        setSelectedItem={setValuePay} 
      />
      <SubTitle subtitle='Вознаграждение за сотрудника' />
      <InputSalaryMin 
        inputValueSalaryMin={reward} 
        setInputValueSalaryMin={setReward} 
        isValid={isValid}
        name={'input-salary__wrapper_before_none'}
        inputName={'input-salary_padding_left'}
        sdsdsdsd={showContent.timetable}
        />
    </div>
  );
}
