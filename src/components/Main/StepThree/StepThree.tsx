import SubTitle from '../../Subtitle/Subtitle';
import MultiInput from '../../MultiInput/MultiInput';
import AddInput from '../../AddInput/AddInput';

export default function StepThree({ expiriense, education, skills }:any) {
  return (
    <div>
      <SubTitle subtitle='Ключевые навыки' />
      <AddInput placeholder={'Введите название'} options={skills}/>
      <SubTitle subtitle='Опыт работы' />
      <MultiInput multi={expiriense}/>
      <SubTitle subtitle='Образование' />
      <MultiInput multi={education}/>
    </div>
  );
}
