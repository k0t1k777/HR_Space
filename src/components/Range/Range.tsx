import { useState } from 'react';
import './Range.css';

interface RangeProps {
  min?: string;
  max?: string;
  step?: string;
}

export default function Range({ min, max, step }: RangeProps) {

  const [value, setValue] = useState<string|number>(1);
  const [moveOutput, setMoveOutput] = useState<number>(0);
  const outputMove = () => {
    if(value == '1') {
      setMoveOutput(-3);
    }
    if(value == '2') {
      setMoveOutput(Number(value) + 22)
    }
    if(value == '3') {
      setMoveOutput(Number(value) * 16)
    }
    if(value == '4') {
      setMoveOutput(Number(value) * 19)
    }
    if(value == '5') {
      setMoveOutput(Number(value) * 20)
    }
    if(value == '6') {
      setMoveOutput(Number(value) * 21)
    }
    if(value == '7') {
      setMoveOutput(Number(value) * 22)
    }
    if(value == '8') {
      setMoveOutput(Number(value) * 22)
    }
    if(value == '9') {
      setMoveOutput(Number(value) * 22.5)
    }
    if(value == '10') {
      setMoveOutput(Number(value) * 23)
    }
  }

  function mouseMove() {
    outputMove();
  }

  return (
    <div className='range'>
      <input 
      className='range__input' 
      id='range' 
      type="range"
      min={min ? min : '1'} 
      max={max ? max : '10'} 
      step={step ? step : '1'} 
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      onMouseMove={() => mouseMove()}
      />
      <output className='range__output' style={{left: moveOutput + 'px'}} htmlFor='range'>{value}</output>
    </div>
  )
}