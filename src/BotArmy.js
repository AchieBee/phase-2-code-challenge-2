import React from 'react';
import BotProfile from './BotProfile';

function BotArmy({ enlistedBots, releaseBot, dischargeBot }) {
  return (
    <div className="bot-army">
      <h2>Bot Army</h2>
      <div className="enlisted-bot-list">
        {enlistedBots.map(bot => (
          <BotProfile key={bot.id} bot={bot} actionText="Release" actionFunction={releaseBot} />
        ))}
      </div>
      <h2>Discharged Bots</h2>
      <div className="discharged-bot-list">
        {enlistedBots.map(bot => (
          <BotProfile key={bot.id} bot={bot} actionText="Discharge" actionFunction={dischargeBot} />
        ))}
      </div>
    </div>
  );
}

export default BotArmy;
