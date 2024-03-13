import React, { useState } from 'react';
import './Input.css';

const options = ['Инженер', 'Механник', 'Специальность', 'Профессия'];

export default function Input() {
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

  return (
    <div className='input__container'>
      <input
        className='input'
        type='text'
        value={inputValue}
        onChange={handleChange}
      />
      {suggestions.length > 0 && (
        <div className='input__container-suggestion'>
          {suggestions.map((suggestion) => (
            <div
              className='input__container-item'
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
