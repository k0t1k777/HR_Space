import { useEffect, useState } from 'react';
import './Range.css';

interface RangeProps {
  min?: string;
  max?: string;
  step?: string;
  selectedItem?: number | undefined;
  setSelectedItem?: (value: number) => void;
}

export default function Range({
  min,
  max,
  step,
  selectedItem,
  setSelectedItem,
}: RangeProps) {
  const [moveOutput, setMoveOutput] = useState<number>(0);
  const [bgColor, setBgColor] = useState<number>(0);

  const outputMove = () => {
    if (selectedItem == 1) {
      setMoveOutput(-3);
    }
    if (selectedItem == 2) {
      setMoveOutput(selectedItem + 20);
    }
    if (selectedItem == 3) {
      setMoveOutput(selectedItem * 16);
    }
    if (selectedItem == 4) {
      setMoveOutput(selectedItem * 18);
    }
    if (selectedItem == 5) {
      setMoveOutput(selectedItem * 19.7);
    }
    if (selectedItem == 6) {
      setMoveOutput(selectedItem * 20.5);
    }
    if (selectedItem == 7) {
      setMoveOutput(selectedItem * 21);
    }
    if (selectedItem == 8) {
      setMoveOutput(selectedItem * 21.5);
    }
    if (selectedItem == 9) {
      setMoveOutput(selectedItem * 22);
    }
    if (selectedItem == 10) {
      setMoveOutput(selectedItem * 22.2);
    }
  };

  const changeColor = () => {
    const numericValue = Number(selectedItem);
    if (numericValue === 1) {
      setBgColor(numericValue * 8);
    } else if (numericValue <= 8) {
      setBgColor(numericValue * 9);
    } else if (numericValue === 9) {
      setBgColor(numericValue * 9.5);
    } else if (numericValue === 10) {
      setBgColor(100);
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
        max={max ? max : '10'}
        step={step ? step : '1'}
        value={selectedItem}
        onChange={(e) => {
          if (selectedItem !== undefined && setSelectedItem)
            setSelectedItem(Number(e.target.value));
        }}
        // onMouseMove={() => mouseMove()}
        style={{
          background: `linear-gradient(90deg, rgba(191, 226, 255, 1) ${bgColor}%, rgba(238, 238, 238, 1) ${bgColor}%)`,
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
