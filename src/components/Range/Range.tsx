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
    if(selectedItem == 1) {
      setMoveOutput(-1)
    }
    if(selectedItem == 2) {
      setMoveOutput(selectedItem * 4.5)
    }
    if(selectedItem == 3) {
      setMoveOutput(selectedItem * 6.5)
    }
    if(selectedItem == 4) {
      setMoveOutput(selectedItem * 7.3)
    }
    if(selectedItem == 5) {
      setMoveOutput(selectedItem * 7.8)
    }
    if(selectedItem == 6) {
      setMoveOutput(selectedItem * 8.2)
    }
    if(selectedItem == 7) {
      setMoveOutput(selectedItem * 8.5)
    }
    if(selectedItem == 8) {
      setMoveOutput(selectedItem * 8.7)
    }
    if(selectedItem == 9) {
      setMoveOutput(selectedItem * 8.8)
    }
    if(selectedItem == 10) {
      setMoveOutput(selectedItem * 8.9)
    }


  };

  const changeColor = () => {
    if(selectedItem === 1) {
      setBgColor(selectedItem * 8)
    }
    if (selectedItem > 1 && selectedItem < 9) {
      setBgColor(selectedItem * 9)
    }
    if(selectedItem === 9) {
      setBgColor(selectedItem * 9.5)
    }
    if(selectedItem === 10) {
      setBgColor(selectedItem * 10)
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
        style={{
          background: `linear-gradient(90deg, rgba(191, 226, 255, 1)
          ${bgColor}%, rgba(238, 238, 238, 1) ${bgColor}%)`,
        }}
      />
      <output
        className='range__output'
        style={{ left: moveOutput + '%' }}
        htmlFor='range'
      >
        {selectedItem}
      </output>
    </div>
  );
}
