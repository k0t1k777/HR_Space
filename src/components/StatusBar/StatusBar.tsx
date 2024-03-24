import { useState } from 'react';
import Title from '../Title/Title';
import './StatusBar.css';
import { names, statusBarData } from '../../utils/constants';
import InfoTooltipDone from '../InfoTooltipDone/InfoTooltipDone';

export default function StatusBar({ currentStep }: { currentStep: number }) {
  const [newTitle, setNewTitle] = useState(statusBarData.task);
  const [infoTooltipSaveIsOpen, setInfoTooltipSaveIsOpen] = useState(false);
  const handleSaveTitle = (title: string) => {
    setNewTitle(title);
  };

  const handleSaveDraft = () => {
    localStorage.setItem('draftTitle', newTitle);
    setInfoTooltipSaveIsOpen(true);
    setTimeout(() => {
      setInfoTooltipSaveIsOpen(false);
    }, 1000);
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
      </div>
      <div className='status-bar__title-wrapper'>
        <Title title={newTitle} onSave={handleSaveTitle} />
        <button className='status-bar__draft' onClick={handleSaveDraft}>
          {statusBarData.button}
        </button>{' '}
      </div>
      <InfoTooltipDone
        isVisible={infoTooltipSaveIsOpen}
        messageTitle={statusBarData.save}
      />
    </div>
  );
}
