import { useState } from 'react';
import './InputSelect.css';

export default function InputSelect({ multi }: any) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleItem = (item: string): void => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <div>
      <div className='input-select__container'>
        {multi.map((item: any) => (
          <button
            key={item}
            className={`input-select__container-item ${
              selectedItem === item ? 'input-select__selected' : ''
            }`}
            onClick={() => toggleItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
