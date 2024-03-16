import './ButtonPrevious.css';

interface ButtonPreviousTextProps {
  pressed?: boolean;
  disabled?: boolean;
  handleBack: () => void;
}

export default function ButtonPrevious({
  pressed,
  disabled,
  handleBack,
}: ButtonPreviousTextProps) {
  return (
    <button
      className={`button-previous ${pressed ? 'pressed' : ''} ${
        disabled ? 'disabled' : ''
      }`}
      onClick={handleBack}
      disabled={disabled}
    >
      Назад
    </button>
  );
}
