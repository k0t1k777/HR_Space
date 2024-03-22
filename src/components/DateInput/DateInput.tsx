import './DateInput.css';

interface DateInputProps {
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

export default function DateInput({
  selectedItem,
  setSelectedItem
}: DateInputProps) {

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedItem(e.target.value);
  };

  return (
    <div className="date-input">
      <input 
        className='date-input__item' 
        id='date' 
        type="date"
        value={selectedItem}
        onChange={handleDateChange} 
      />
      <div className="date-input__fake"></div>
    </div>
  );
}
