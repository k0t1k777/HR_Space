import './StepOne.css';
import Input from '../../Input/Input';
import SubTitle from '../../Subtitle/Subtitle';
import InputSalary from '../../InputSalary/InputSalary';

export default function StepOne() {
  return (
    <div>
      <SubTitle subtitle='Специальность' />
      <Input placeholder={'Сантехник'} />
      <SubTitle subtitle='Город (необязательно)' />
      <Input placeholder={'Москва'} />
      <SubTitle
        subtitle='Заработная плата сотрудника (необязательно)'
        subtitleText='Средняя зарплата в выбранном регионе от 80 000 ₽'
      />
      <InputSalary />
    </div>
  );
}
