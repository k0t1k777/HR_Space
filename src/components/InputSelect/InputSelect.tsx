import './InputSelect.css';

interface InputSelectProps {
  setClick?: (value: boolean) => void;
  multi: string[] | undefined;
  width?: string;
  height?: string;
  stylize?: string
  selectedItem: string;
  setSelectedItem: (value: string ) => void;
}

export default function InputSelect({
  setClick,
  multi,
  width,
  height,
  stylize,
  selectedItem,
  setSelectedItem,
}: InputSelectProps) {
  const toggleItem = (item: string): void => {
    if (selectedItem === item) {
      setSelectedItem('');
    } else {
      setSelectedItem(item);
      if (setClick) {
        setClick(true);
      }
    }
  };

  return (
    <div>
      <div className={`input-select__container ${stylize ? stylize : ''}`}>
        {multi && multi.map((item) => (
          <button
            key={item}
            className={`input-select__container-item ${
              selectedItem === item ? 'input-select__selected' : ''
            }`}
            onClick={() => toggleItem(item)}
            style={{
              width: width ? width : '',
              height: height ? height : '',
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
