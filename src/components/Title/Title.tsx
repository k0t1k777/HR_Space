import React, { useState } from 'react';
import './Title.css';
import Edit from '../../assets/edit.svg';

interface TitleProps {
  title: string;
  onSave: (newTitle: string) => void;
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
      {editing ? (
        <input
          type='text'
          value={newTitle}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <>
          <h1 className='title__name'>{title}</h1>
          <img className='title__img' src={Edit} onClick={handleEditClick} />
        </>
      )}
    </div>
  );
}
