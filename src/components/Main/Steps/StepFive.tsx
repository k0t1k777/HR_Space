import SubTitle from '../../Subtitle/Subtitle';
import MultiInput from '../../InputSelect/InputSelect';
import MultiInputSelect from '../../MultiInputSelect/MultiInputSelect';
import { StepFiveData } from '../../../utils/constants';

export default function StepFive({ decoration, occupation, timetable }: any) {
  return (
    <div>
      <SubTitle subtitle={StepFiveData.subTitleDecoration} />
      <MultiInput placeholder={StepFiveData.placeholderDecoration} multi={decoration} />
      <SubTitle subtitle={StepFiveData.subTitleOccupation} />
      <MultiInputSelect placeholder={StepFiveData.placeholderOccupation} multi={occupation} />{' '}
      <SubTitle subtitle={StepFiveData.subTitlTimetable} />
      <MultiInputSelect placeholder={StepFiveData.placeholderTimetable} multi={timetable} />
    </div>
  );
}
