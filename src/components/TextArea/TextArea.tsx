import { useState } from 'react';
import './TextArea.css';
import * as Yup from 'yup';

interface TextAreaProps {
  placeholder: string;
  inputValuesDuties: string;
  setInputValuesDuties: (value: string) => void;
  isValid: boolean;
}

export default function TextArea({
  placeholder,
  inputValuesDuties,
  setInputValuesDuties,
  isValid,
}: TextAreaProps) {
  const [errorText, setErrorText] = useState('Поле обязательно для заполнения');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>)  => {
    const value = event.target.value;
    setInputValuesDuties(value);
    handleValidation(value);
    setErrorText('');
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
      <textarea
        className={`text-area ${isValid ? '' : 'text-area__invalid'}`}
        placeholder={placeholder}
        value={inputValuesDuties}
        onChange={handleChange}
      />
      {!isValid && <div className='input__error'>{errorText}</div>}
    </>
  );
}
