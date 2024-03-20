import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import InputWthithSelect from '../../InputWthithSelect/InputWthithSelect';
import { StepFourData } from '../../../utils/constants';

export default function StepFour({ languages }: any) {
  return (
    <div>
      <SubTitle subtitle={StepFourData.subTitleLanguages} />
      <InputWthithSelect placeholder={StepFourData.placeholderLanguages} options={languages} />
      <SubTitle subtitle={StepFourData.subTitleExtra} />
      <TextArea placeholder={StepFourData.placeholderExtra} />
    </div>
  );
}

