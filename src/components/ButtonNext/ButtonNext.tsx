import './ButtonNext.css';
import { buttonsData } from '../../utils/constants';

interface ButtonNextTextProps {
  pressed?: boolean;
  disabled?: boolean;
  handleContinue: () => void;
}

export default function ButtonNext({
  handleContinue,
}: ButtonNextTextProps) {
  return (
    <button
      className='button-next'
      onClick={handleContinue}
    >
      {buttonsData.next}
    </button>
  );
}
