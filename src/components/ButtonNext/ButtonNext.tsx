import './ButtonNext.css';
import { buttonsData } from '../../utils/constants';

interface ButtonNextTextProps {
  pressed?: boolean;
  disabled?: boolean;
  currentStep: number;
  handleContinue: (value: boolean) => void;
}

export default function ButtonNext({
  handleContinue,
  currentStep,
}: ButtonNextTextProps) {
  const buttonText = currentStep === 9 ? buttonsData.send : buttonsData.next
  return (
    <button className='button-next' onClick={() => handleContinue(true)}>
      {buttonText}
    </button>
  );
}
