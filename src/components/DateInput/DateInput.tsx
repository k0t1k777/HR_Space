import './DateInput.css';

export default function DateInput() {

  return (
    <div className="date-input">
      <input className='date-input__item' id='date' type="date" />
      <div className="date-input__fake"></div>
    </div>
  )
}