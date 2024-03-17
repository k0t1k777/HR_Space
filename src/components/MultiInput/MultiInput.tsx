import { useState } from 'react';
import './MultiInput.css';

export default function MultiInput({ multi }: any) {
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
      <div className='multi-input__container'>
        {multi.map((item: any) => (
          <button
            key={item}
            className={`multi-input__container-item ${
              selectedItem === item ? 'selected' : ''
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
