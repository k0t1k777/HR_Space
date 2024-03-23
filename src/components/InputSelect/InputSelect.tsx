import './InputSelect.css';

interface Item {
  caption: string;
  text: string;
}

interface InputSelectProps {
  multi: (string | Item)[];
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
  const toggleItem = (item: string | Item): void => {
    if (typeof item === 'string') {
      if (selectedItem === item) {
        setSelectedItem('');
      } else {
        setSelectedItem(item);
      }
    } else {
      if (selectedItem === item.text) {
        setSelectedItem('');
      } else {
        setSelectedItem(item.text);
      }
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
              {typeof item === 'object' ? (
                <p className='input-select__caption'>
                  <span className='input-select__caption_text_bold'>
                    {(item as Item).caption}
                  </span>
                  {(item as Item).text}
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
