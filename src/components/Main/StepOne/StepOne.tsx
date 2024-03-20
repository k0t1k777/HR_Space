import Input from '../../Input/Input';
import SubTitle from '../../Subtitle/Subtitle';
import InputSalaryMin from '../../InputSalaryMin/InputSalaryMin';
import InputSalaryMax from '../../InputSalaryMax/InputSalaryMax';
// import InputSalary from '../../InputSalary/InputSalary';
import { stepOneData } from '../../../utils/constants'

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
}: any) {
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
      {/* <InputSalary inputValueSalaryMin={inputValueSalaryMin}
          setInputValueSalaryMin={setInputValueSalaryMin}
          inputValueSalaryMax={inputValueSalaryMax}
          setInputValueSalaryMax={setInputValueSalaryMax}
          isValid={isValid}/> */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <InputSalaryMin
          inputValueSalaryMin={inputValueSalaryMin}
          setInputValueSalaryMin={setInputValueSalaryMin}
          isValid={isValid}
        />
        <InputSalaryMax
          inputValueSalaryMax={inputValueSalaryMax}
          setInputValueSalaryMax={setInputValueSalaryMax}
          isValid={isValid}
        />
      </div>
    </div>
  );
}
