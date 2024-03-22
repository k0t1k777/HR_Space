import './ButtonNext.css';
import { buttonsData } from '../../utils/constants';

interface ButtonNextTextProps {
  pressed?: boolean;
  disabled?: boolean;
  handleContinue: (value: boolean) => void;
}

export default function ButtonNext({
  handleContinue,
}: ButtonNextTextProps) {
  return (
    <button
      className='button-next'
      onClick={() => handleContinue(true)}
    >
      {buttonsData.next}
    </button>
  );
}
