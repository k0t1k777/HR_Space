import './StepThree.css';
import SubTitle from '../../Subtitle/Subtitle';
import Input from '../../Input/Input';
import MultiInput from '../../MultiInput/MultiInput';

export default function StepThree({ expiriense, education, skills }:any) {
  return (
    <div>
      <SubTitle subtitle='Ключевые навыки' />
      <Input placeholder={'Введите название'} options={skills}/>
      <SubTitle subtitle='Опыт работы' />
      <MultiInput multi={expiriense}/>
      <SubTitle subtitle='Образование' />
      <MultiInput multi={education}/>
    </div>
  );
}
