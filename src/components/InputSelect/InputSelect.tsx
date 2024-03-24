import './InputSelect.css';

interface InputSelectProps {
  multi: string[];
  width?: string;
  height?: string;
  stylize?: string;
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

export default function InputSelect({
  multi,
  width,
  height,
  stylize,
  selectedItem,
  setSelectedItem,
}: InputSelectProps) {
  const toggleItem = (item: string ): void => {
      if (selectedItem === item) {
        setSelectedItem('');
      } else {
        setSelectedItem(item);
      }
  };

  return (
    <div>
      <div className={`input-select__container ${stylize ? stylize : ''}`}>
        {multi &&
          multi.map((item, index) => (
            <button
              key={index}
              className={`input-select__container-item ${
                selectedItem === item ? 'input-select__selected' : ''
              }`}
              onClick={() => toggleItem(item)}
              style={{
                width: width ? width : '',
                height: height ? height : '',
              }}
            >
              {height === '100px' ? (
                <p className='input-select__caption'>
                  <span className='input-select__caption_text_bold'>
                    {item.slice(0, item.lastIndexOf('%') + 1)}
                  </span>
                  {item.slice(item.lastIndexOf('%') + 1)}
                </p>
              ) : (
                item
              )}
            </button>
          ))}
      </div>
    </div>
  );
}
