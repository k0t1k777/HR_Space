import { ShowContent } from '../../../types/types';
import { StepEightData } from '../../../utils/constants';
import DateInput from '../../DateInput/DateInput';
import InputSelect from '../../InputSelect/InputSelect';
import Range from '../../Range/Range';
import SubTitle from '../../Subtitle/Subtitle';

interface StepEightProps {
  valueDate: string;
  setValueDate: (value: string) => void;
  valueRecruters: string;
  setValueRecruters: (value: string) => void;
  valueCandidats: number;
  setValueCandidats: (value: number) => void;
  showContent: ShowContent;
  valueDate: any;
}

export default function StepEight({
  valueDate,
  setValueDate,
  valueDate,
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
        multi={showContent.candidates_count}
        selectedItem={valueCandidats}
        setSelectedItem={setValueCandidats}
      />
      <SubTitle subtitle={StepEightData.subTitleDate} />
      <DateInput selectedItem={valueDate} setSelectedItem={setValueDate} inputDate={showContent.date} />
      <SubTitle subtitle={StepEightData.subTitleCountCandidates} />
      <InputSelect
        multi={showContent.recruiter_count}
        width='41px'
        selectedItem={valueRecruters}
        setSelectedItem={setValueRecruters}
      />
    </div>
  );
}
