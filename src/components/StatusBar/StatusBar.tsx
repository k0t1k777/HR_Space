import { useState } from 'react';
import Title from '../Title/Title';
import './StatusBar.css';

// interface TitleProps {
//   title: string;
//   onSave: (newTitle: string) => void;
// }

export default function StatusBar() {
  const [newTitle, setNewTitle] = useState('Название заявки');
  const handleSaveTitle = (title: string) => {
    setNewTitle(title);
  };

  

  
  return (
    <div className='status-bar'>
        <Title title={newTitle} onSave={handleSaveTitle} />
      <div className='status-bar__container-status'>
        <div className='statusBar__item'></div>
        <div className='statusBar__item'></div>
        <div className='statusBar__item'></div>
        <div className='statusBar__item'></div>
        <div className='statusBar__item'></div>
        <div className='statusBar__item'></div>
        <div className='statusBar__item'></div>
        <div className='statusBar__item'></div>
        <div className='statusBar__item'></div>
        <div className='statusBar__item'></div>
      </div>
      <p className='status-bar__description'>Описание вакансии</p>
    </div>
  );
}
