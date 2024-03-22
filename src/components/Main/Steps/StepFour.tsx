import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import InputWthithSelect from '../../InputWthithSelect/InputWthithSelect';
import { StepFourData, LanguageOption } from '../../../utils/constants';

interface StepFourProps {
  languages: LanguageOption[];
  isValid: boolean;
  inputValuesRequirements: string;
  setInputValuesRequirements: (value: string) => void;
  inputValuesLanguage: string;
  setInputValuesLanguage: (value: string) => void;
}

export default function StepFour({
  languages,
  isValid,
  inputValuesRequirements,
  setInputValuesRequirements,
  inputValuesLanguage,
  setInputValuesLanguage,
}: StepFourProps) {
  return (
    <div>
      <SubTitle subtitle={StepFourData.subTitleLanguages} />
      <InputWthithSelect
        placeholder={StepFourData.placeholderLanguages}
        options={languages}
        inputValue={inputValuesLanguage}
        setInputValue={setInputValuesLanguage}
        isValid={isValid}
      />
      <SubTitle subtitle={StepFourData.subTitleExtra} />
      <TextArea
        placeholder={StepFourData.placeholderExtra}
        isValid={true}
        inputValues={inputValuesRequirements}
        setInputValues={setInputValuesRequirements}
      />
    </div>
  );
}
