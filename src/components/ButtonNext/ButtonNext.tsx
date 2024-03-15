import './ButtonNext.css';

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
      Продолжить
    </button>
  );
}
