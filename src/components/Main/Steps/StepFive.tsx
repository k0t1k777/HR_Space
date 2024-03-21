import SubTitle from '../../Subtitle/Subtitle';
import MultiInputSelect from '../../MultiInputSelect/MultiInputSelect';
import { StepFiveData } from '../../../utils/constants';
import InputSelect from '../../InputSelect/InputSelect';

interface StepFiveProps {
  decoration: string[];
  occupation: string[];
  timetable: string[];
  valuesDecoration: string;
  setValuesDecoration: (value: string) => void;
  valuesOccupation: string[];
  setValuesOccupation: (value: string[]) => void;
  valuesTimetable: string[];
  setValuesTimetable: (value: string[]) => void;
}

export default function StepFive({
  decoration,
  occupation,
  timetable,
  valuesDecoration,
  setValuesDecoration,
  valuesOccupation,
  setValuesOccupation,
  valuesTimetable,
  setValuesTimetable,
}: StepFiveProps) {
  return (
    <div>
      <SubTitle subtitle={StepFiveData.subTitleDecoration} />
      <InputSelect
        multi={decoration}
        selectedItem={valuesDecoration}
        setSelectedItem={setValuesDecoration}
      />
      <SubTitle subtitle={StepFiveData.subTitleOccupation} />
      <MultiInputSelect
        multi={occupation}
        selectedItems={valuesOccupation}
        setSelectedItems={setValuesOccupation}
      />{' '}
      <SubTitle subtitle={StepFiveData.subTitlTimetable} />
      <MultiInputSelect
        multi={timetable}
        selectedItems={valuesTimetable}
        setSelectedItems={setValuesTimetable}
      />
    </div>
  );
}
