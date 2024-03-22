import { useState } from 'react';
import './InputSalary.css';
import * as Yup from 'yup';

interface InputSalaryProps {
  width?: string;
  placeholder?: string;
  inputValueSalaryMin: string;
  setInputValueSalaryMin: (value: string) => void;
  isValid: boolean;
  name: string;
  inputName: string;
}

export default function InputSalaryMin({ width, placeholder, inputValueSalaryMin,
  setInputValueSalaryMin, isValid, name, inputName }: InputSalaryProps) {
    const [errorText, setErrorText] = useState('Поле обязательно для заполнения');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValueSalaryMin(value);
      handleValidation(value);
      setErrorText('');
      const inputElement = event.target;
    if (value.trim() !== '') {
      inputElement.classList.add('input-salary__valid');
      inputElement.classList.remove('input-salary__invalid');
    } else {
      inputElement.classList.remove('input-salary__valid');
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
      <div className={`input-salary__wrapper ${name ? name : ''}`}>
        <input
          className={`input-salary ${isValid ? '' : 'input-salary__invalid'} ${inputName ? inputName : ''}`}
          type='number'
          value={inputValueSalaryMin}
          onChange={handleChange}
          placeholder={placeholder ? placeholder : '30000'}
          style={{width: width ? width : '247px'}}
        />
        {!isValid && <div className='input__error'>{errorText}</div>}
      </div>
    </div>
  );
}
