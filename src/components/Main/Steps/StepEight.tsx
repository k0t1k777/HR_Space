import { ShowContent } from '../../../types/types';
import { numbers, StepEightData } from '../../../utils/constants';
import DateInput from '../../DateInput/DateInput';
import InputSelect from '../../InputSelect/InputSelect';
import Range from '../../Range/Range';
import SubTitle from '../../Subtitle/Subtitle';

interface StepEightProps {
  setValueDate: (value: string) => void;
  valueRecruters: string;
  setValueRecruters: (value: string) => void;
  valueCandidats: number;
  setValueCandidats: (value: number) => void;
  showContent: ShowContent;
}

export default function StepEight({
  setValueDate,
  valueRecruters,
  setValueRecruters,
  valueCandidats,
  setValueCandidats,
  showContent,
}: StepEightProps) {
  return (
    <div className='step-eight'>
      <SubTitle subtitle={StepEightData.subTitleRange} />
      <Range
        selectedItem={valueCandidats}
        setSelectedItem={setValueCandidats}
      />
      <SubTitle subtitle={StepEightData.subTitleDate} />
      <DateInput
        setSelectedItem={setValueDate}
        inputDate={showContent.date}
      />
      <SubTitle subtitle={StepEightData.subTitleCountCandidates} />
      <InputSelect
        multi={numbers.map((num) => num.toString())}
        width='41px'
        selectedItem={valueRecruters}
        setSelectedItem={setValueRecruters}
      />
    </div>
  );
}
