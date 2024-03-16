import { useState } from 'react';
import './MultiInput.css';

const multi: string[] = ['Инженер', 'Механик', 'Специальность', 'Профессия'];

export default function MultiInput() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (item: string): void => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <div className='multi-input__container'>
        {multi.map((item) => (
          <button
            key={item}
            className={`multi-input__container-item ${
              selectedItems.includes(item) ? 'selected' : ''
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
