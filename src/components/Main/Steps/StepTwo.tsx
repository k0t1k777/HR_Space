import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import { StepTwoData } from '../../../utils/constants';

interface StepTwoProps {
  inputValuesDuties: string;
  setInputValuesDuties: (value: string) => void;
  isValid: boolean;
}

export default function StepTwo({
  inputValuesDuties,
  setInputValuesDuties,
  isValid,
}: StepTwoProps) {
  return (
    <div>
      <SubTitle subtitle={StepTwoData.subTitleSpeciality} />
      <TextArea
        placeholder={StepTwoData.placeholderSpeciality}
        inputValuesDuties={inputValuesDuties}
        setInputValuesDuties={setInputValuesDuties}
        isValid={isValid}
      />
    </div>
  );
}
