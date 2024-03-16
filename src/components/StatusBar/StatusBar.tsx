import { useState } from 'react';
import Title from '../Title/Title';
import './StatusBar.css';
import { names } from '../../utils/constants';

export default function StatusBar({ currentStep }: { currentStep: number }) {
  const [newTitle, setNewTitle] = useState('Новая заявка');
  const handleSaveTitle = (title: string) => {
    setNewTitle(title);
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
                className={`statusBar__item ${
                  currentStep === index + 1
                    ? 'currentStep_type_active'
                    : currentStep > index + 1
                    ? 'currentStep_type_active'
                    : ''
                }`}
                key={index}
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
