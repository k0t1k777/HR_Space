import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import InputWthithSelect from '../../InputWthithSelect/InputWthithSelect';
import { StepFourData } from '../../../utils/constants';

interface StepFourProps {
  languages: string[];
  isValid: boolean;
}

export default function StepFour({ languages, isValid }: StepFourProps) {
  return (
    <div>
      <SubTitle subtitle={StepFourData.subTitleLanguages} />
      <InputWthithSelect
        placeholder={StepFourData.placeholderLanguages}
        options={languages}
      />
      <SubTitle subtitle={StepFourData.subTitleExtra} />
      <TextArea placeholder={StepFourData.placeholderExtra} isValid={true} />
    </div>
  );
}
