import './StepThree.css';
import SubTitle from '../../Subtitle/Subtitle';
import Input from '../../Input/Input';
import MultiInput from '../../MultiInput/MultiInput';

export default function StepThree() {
  return (
    <div>
      <SubTitle subtitle='Ключевые навыки' />
      <Input placeholder={'Введите название'} />
      <SubTitle subtitle='Опыт работы' />
      <MultiInput />
      <SubTitle subtitle='Образование' />
      <MultiInput />
    </div>
  );
}
