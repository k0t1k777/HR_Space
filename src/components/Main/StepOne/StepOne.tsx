import Input from '../../Input/Input';
import SubTitle from '../../Subtitle/Subtitle';
import InputSalary from '../../InputSalary/InputSalary';

export default function StepOne({
  options,
  towns,
  inputValueCity,
  setInputValueCity,
  setInputValueSpecialty,
  inputValueSpecialty,
  isRequired,
}: any) {
  return (
    <div>
      <SubTitle subtitle='Специальность' paddingTop='32px' />
      <Input
        placeholder={'Сантехник'}
        options={options}
        inputValue={inputValueSpecialty}
        setInputValue={setInputValueSpecialty}
        isRequired={isRequired}
      />
      <SubTitle subtitle='Город (необязательно)' />
      <Input
        placeholder={'Москва'}
        options={towns}
        isRequired={false}
        inputValue={inputValueCity}
        setInputValue={setInputValueCity}
      />
      <SubTitle
        subtitle='Заработная плата сотрудника'
        subtitleText='Средняя зарплата в выбранном регионе от 80 000 ₽'
      />
      <InputSalary />
    </div>
  );
}
