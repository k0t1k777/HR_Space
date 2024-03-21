import { dataStepNine } from "../../../utils/constants";
import InputSelect from "../../InputSelect/InputSelect";
import SubTitle from "../../Subtitle/Subtitle";
import "./StepNine.css";

interface StepNineProps {
  valuePay: string;
  setValuePay: (value: string) => void;
}

export default function StepNine({
  valuePay,
  setValuePay,
}: StepNineProps) {
  return (
    <div className="step-nine">
      <SubTitle subtitle="Выплата" />
      <InputSelect 
        multi={dataStepNine} 
        height='100px' 
        stylize='input-select__stylize' 
        selectedItem={valuePay} 
        setSelectedItem={setValuePay} 
      />
      <SubTitle subtitle="Вознаграждение за сотрудника" />
    </div>
  );
}
