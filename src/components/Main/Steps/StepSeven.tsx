import SubTitle from '../../Subtitle/Subtitle';
import Checkbox from '../../Checkbox/Checkbox';
import { ShowContent } from '../Main';

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
      <SubTitle subtitle='Вы ожидаете, что рекрутер' />
      <Checkbox
        valuesExpectations={valuesExpectations}
        setValuesExpectations={setValuesExpectations}
        checkCaption={showContent.expectations}
      />
    </div>
  );
}
