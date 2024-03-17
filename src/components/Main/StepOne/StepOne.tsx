import Input from '../../Input/Input';
import SubTitle from '../../Subtitle/Subtitle';
import InputSalary from '../../InputSalary/InputSalary';

export default function StepOne({ options, towns }: any) {
  return (
    <div>
      <SubTitle subtitle='Специальность' />
      <Input placeholder={'Сантехник'} options={options}/>
      <SubTitle subtitle='Город (необязательно)' />
      <Input placeholder={'Москва'} options={towns}/>
      <SubTitle
        subtitle='Заработная плата сотрудника (необязательно)'
        subtitleText='Средняя зарплата в выбранном регионе от 80 000 ₽'
      />
      <InputSalary />
    </div>
  );
}
