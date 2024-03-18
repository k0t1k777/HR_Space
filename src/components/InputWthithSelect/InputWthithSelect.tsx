import React, { useState } from 'react';
import './InputWthithSelect.css';

interface InputWthithSelectProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: string[];
}

export default function InputWthithSelect({
  options,
  placeholder,
  disableSuggestions,
}: InputWthithSelectProps) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');

  console.log('options: ', options);
  console.log('Object: ', Object.values(options));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredSuggestions = options.filter((option: string) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setSelectedValue(suggestion);
  };

  return (
    <div className='input-whith-select__container'>
      <div className='input-whith-select__container-line'>
        <div>
          <input
            className='input-whith-select'
            type='text'
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder ? placeholder : 'Выберите из списка'}
          />
          {!disableSuggestions && suggestions.length > 0 && (
            <div className='input-whith-select__container-suggestion'>
              {suggestions.map((suggestion) => (
                <button
                  className='input-whith-select__container-item'
                  key={suggestion}
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
          <select className='input-whith-select__select'>
            <option value={selectedValue}>{selectedValue}</option>
          </select>
        </div>
      )}
    </div>
  );
}
