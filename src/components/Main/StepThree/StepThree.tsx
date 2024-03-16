import './StepThree.css';
import SubTitle from '../../Subtitle/Subtitle';
import Input from '../../Input/Input';

export default function StepThree() {
  return (
    <div>
      <SubTitle subtitle='Ключевые навыки' />
      <Input placeholder={'Введите название'} />
      <SubTitle subtitle='Опыт работы' />
      <p>Силект</p>
      <SubTitle subtitle='Образование' />
      <p>Силект</p>
    </div>
  );
}
