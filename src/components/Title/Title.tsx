import React, { useState } from 'react';
import './Title.css';
import Edit from '../../assets/edit.svg?react';

interface TitleProps {
  title?: string | undefined;
  onSave: (newTitle: string | undefined) => void;
}

export default function Title({ title, onSave }: TitleProps) {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleSaveClick = () => {
    setEditing(false);
    onSave(newTitle);
    setNewTitle(newTitle);
  };

  const handleBlur = () => {
    if (editing) {
      handleSaveClick();
    }
  };

  return (
    <div className='title'>
      <div className='title-container'>
        {editing ? (
          <input
            className='title__input'
            type='text'
            value={newTitle}
            onChange={handleTitleChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <div className='title-container-edit'>
            <h1 className='title__name'>{title}</h1>
            <Edit className='title__img' onClick={handleEditClick}/>
          </div>
        )}
      </div>
    </div>
  );
}
