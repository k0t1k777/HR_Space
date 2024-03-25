import './MultiInputSelect.css';

interface MultiInputSelectProps {
  multi: string[];
  selectedItems: string[];
  setSelectedItems: (value: string[]) => void;
}

export default function MultiInputSelect({
  multi,
  selectedItems,
  setSelectedItems,
}: MultiInputSelectProps) {
  const toggleItem = (item: string): void => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <div className='multi-input-select__container'>
        {multi.map((item) => (
          <button
            key={item}
            className={`multi-input-select__container-item ${
              selectedItems.includes(item) ? 'multi-input-select__selected' : ''
            }`}
            onClick={() => toggleItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
