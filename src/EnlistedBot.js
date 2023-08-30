import React from 'react';

const EnlistedBot = ({
  id,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  created_at,
  updated_at,
  image,
  onRelease
}) => {
  return (
    <div>
      <img src={image} />
      <div>
        <h3>Enlisted Bot:</h3>
        <p>Name: {name}</p>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <p>Class: {bot_class}</p>
        <p>Catchphrase: {catchphrase}</p>
        <p>Created: {created_at}</p>
        <p>Updated: {updated_at}</p>
        <button onClick={onRelease}>Release</button>
      </div>
    </div>
  );
};

export default EnlistedBot;
