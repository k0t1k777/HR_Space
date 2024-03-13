import { useState } from 'react';
import './Requirement.css';
import Title from '../../Title/Title';

export default function Requirement() {
  const [newTitle, setNewTitle] = useState('Сантехник онлайн');
  const handleSaveTitle = (title: string) => {
    setNewTitle(title);
  };
  return (
    <div className='requirement'>
      <Title title={newTitle} onSave={handleSaveTitle} />{' '}
    </div>
  );
}
