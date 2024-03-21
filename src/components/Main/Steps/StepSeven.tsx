import SubTitle from '../../Subtitle/Subtitle';
import Checkbox from '../../Checkbox/Checkbox';

interface StepSevenProps {
  valuesExpectations: string[];
  setValuesExpectations: (value: string[]) => void;
}

export default function StepSeven({
  valuesExpectations,
  setValuesExpectations,
}: StepSevenProps) {
  return (
    <div>
      <SubTitle subtitle='Вы ожидаете, что рекрутер' />
      <Checkbox
        valuesExpectations={valuesExpectations}
        setValuesExpectations={setValuesExpectations}
      />
    </div>
  );
}
