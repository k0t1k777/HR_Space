import SubTitle from '../../Subtitle/Subtitle';
import AddInput from '../../AddInput/AddInput';
import InputSelect from '../../InputSelect/InputSelect';

export default function StepThree({ expiriense, education, skills }:any) {
  return (
    <div>
      <SubTitle subtitle='Ключевые навыки' />
      <AddInput placeholder={'Введите название'} options={skills}/>
      <SubTitle subtitle='Опыт работы' />
      <InputSelect multi={expiriense}/>
      <SubTitle subtitle='Образование' />
      <InputSelect multi={education}/>
    </div>
  );
}
