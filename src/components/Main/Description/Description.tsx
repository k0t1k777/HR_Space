import { useState } from 'react';
import Title from '../../Title/Title';
import './Description.css';
import Input from '../../Input/Input';
import SubTitle from '../../Subtitle/Subtitle';

export default function Description() {
  const [newTitle, setNewTitle] = useState('Название заявки');
  const handleSaveTitle = (title: string) => {
    setNewTitle(title);
  };

  return (
    <div className='description'>
      <Title title={newTitle} onSave={handleSaveTitle} />
      <SubTitle subtitle='Специальность (необязательно)' />
      <Input />
      <SubTitle subtitle='Заработная плата сотрудника (необязательно)' />
    </div>
  );
}
