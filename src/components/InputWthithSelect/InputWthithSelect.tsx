import React, { useState } from 'react';
import './InputWthithSelect.css';
import * as Yup from 'yup';
import { nameError } from '../../utils/constants';

interface InputWthithSelectProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: string[];
  inputValue: string;
  setInputValue: (value: string) => void;
  selectedValue: boolean;
  setSelectedValue: (value: boolean) => void;
  suggestions: string[];
  levels: string[];
  setSuggestions: (value: string[]) => void;
  isValid: boolean;
  selectedLevel: string;
  setSelectedLevel: (value: string) => void;
}

export default function InputWthithSelect({
  options,
  placeholder,
  disableSuggestions,
  inputValue,
  setInputValue,
  setSelectedValue,
  suggestions,
  setSuggestions,
  levels,
  isValid,
  selectedValue,
  selectedLevel,
  setSelectedLevel,
}: InputWthithSelectProps) {
  const [errorText, setErrorText] = useState(nameError);
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

  const handleSuggestionClick = (option: string) => {
    setInputValue(option);
    setSuggestions([]);
    setSelectedLevel(option);
    setSelectedValue(true);
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
        })
        .catch((error) => {
          setErrorText(error.errors[0]);
        });
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLevel = event.target.value;
    setSelectedLevel(selectedLevel);
  };

  return (
    <div className='input-whith-select__container'>
      <div className='input-whith-select__container-line'>
        <div>
          <input
            className={`input-whith-select ${
              isValid ? '' : 'input-whith-select__invalid'
            }`}
            type='text'
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder ? placeholder : 'Выберите из списка'}
          />
          {!isValid && <div className='input__error'>{errorText}</div>}
          {!disableSuggestions && suggestions.length > 0 && (
            <div className='input-whith-select__container-suggestion'>
              {suggestions.slice(0, 5).map((suggestion, index) => (
                <button
                  className='input-whith-select__container-item'
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedValue && (
        <div className='selected-value'>
          <select
            className='input-whith-select__select'
            value={selectedLevel}
            onChange={handleSelectChange}
          >
            {levels.map((level, index) => (
              <option
                className='input-whith-select__option'
                value={level}
                key={index}
              >
                {level}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
