import { useState } from 'react';
import Title from '../Title/Title';
import './StatusBar.css';
import { names } from '../utils/constants';

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
      <div className='status-bar__wrapper'>
        <div className='status-bar__container-status'>
          <div className='status-bar__container-subtitle'>
            {names.map((name, index) => (
              <div className='statusBar__subtitle-item' key={index}>
                <p className='status-bar__subtitle-name'>{name}</p>
              </div>
            ))}
          </div>
          <div className='status-bar__container'>
            {[...Array(9).keys()].map((index) => (
              <div
                className='statusBar__item'
                key={index}
                style={{
                  backgroundColor:
                    selectedStatus !== null && index <= selectedStatus
                      ? '#4BB24E'
                      : '',
                }}
                onMouseEnter={() => changeColor(index)}
                onMouseLeave={resetColor}
                onClick={(e) => handleClick(e, index)}
              ></div>
            ))}
          </div>
        </div>
        <button className='status-bar__draft'>Сохранить черновик</button>{' '}
      </div>
      <Title title={newTitle} onSave={handleSaveTitle} />
    </div>
  );
}
