import { useEffect, useState } from 'react';
import './Range.css';

interface RangeProps {
  min?: string;
  max?: string;
  step?: string;
  selectedItem: number;
  setSelectedItem: (value: number) => void;
  multi: number[];
}

export default function Range({
  min,
  max,
  step,
  selectedItem,
  setSelectedItem,
  multi,
}: RangeProps) {
  const [moveOutput, setMoveOutput] = useState<number>(0);
  const [bgColor, setBgColor] = useState<number>(0);

  useEffect(() => {
    if (selectedItem) {
      setSelectedItem(selectedItem);
      outputMove();
      changeColor();
    }
  }, [selectedItem]);

  const outputMove = () => {
    if (selectedItem >= 1 && selectedItem <= multi.length) {
      setMoveOutput(selectedItem * multi[selectedItem - 1]);
    }
  };

  const changeColor = () => {
    if (selectedItem >= 1 && selectedItem <= multi.length) {
      setBgColor(selectedItem * multi[selectedItem - 1]);
    }
  };

  useEffect(() => {
    if (selectedItem !== undefined && setSelectedItem) {
      setSelectedItem(selectedItem);
      outputMove();
      changeColor();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  return (
    <div className='range'>
      <input
        className='range__input'
        id='range'
        type='range'
        min={min ? min : '1'}
        max={max ? max : multi.length.toString()}
        step={step ? step : '1'}
        value={selectedItem}
        onChange={(e) => {
          if (selectedItem !== undefined && setSelectedItem)
            setSelectedItem(Number(e.target.value));
        }}
        style={{
          background: `linear-gradient(90deg, rgba(191, 226, 255, 1)
          ${bgColor}%, rgba(238, 238, 238, 1) ${bgColor}%)`,
        }}
      />
      <output
        className='range__output'
        style={{ left: moveOutput + 'px' }}
        htmlFor='range'
      >
        {selectedItem}
      </output>
    </div>
  );
}
