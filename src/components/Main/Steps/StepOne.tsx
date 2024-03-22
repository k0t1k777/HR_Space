import Input from '../../Input/Input';
import SubTitle from '../../Subtitle/Subtitle';
import InputSalaryMin from '../../InputSalary/InputSalaryMin';
import InputSalaryMax from '../../InputSalary/InputSalaryMax';
import { stepOneData } from '../../../utils/constants';

interface StepOneProps {
  options: string[];
  towns: string[];
  inputValueCity: string;
  setInputValueCity: (value: string) => void;
  setInputValueSpecialty: (value: string) => void;
  setInputValueSalaryMin: (value: string) => void;
  setInputValueSalaryMax: (value: string) => void;
  inputValueSpecialty: string;
  inputValueSalaryMin: string;
  inputValueSalaryMax: string;
  isValid: boolean;
}

export default function StepOne({
  options,
  towns,
  inputValueCity,
  setInputValueCity,
  inputValueSpecialty,
  setInputValueSpecialty,
  inputValueSalaryMin,
  setInputValueSalaryMin,
  inputValueSalaryMax,
  setInputValueSalaryMax,
  isValid,
}: StepOneProps) {
  return (
    <div>
      <SubTitle subtitle={stepOneData.subTitleSpeciality} paddingTop='32px' />
      <Input
        placeholder={stepOneData.subTitleSpeciality}
        options={options}
        inputValue={inputValueSpecialty}
        setInputValue={setInputValueSpecialty}
        isValid={isValid}
      />
      <SubTitle subtitle={stepOneData.subTitleTown} />
      <Input
        placeholder={stepOneData.placeholderTown}
        options={towns}
        inputValue={inputValueCity}
        setInputValue={setInputValueCity}
        isValid={true}
      />
      <SubTitle
        subtitle={stepOneData.subTitleSalary}
        subtitleText={stepOneData.placeholderSalary}
      />
      <div style={{ display: 'flex', gap: '12px' }}>
        <InputSalaryMin
          inputValueSalaryMin={inputValueSalaryMin}
          setInputValueSalaryMin={setInputValueSalaryMin}
          isValid={isValid} name={''} inputName={''}        />
        <InputSalaryMax
          inputValueSalaryMax={inputValueSalaryMax}
          setInputValueSalaryMax={setInputValueSalaryMax}
          isValid={isValid}
        />
      </div>
    </div>
  );
}
