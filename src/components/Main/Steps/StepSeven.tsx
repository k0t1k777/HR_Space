import SubTitle from '../../Subtitle/Subtitle';
import Checkbox from '../../Checkbox/Checkbox';
import { StepSevenData } from '../../../utils/constants';
import { ShowContent } from '../../../types/types';

interface StepSevenProps {
  valuesExpectations: string[];
  setValuesExpectations: (value: string[]) => void;
  showContent: ShowContent;
}

export default function StepSeven({
  valuesExpectations,
  setValuesExpectations,
  showContent,
}: StepSevenProps) {
  return (
    <div>
      <SubTitle subtitle={StepSevenData.subTitleExpectations} />
      <Checkbox
        valuesExpectations={valuesExpectations}
        setValuesExpectations={setValuesExpectations}
        checkCaption={showContent.expectations}
      />
    </div>
  );
}
