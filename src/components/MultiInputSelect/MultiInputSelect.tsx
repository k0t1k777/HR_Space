import { useState } from 'react';
import './MultiInputSelect.css';

export default function MultiInputSelect({ multi }: any) {
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
      <div className='multi-input-select__container'>
        {multi.map((item: any) => (
          <button
            key={item}
            className={`multi-input-select__container-item ${
              selectedItems.includes(item) ? 'multi-input-select__selected' : ''
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
