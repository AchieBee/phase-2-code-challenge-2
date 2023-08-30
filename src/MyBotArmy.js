import React from 'react';

const MyBotArmy = ({
  id,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  created_at,
  updated_at,
  onDelete,
  onEnlist
}) => {
  return (
    <div>
      <h3>Bot Details:</h3>
      <p>Name: {name}</p>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
      <p>Created: {created_at}</p>
      <p>Updated: {updated_at}</p>
      <button onClick={onDelete} style={{color:'red'}}>X</button>
      <button onClick={onEnlist}>Enlist</button>
    </div>
  );
};

export default MyBotArmy;
