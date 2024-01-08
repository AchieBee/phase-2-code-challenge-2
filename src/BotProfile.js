import React from 'react';

function BotProfile({ bot, actionText, actionFunction }) {
  return (
    <div className="bot-profile">
      <h3>{bot.name}</h3>
      <p>Power: {bot.power}</p>
      <button onClick={() => actionFunction(bot)}>{actionText}</button>
    </div>
  );
}

export default BotProfile;
