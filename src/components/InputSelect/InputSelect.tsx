import { useState } from 'react';
import './InputSelect.css';

export default function InputSelect({ click, setClick, multi, width, height, stylize}: any) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleItem = (item: string): void => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
      setClick(!click)
    }
  };

  return (
    <div>
      <div className={`input-select__container ${stylize ? stylize : ''}`}>
        {multi.map((item: any) => (
          <button
            key={item}
            className={`input-select__container-item ${
              selectedItem === item ? 'input-select__selected' : ''
            }`}
            onClick={() => toggleItem(item)}
            style={{
              width: width ? width : '',
              height: height ? height : ''
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
