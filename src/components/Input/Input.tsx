import React, { useEffect, useState } from 'react';
import './Input.css';
import * as Yup from 'yup';

interface InputProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: string[];
  inputValue: string;
  setInputValue: any;
  isRequired?: boolean;
  isValid: boolean;
}

export default function Input({
  inputValue,
  setInputValue,
  options,
  width,
  placeholder,
  disableSuggestions,
  isValid,
}: InputProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [errorText, setErrorText] = useState('Поле обязательно для заполнения');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    handleValidation(value);
    setErrorText('');
    const filteredSuggestions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSuggestions([]);
    setInputValue(suggestion);
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

  useEffect(() => {
    handleValidation(inputValue);
  }, [isValid]);

  return (
    <>
      <input
        className={`input ${isValid ? '' : 'input__invalid'}`}
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : 'Выберите из списка'}
        style={{ width: width ? width : '600px' }}
      />
      {!isValid && <div className='input__error'>{errorText}</div>}
      {!disableSuggestions && suggestions.length > 0 && (
        <div className='input__container-suggestion'>
          {suggestions.map((suggestion) => (
            <button
              className='input__container-item'
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
