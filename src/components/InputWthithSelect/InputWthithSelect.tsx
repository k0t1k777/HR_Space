import React, { useState } from 'react';
import './InputWthithSelect.css';
import * as Yup from 'yup';
import { LanguageOption, nameError } from '../../utils/constants';

interface InputWthithSelectProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: LanguageOption[];
  inputValue: string;
  setInputValue: (value: string) => void;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  suggestions: LanguageOption[];
  setSuggestions: (value: LanguageOption[]) => void;
  isValid: boolean;
}

export default function InputWthithSelect({
  options,
  placeholder,
  disableSuggestions,
  inputValue,
  setInputValue,
  selectedValue,
  setSelectedValue,
  suggestions,
  setSuggestions,
  isValid,
}: InputWthithSelectProps) {
  const [errorText, setErrorText] = useState(nameError);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    handleValidation(value);
    setErrorText('');
    const filteredSuggestions = options.filter((option) =>
      option.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: LanguageOption) => {
    setInputValue(suggestion.name);
    setSuggestions([]);
    setSelectedValue(suggestion.level);
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
              {suggestions.map((suggestion) => (
                <button
                  className='input-whith-select__container-item'
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedValue && (
        <div className='selected-value'>
          <select className='input-whith-select__select'>
            <option
              className='input-whith-select__option'
              value={selectedValue}
            >
              {selectedValue}
            </option>
          </select>
        </div>
      )}
    </div>
  );
}
