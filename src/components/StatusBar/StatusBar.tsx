import { useState } from 'react';
import Title from '../Title/Title';
import './StatusBar.css';

// interface StatusBarProps {
//   index: any;
//   onSave: (newTitle: string) => void;
// }

export default function StatusBar() {
  const [newTitle, setNewTitle] = useState('Название заявки');
  const handleSaveTitle = (title: string) => {
    setNewTitle(title);
  };

  const [selectedStatus, setSelectedStatus] = useState<number | null>(null);
  const [clicked, setClicked] = useState(false);

  const changeColor = (index: any) => {
    if (!clicked) {
      setSelectedStatus(index);
    }
  };

  const resetColor = () => {
    if (!clicked) {
      setSelectedStatus(null);
    }
  };
  

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event.stopPropagation();
    setClicked(true);
    setSelectedStatus(null);
    changeColor(index);
  };

  return (
    <div className='status-bar'>
      <Title title={newTitle} onSave={handleSaveTitle} />

      <div className='status-bar__container-status'>
        {[...Array(10).keys()].map((index) => (
          <div
            className='statusBar__item'
            key={index}
            style={{
              backgroundColor:
                selectedStatus !== null && index <= selectedStatus
                  ? '#FF4D3A'
                  : '',
            }}
            onMouseEnter={() => changeColor(index)}
            onMouseLeave={resetColor}
            onClick={(e) => handleClick(e, index)}
          ></div>
        ))}
      </div>
      <p className='status-bar__description'>Описание вакансии</p>
    </div>
  );
}
