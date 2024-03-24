import SubTitle from '../../Subtitle/Subtitle';
import TextArea from '../../TextArea/TextArea';
import InputWthithSelect from '../../InputWthithSelect/InputWthithSelect';
import { StepFourData, } from '../../../utils/constants';
import { ShowContent } from '../../../types/types';

interface StepFourProps {
  isValid: boolean;
  inputValuesRequirements: string;
  setInputValuesRequirements: (value: string) => void;
  inputValuesLanguage: string;
  setInputValuesLanguage: (value: string) => void;
  selectedLevel: string;
  setSelectedLevel: (value: string) => void;
  selectedValue: boolean;
  setSelectedValue: (value: boolean) => void;
  suggestions: string[];
  setSuggestions: (value: string[]) => void;
  showContent: ShowContent;
}

export default function StepFour({
  isValid,
  inputValuesRequirements,
  setInputValuesRequirements,
  inputValuesLanguage,
  setInputValuesLanguage,
  selectedValue,
  setSelectedValue,
  suggestions,
  setSuggestions,
  selectedLevel,
  setSelectedLevel,
  showContent,
}: StepFourProps) {
  return (
    <div>
      <SubTitle subtitle={StepFourData.subTitleLanguages} />
      <InputWthithSelect
        placeholder={StepFourData.placeholderLanguages}
        levels={showContent.languages_levels}
        options={showContent.languages}
        inputValue={inputValuesLanguage}
        setInputValue={setInputValuesLanguage}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        selectedLevel={selectedLevel}
        setSelectedLevel={setSelectedLevel}
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
