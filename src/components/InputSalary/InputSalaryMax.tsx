import { useState } from 'react';
import './InputSalary.css';
import * as Yup from 'yup';

interface InputSalaryProps {
  width?: string;
  placeholder?: string;
  step?: string;
  wrap?: string;
  pad?: string;
  inputValueSalaryMax: string;
  setInputValueSalaryMax: (value: string) => void;
  isValid: boolean;
}

export default function InputSalaryMax({
  width,
  placeholder,
  step,
  inputValueSalaryMax,
  setInputValueSalaryMax,
  isValid,
}: InputSalaryProps) {
  const [errorText, setErrorText] = useState('Поле обязательно для заполнения');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValueSalaryMax(value);
    handleValidation(value);
    setErrorText('');
    const inputElement = event.target;
    if (value.trim() !== '') {
      inputElement.classList.remove('input-salary__invalid');
    } else {
      inputElement.classList.add('input-salary__invalid');
    }
  };

  const schema = Yup.object().shape({
    inputValue: Yup.string().required('Поле обязательно для заполнения'),
  });

  const handleValidation = (value: string) => {
    if (!isValid) {
      setErrorText('Поле обязательно для заполнения');
    } else {
      schema
        .validate({ inputValue: value }, { abortEarly: false })
        .then(() => {
          setErrorText('');
        })
        .catch((error) => {
          setErrorText(error.errors[0]);
        });
    }
  };

  return (
    <div className='input-salary__container'>
      <div
        className={`input-salary__wrapper input-salary__wrapper_type_before ${
          step ? step : ''
        }`}
      >
        <input
          className={`input-salary ${isValid ? '' : 'input-salary__invalid'}`}
          type='number'
          value={inputValueSalaryMax}
          onChange={handleChange}
          placeholder={placeholder ? placeholder : '40000'}
          style={{ width: width ? width : '247px' }}
        />
        {!isValid && <div className='input__error'>{errorText}</div>}
      </div>
    </div>
  );
}
