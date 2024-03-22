import './Checkbox.css';
import { checkCaption } from '../../utils/constants';

interface CheckboxProps {
  valuesExpectations: string[];
  setValuesExpectations: (value: string[]) => void;
}

export default function Checkbox({
  valuesExpectations,
  setValuesExpectations,
}: CheckboxProps) {
  const handleCheckboxChange = (index: number) => {
    let updatedValues = [...valuesExpectations];
    if (updatedValues.includes(checkCaption[index])) {
      updatedValues = updatedValues.filter((value) => value !== checkCaption[index]);
    } else {
      updatedValues.push(checkCaption[index]);
    }
    setValuesExpectations(updatedValues);
  };

  return (
    <div>
      {checkCaption.map((item, index) => (
        <div className='check__wrapper' key={index}>
          <div className='check__container'>
            <input
              className='check__custom'
              id={`check-${index}`}
              type='checkbox'
              onChange={() => handleCheckboxChange(index)}
              checked={valuesExpectations.includes(item)}
            />
            <label className='check__fake' htmlFor={`check-${index}`}></label>
            <p className='check__caption'>{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
