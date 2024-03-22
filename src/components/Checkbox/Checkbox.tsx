import './Checkbox.css';

interface CheckboxProps {
  text?: string;
}

export default function Checkbox({ text }: CheckboxProps) {
  return (
    <div className='check__container'>
      <input className='check__custom' id='check' type='checkbox' />
      <label className='check__fake' htmlFor='check'></label>
      <p className='check__caption'>{text}</p>
    </div>
  );
}
