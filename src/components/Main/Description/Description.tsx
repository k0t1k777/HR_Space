import { useState } from 'react';
import Title from '../../Title/Title';
import "./Description.css"

export default function Description() {
  const [newTitle, setNewTitle] = useState('Название заявки');
  const handleSaveTitle = (title: string) => {
    setNewTitle(title);
  };
  
  return (
      <div className="description">
        <Title title={newTitle} onSave={handleSaveTitle}/>
      </div>
  );
}