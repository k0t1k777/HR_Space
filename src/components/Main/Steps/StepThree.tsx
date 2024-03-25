import SubTitle from '../../Subtitle/Subtitle';
import AddInput from '../../AddInput/AddInput';
import InputSelect from '../../InputSelect/InputSelect';
import { StepThreeData } from '../../../utils/constants';
import { ShowContent } from '../../../types/types';


interface StepThreeProps {
  added: string[];
  setAdded: (value: string[]) => void;
  valuesExperiense: string;
  setValuesExperiense: (value: string ) => void;
  valuesSalary: string;
  setValuesSalary: (value: string ) => void;
  inputValueSkill: string;
  setInputValueSkill: (value: string ) => void;
  isValid: boolean;
  showContent: ShowContent;
}

export default function StepThree({
  added,
  setAdded,
  valuesExperiense,
  setValuesExperiense,
  valuesSalary,
  setValuesSalary,
  inputValueSkill,
  setInputValueSkill,
  isValid,
  showContent,
}: StepThreeProps) {
  return (
    <div>
      <SubTitle subtitle={StepThreeData.subTitleSkills} />
      <AddInput
        placeholder={StepThreeData.placeholderName}
        options={showContent.skills}
        added={added}
        setAdded={setAdded}
        inputValue={inputValueSkill}
        setInputValue={setInputValueSkill}
        isValid={isValid}
      />
      <SubTitle subtitle={StepThreeData.subTitleExperiense} />
      <InputSelect
        multi={showContent.experience}
        selectedItem={valuesExperiense}
        setSelectedItem={setValuesExperiense}
      />
      <SubTitle subtitle={StepThreeData.subTitleEducation} />
      <InputSelect
        multi={showContent.education}
        selectedItem={valuesSalary}
        setSelectedItem={setValuesSalary}
      />
    </div>
  );
}
