import { dataStepNine } from "../../../utils/constants";
import InputSalary from "../../InputSalaryMin/InputSalaryMin";
import InputSelect from "../../InputSelect/InputSelect";
import SubTitle from "../../Subtitle/Subtitle";
import "./StepNine.css";

export default function StepNine() {
  return (
    <div className="step-nine">
      <SubTitle subtitle="Выплата" />
      <InputSelect multi={dataStepNine} height='100px' stylize='input-select__stylize' />
      <SubTitle subtitle="Вознаграждение за сотрудника" />
      <InputSalary width="294px" step="input-step__display" wrap="input-salary__before_none" pad="input-salary__padding" />
    </div>
  );
}
