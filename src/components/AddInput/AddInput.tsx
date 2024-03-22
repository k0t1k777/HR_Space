import React, { useEffect, useState } from 'react';
import './AddInput.css';
import Trash from '../../assets/trash.svg?react';
import * as Yup from 'yup';

interface InputProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: string[];
  added: string[];
  setAdded: (value: string[]) => void;
  inputValue: string;
  setInputValue: (value: string ) => void;
  isValid: boolean;
}

export default function AddInput({
  options,
  width,
  placeholder,
  disableSuggestions,
  added,
  setAdded,
  inputValue,
  setInputValue,
  isValid,
}: InputProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [errorText, setErrorText] = useState('Поле обязательно для заполнения');

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
    handleValidation(value);
    setErrorText('');
    const filteredSuggestions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    const inputElement = event.target;
    if (value.trim() !== '') {
      inputElement.classList.add('add-input__valid');
      inputElement.classList.remove('add-input__invalid');
    } else {
      inputElement.classList.remove('add-nput__valid');
      inputElement.classList.add('add-input__invalid');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setAdded([...added, suggestion]);
    setInputValue('');
  };
  // console.log('added: ', added);

  const handleAddDelete = (itemToDelete: string) => {
    const updatedAdded = added.filter((item) => item !== itemToDelete);
    setAdded(updatedAdded);
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

  return (
    <>
      <div className='add-input__container-added'>
        {added.map((item: string) => (
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
        className={`add-input ${isValid ? '' : 'add-input__invalid'}`}
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : 'Выберите из списка'}
        style={{ width: width ? width : '600px' }}
      />
      {!isValid && <div className='input__error'>{errorText}</div>}
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
