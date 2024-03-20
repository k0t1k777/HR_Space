import SubTitle from '../../Subtitle/Subtitle';
import AddInput from '../../AddInput/AddInput';
import InputSelect from '../../InputSelect/InputSelect';
import { StepThreeData } from '../../../utils/constants';

interface StepThreeProps {
  expiriense: string[];
  education: string[];
  skills: string[];
  // inputValuesLanguage: string;
  // setInputValuesLanguage: (value: string) => void;
  // isValid: boolean;
  // selectedValue: any;
  // setSelectedValue: any;
}

export default function StepThree({
  expiriense,
  education,
  skills,
  // inputValuesLanguage,
  // isValid,
  // setIsValid,
  // selectedValue,
  // setSelectedValue,
  // setInputValuesLanguage,
}: StepThreeProps) {
  return (
    <div>
      <SubTitle subtitle={StepThreeData.subTitleSkills} />
      <AddInput
        placeholder={StepThreeData.placeholderName}
        options={skills}
        // inputValue={inputValuesLanguage}
        // setInputValue={setInputValuesLanguage}
        // isValid={isValid}
        // setIsValid={setIsValid}
        // selectedValue={selectedValue}
        //       setSelectedValue={setSelectedValue}
      />
      <SubTitle subtitle={StepThreeData.subTitleExperiense} />
      <InputSelect multi={expiriense} />
      <SubTitle subtitle={StepThreeData.subTitleEducation} />
      <InputSelect multi={education} />
    </div>
  );
}
