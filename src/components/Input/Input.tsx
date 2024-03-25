import React, { useEffect, useState } from 'react';
import './Input.css';
import * as Yup from 'yup';
import { nameError } from '../../utils/constants';

interface InputProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: string[];
  inputValue: string;
  setInputValue: (value: string) => void;
  isRequired?: boolean;
  isValid: boolean;
  idStep?: string;
}

export default function Input({
  inputValue,
  setInputValue,
  options,
  width,
  placeholder,
  disableSuggestions,
  isValid,
  idStep,
}: InputProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [errorText, setErrorText] = useState(nameError);
  const [isInputValid, setIsInputValid] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    handleValidation(value);
    setErrorText('');
    const filteredSuggestions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    const inputElement = event.target;
    if (value.trim() !== '') {
      inputElement.classList.remove('input__invalid');
      inputElement.classList.add('input__valid');
    } else {
      inputElement.classList.add('input__invalid');
      inputElement.classList.remove('input__valid');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSuggestions([]);
    setInputValue(suggestion);
    setErrorText('');
    setIsInputValid(true);
  };

  const schema = Yup.object().shape({
    inputValue: Yup.string().required(nameError),
  });

  const handleValidation = (value: string) => {
    if (!isValid) {
      setErrorText(nameError);
    } else {
      schema
        .validate({ inputValue: value }, { abortEarly: false })
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

  useEffect(() => {
    if(idStep === 'specialization') {
      setDisplayCount(5);
    }
    if(idStep === 'towns') {
      setDisplayCount(4)
    }
  }, [idStep])

  return (
    <>
      <input
        className={`input ${isValid ? '' : 'input__invalid'} ${
          isInputValid ? 'input__valid' : ''
        }`}
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : 'Выберите из списка'}
        style={{ width: width ? width : '600px' }}
      />
      {!isValid && <div className='input__error'>{errorText}</div>}
      {!disableSuggestions && suggestions.length > 0 && (
        <div className='input__container-suggestion'>
          {suggestions.slice(0, displayCount).map((suggestion) => (
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
