import Input from '../../Input/Input';
import SubTitle from '../../Subtitle/Subtitle';
import InputSalaryMin from '../../InputSalaryMin/InputSalaryMin';
import InputSalaryMax from '../../InputSalaryMax/InputSalaryMax';
import InputSalary from '../../InputSalary/InputSalary';

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
      <SubTitle subtitle='Специальность' paddingTop='32px' />
      <Input
        placeholder={'Сантехник'}
        options={options}
        inputValue={inputValueSpecialty}
        setInputValue={setInputValueSpecialty}
        isValid={isValid}
      />
      <SubTitle subtitle='Город (необязательно)' />
      <Input
        placeholder={'Москва'}
        options={towns}
        inputValue={inputValueCity}
        setInputValue={setInputValueCity}
        isValid={true}
      />
      <SubTitle
        subtitle='Заработная плата сотрудника'
        subtitleText='Средняя зарплата в выбранном регионе от 80 000 ₽'
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
