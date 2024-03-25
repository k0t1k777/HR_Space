import { StepSixNine } from '../../../utils/constants';
import InputSalaryMin from '../../InputSalary/InputSalaryMin';
import InputSelect from '../../InputSelect/InputSelect';
import SubTitle from '../../Subtitle/Subtitle';
import { ShowContent } from '../../../types/types';

interface StepNineProps {
  valuePay: string;
  setValuePay: (value: string) => void;
  reward: string;
  setReward: (value: string) => void;
  isValid: boolean;
  showContent: ShowContent;
}

export default function StepNine({
  valuePay,
  setValuePay,
  reward,
  setReward,
  isValid,
  showContent,
}: StepNineProps) {

  return (
    <div className='step-nine'>
      <SubTitle subtitle={StepSixNine.subTitlePayments} />
      <InputSelect
        multi={showContent.payments}
        height='100px'
        stylize='input-select__type_wrap'
        selectedItem={valuePay}
        setSelectedItem={setValuePay}
      />
      <SubTitle subtitle={StepSixNine.subTitleAward} />
      <InputSalaryMin
        placeholder={StepSixNine.placeholderAward}
        inputValueSalaryMin={reward}
        setInputValueSalaryMin={setReward}
        isValid={isValid}
        name={'input-salary__wrapper_before_none'}
        inputName={'input-salary_padding_left'}
      />
    </div>
  );
}
