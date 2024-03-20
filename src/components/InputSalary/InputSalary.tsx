import { useState } from 'react';
import './InputSalary.css';
import * as Yup from 'yup';

interface InputSalaryProps {
  width?: string;
  placeholder?: string;
  step?: string;
  wrap?: string;
  pad?: string;
  inputValueSalaryMin: any;
  setInputValueSalaryMin: any;
  inputValueSalaryMax: any;
  setInputValueSalaryMax: any;
  isValid: any;
}

export default function InputSalary({
  width,
  placeholder,
  inputValueSalaryMax,
  setInputValueSalaryMax,
  inputValueSalaryMin,
  setInputValueSalaryMin,
  isValid,
}: InputSalaryProps) {
  const [errorText, setErrorText] = useState('Поле обязательно для заполнения');

  const handleChangeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValueSalaryMin(value);
    handleValidation(value);
    setErrorText('');
  };

  const handleChangeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValueSalaryMax(value);
    handleValidation(value);
    setErrorText('');
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
      <div style={{ display: 'flex', }}>
      <div className='input-salary__wrapper'>
        <input
          className={`input-salary ${isValid ? '' : 'input-salary__invalid'}`}
          type='text'
          value={inputValueSalaryMin}
          onChange={handleChangeMin}
          placeholder={placeholder ? placeholder : '30000'}
          style={{ width: width ? width : '247px' }}
        />
      </div>
      <div className='input-salary__wrapper'>
        <input
          className={`input-salary ${isValid ? '' : 'input-salary__invalid'}`}
          type='text'
          value={inputValueSalaryMax}
          onChange={handleChangeMax}
          placeholder={placeholder ? placeholder : '40000'}
          style={{ width: width ? width : '247px' }}
        />
      </div>
      </div>
      {isValid && <div className='input__error'>{errorText}</div>}
    </div>
  );
}
