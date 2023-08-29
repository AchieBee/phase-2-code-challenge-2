import React from 'react';

const EnlistedBots = ({ id, name, health, damage, armor, bot_class, catchphrase, created_at, updated_at,avatar_url}) => {
  return (
    <div key={id}>
      <img src={avatar_url} />
      <div key={id}>
          name={name}
          health={health}
          damage={damage}
          armor={armor}
          bot_class={bot_class}
          catchphrase={catchphrase}
          created_at={created_at}
          updated_at={updated_at}
      </div>
    </div>
  );
};

export default EnlistedBots;
