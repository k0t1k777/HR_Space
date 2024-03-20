import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import { StepTwoData } from '../../../utils/constants'

export default function StepTwo() {
  return (
    <div>
      <SubTitle subtitle={StepTwoData.subTitleSpeciality} />
      <TextArea
        placeholder={StepTwoData.placeholderSpeciality}
      />
    </div>
  );
}
