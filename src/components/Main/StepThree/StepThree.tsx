import SubTitle from '../../Subtitle/Subtitle';
import AddInput from '../../AddInput/AddInput';
import InputSelect from '../../InputSelect/InputSelect';
import { StepThreeData } from '../../../utils/constants'

export default function StepThree({ expiriense, education, skills }:any) {
  return (
    <div>
      <SubTitle subtitle={StepThreeData.subTitleSkills} />
      <AddInput placeholder={StepThreeData.placeholderName} options={skills}/>
      <SubTitle subtitle={StepThreeData.subTitleExperiense} />
      <InputSelect multi={expiriense}/>
      <SubTitle subtitle={StepThreeData.subTitleEducation} />
      <InputSelect multi={education}/>
    </div>
  );
}
