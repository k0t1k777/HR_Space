import { useEffect, useState } from 'react';
import './DateInput.css';

interface DateInputProps {
  setValueDate: (value: string) => void;
  inputDate: string;
}

export default function DateInput({
  // setValueDate,
  inputDate,
  // valueDate,
}: DateInputProps) {
  const [valueDate, setValueDate] = useState('');

  useEffect(() => {
    setValueDate(inputDate);
  }, [inputDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setValueDate(newDate);
  };

  return (
    <div className='date-input'>
      <input
        className='date-input__item'
        id='date'
        type='date'
        value={valueDate}
        onChange={handleDateChange}
      />
      <div className='date-input__fake'></div>
    </div>
  );
}
