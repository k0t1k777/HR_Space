import React, { useState } from 'react';
import './Input.css';

interface InputProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
}

const options = ['Инженер', 'Механник', 'Специальность', 'Профессия'];

export default function Input({ width, placeholder, disableSuggestions }: InputProps) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredSuggestions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  // const handleBlur = () => {
  //   setSuggestions([]);
  // };


  return (
    <>
      <input
        className='input'
        type='text'
        value={inputValue}
        onChange={handleChange}
        // onBlur={handleBlur}
        placeholder={placeholder ? placeholder : 'Выберите из списка'}
        style={{ width: width ? width : '600px' }}
      />
      {!disableSuggestions && suggestions.length > 0 && (
        <div className='input__container-suggestion'>
          {suggestions.map((suggestion) => (
            <p
              className='input__container-item'
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </p>
          ))}
        </div>
      )}
    </>
  );
}
