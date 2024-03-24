import SubTitle from '../../Subtitle/Subtitle';
import MultiInputSelect from '../../MultiInputSelect/MultiInputSelect';
import { StepFiveData } from '../../../utils/constants';
import InputSelect from '../../InputSelect/InputSelect';
import { ShowContent } from '../../../types/types';

interface StepFiveProps {
  valuesDecoration: string;
  setValuesDecoration: (value: string) => void;
  valuesOccupation: string[];
  setValuesOccupation: (value: string[]) => void;
  valuesTimetable: string[];
  setValuesTimetable: (value: string[]) => void;
  showContent: ShowContent;
}

export default function StepFive({
  valuesDecoration,
  setValuesDecoration,
  valuesOccupation,
  setValuesOccupation,
  valuesTimetable,
  setValuesTimetable,
  showContent,
}: StepFiveProps) {
  return (
    <div>
      <SubTitle subtitle={StepFiveData.subTitleDecoration} />
      <InputSelect
        multi={showContent.registration}
        selectedItem={valuesDecoration}
        setSelectedItem={setValuesDecoration}
      />
      <SubTitle subtitle={StepFiveData.subTitleOccupation} />
      <MultiInputSelect
        multi={showContent.occupation}
        selectedItems={valuesOccupation}
        setSelectedItems={setValuesOccupation}
      />{' '}
      <SubTitle subtitle={StepFiveData.subTitlTimetable} />
      <MultiInputSelect
        multi={showContent.timetable}
        selectedItems={valuesTimetable}
        setSelectedItems={setValuesTimetable}
      />
    </div>
  );
}
