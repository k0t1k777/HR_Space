import React, { useState } from 'react';
import './InputWthithSelect.css';
import * as Yup from 'yup';

interface InputWthithSelectProps {
  width?: string;
  placeholder?: string;
  disableSuggestions?: boolean;
  options: string[];
  inputValue: string;
  setInputValue: (value: string) => void;
  isValid: boolean;
}

// export const options = [
//   {
//     id: 3,
//     name: 'Русский',
//     level: 'A1',
//   },
//   {
//     id: 3,
//     name: 'Английский',
//     level: 'B1',
//   },
//   {
//     id: 3,
//     name: 'Немецкий',
//     level: 'B2',
//   },
// ];

export default function InputWthithSelect({
  options,
  placeholder,
  disableSuggestions,
  inputValue,
  setInputValue,
  isValid,
}: InputWthithSelectProps) {
  // console.log('languages: ', options);

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [errorText, setErrorText] = useState('Поле обязательно для заполнения');

  // console.log('options: ', options);
  // console.log('Object: ', Object.values(options));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    handleValidation(value);
    setErrorText('');
    const filteredSuggestions = options.filter((option: string) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    const inputElement = event.target;
    if (value.trim() !== '') {
      inputElement.classList.remove('input-whith-select__invalid');
    } else {
      inputElement.classList.add('input-whith-select__invalid');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
    setSelectedValue(suggestion);
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

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       !(event.target as Element).closest(
  //         '.input-whith-select__container-item'
  //       ) &&
  //       !(event.target as Element).closest('.input-whith-select')
  //     ) {
  //       setInputValue('');
  //       setSuggestions([]);
  //     }
  //   };
  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

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
