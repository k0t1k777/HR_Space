import { useState } from 'react';
import './InputSalary.css';
import * as Yup from 'yup';
import { nameError } from '../../utils/constants';

interface InputSalaryProps {
  width?: string;
  placeholder?: string;
  inputValueSalaryMin: string;
  setInputValueSalaryMin: (value: string) => void;
  isValid: boolean;
  name: string;
  inputName: string;
}

export default function InputSalaryMin({
  width,
  placeholder,
  inputValueSalaryMin,
  setInputValueSalaryMin,
  isValid,
  name,
  inputName,
}: InputSalaryProps) {
  const [errorText, setErrorText] = useState(nameError);
  const [isInputValid, setIsInputValid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValueSalaryMin(value);
    handleValidation(value);
    setErrorText('');
    const inputElement = event.target;
    if (value.trim() !== '') {
      inputElement.classList.remove('input-salary__invalid');
      inputElement.classList.add('input-salary__valid');

    } else {
      inputElement.classList.add('input-salary__invalid');
      inputElement.classList.remove('input-salary__valid');
    }
  };

  const schema = Yup.object().shape({
    inputValue: Yup.string().required(nameError),
  });

  const handleValidation = (value: string) => {
    if (!isValid) {
      setErrorText(nameError);
    } else {
      schema
        .validate({ inputValue: value.toString() }, { abortEarly: false })
        .then(() => {
          setErrorText('');
          setIsInputValid(true);
        })
        .catch((error) => {
          setErrorText(error.errors[0]);
          setIsInputValid(false);
        });
    }
  };

  return (
    <div className='input-salary__container'>
      <div className={`input-salary__wrapper ${name ? name : ''}`}>
        <input
          className={`input-salary ${isValid ? '' : 'input-salary__invalid'} ${
            inputName ? inputName : ''
          }  ${isInputValid ? 'input-salary__valid' : ''}`}
          type='number'
          value={inputValueSalaryMin}
          onChange={handleChange}
          onWheel={(e) => e.preventDefault()}
          placeholder={placeholder ? placeholder : '30000'}
          style={{
            width: width ? width : '247px',
            WebkitAppearance: 'none',
            MozAppearance: 'textfield',
          }}
        />
        {!isValid && <div className='input__error'>{errorText}</div>}
      </div>
    </div>
  );
}
