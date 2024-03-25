import { useEffect, useState } from 'react';
import './DateInput.css';

interface DateInputProps {
  selectedItem: string;
  setSelectedItem: (value: string) => void;
  inputDate: string;
}

export default function DateInput({
  selectedItem,
  setSelectedItem,
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
        value={selectedItem === '' ? inputDate : selectedItem}
        onChange={handleDateChange}
      />
      <div className='date-input__fake'></div>
    </div>
  );
}
