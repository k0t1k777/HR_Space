// import { useNavigate } from 'react-router-dom';
import './Button.css';

interface ButtonTextProps {
  buttonText: string;
  background?: string;
  color?: string;
  pressed?: boolean;
  disabled?: boolean;
  // goBack: () => void;
}

export default function Button({
  buttonText,
  background,
  color,
  pressed,
  disabled,
}: ButtonTextProps) {
  // const navigate = useNavigate();
  // const goBack = () => navigate(-1);
  return (
    <button
      className={`button ${pressed ? 'pressed' : ''} ${disabled ? 'disabled' : ''}`}
      // goBack={goBack}
      style={{
        background: background ? background : '#1785E5',
        color: color ? color : '#FFFFFF',
      }}
    >
      {buttonText}
    </button>
  );
}
