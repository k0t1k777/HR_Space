import SubTitle from '../../Subtitle/Subtitle';
import AddInput from '../../AddInput/AddInput';
import InputSelect from '../../InputSelect/InputSelect';
import { StepThreeData } from '../../../utils/constants';

interface StepThreeProps {
  expiriense: string[];
  education: string[];
  skills: string[];
  added: string[];
  setAdded: (value: string[]) => void;
  valuesExperiense: string;
  setValuesExperiense: (value: string ) => void;
  valuesSalary: string;
  setValuesSalary: (value: string ) => void;
  inputValueSkill: string;
  setInputValueSkill: (value: string ) => void;
  isValid: boolean;
}

export default function StepThree({
  expiriense,
  education,
  skills,
  added,
  setAdded,
  valuesExperiense,
  setValuesExperiense,
  valuesSalary,
  setValuesSalary,
  inputValueSkill,
  setInputValueSkill,
  isValid,
}: StepThreeProps) {
  return (
    <div>
      <SubTitle subtitle={StepThreeData.subTitleSkills} />
      <AddInput
        placeholder={StepThreeData.placeholderName}
        options={skills}
        added={added}
        setAdded={setAdded}
        inputValue={inputValueSkill}
        setInputValue={setInputValueSkill}
        isValid={isValid}
      />
      <SubTitle subtitle={StepThreeData.subTitleExperiense} />
      <InputSelect
        multi={expiriense}
        selectedItem={valuesExperiense}
        setSelectedItem={setValuesExperiense}
      />
      <SubTitle subtitle={StepThreeData.subTitleEducation} />
      <InputSelect
        multi={education}
        selectedItem={valuesSalary}
        setSelectedItem={setValuesSalary}
      />
    </div>
  );
}
