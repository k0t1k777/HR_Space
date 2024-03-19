import './InputSalary.css';

interface InputSalaryProps {
  width?: string;
  placeholder?: string;
  step?: string;
  wrap?: string;
  pad?: string;
}

export default function InputSalary({ width, placeholder, step, wrap, pad }: InputSalaryProps) {
  return (
    <div className='input-salary__container'>
      <div className={`input-salary__wrapper ${wrap ? wrap : ''}`}>
        <input
          className={`input-salary ${pad ? pad : ''}`}
          type='text'
          placeholder={placeholder ? placeholder : '30000'}
          style={{width: width ? width : '247px'}}
        />
      </div>
      <div className={`input-salary__wrapper input-salary__wrapper_type_before ${step ? step : ''}`}>
        <input
          className='input-salary'
          type='text'
          placeholder={placeholder ? placeholder : '40000'}
          style={{ width: width ? width : '247px' }}
        />
      </div>
    </div>
  );
}
