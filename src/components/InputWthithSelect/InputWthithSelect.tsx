import React, { useEffect, useState } from 'react';
import './InputWthithSelect.css';

interface InputWthithSelectProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: string[];
}

export default function InputWthithSelect({
  options,
  width,
  placeholder,
  disableSuggestions,
}: InputWthithSelectProps) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');

  useEffect(() => {
    const handleFocusOut = (event: FocusEvent) => {
      if (
        !event.relatedTarget 
      ) {
        setSuggestions([]);
        setInputValue('');
      }
    };
    document.addEventListener('focusout', handleFocusOut);
    return () => {
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredSuggestions = options.filter((option: any) =>
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
    <>
      <input
        className='input-wtith-select'
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : 'Выберите из списка'}
        style={{ width: width ? width : '600px' }}
      />
        {selectedValue && (
          <div className="selected-value">{selectedValue}</div>
        )}
      {!disableSuggestions && suggestions.length > 0 && (
        <div className='iinput-wtith-select__container-suggestion'>
          {suggestions.map((suggestion) => (
            <button
              className='input-wtith-select__container-item'
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
