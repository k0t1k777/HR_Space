import React, { useState } from 'react';
import './Input.css';

interface InputProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: string[];
}

export default function Input({
  options,
  width,
  placeholder,
  disableSuggestions,
}: InputProps) {
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
    setSuggestions([]);
    setInputValue(suggestion);
  };

  return (
    <>
      <input
        className='input'
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : 'Выберите из списка'}
        style={{ width: width ? width : '600px' }}
      />
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
