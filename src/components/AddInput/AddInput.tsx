import React, { useEffect, useState } from 'react';
import './AddInput.css';
import Trash from '../../assets/trash.svg?react';

interface InputProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: string[];
}

export default function AddInput({
  options,
  width,
  placeholder,
  disableSuggestions,
}: InputProps) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [added, setAdded] = useState<string[]>([]);

  useEffect(() => {
    const handleFocusOut = (event: FocusEvent) => {
      if (
        !event.relatedTarget ||
        !(event.relatedTarget as HTMLElement).classList.contains(
          'add-input__container-item'
        )
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
    setAdded([...added, suggestion]);
    setInputValue('');
  };

  const handleAddDelete = (itemToDelete: string) => {
    const updatedAdded = added.filter((item) => item !== itemToDelete);
    setAdded(updatedAdded);
  };

  return (
    <>
      <div className='add-input__container-added'>
        {added.map((item: any) => (
          <button key={item} className='add-input__container-item'>
            {item}
            <Trash
              className='add-input__trash'
              onClick={() => handleAddDelete(item)}
            />
          </button>
        ))}
      </div>
      <input
        className='add-input'
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : 'Выберите из списка'}
        style={{ width: width ? width : '600px' }}
      />
      {!disableSuggestions && suggestions.length > 0 && (
        <div className='add-input__container-suggestion'>
          {suggestions.map(
            (suggestion) =>
              !added.includes(suggestion) && (
                <button
                  className='add-input__container-item'
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              )
          )}
        </div>
      )}
    </>
  );
}
