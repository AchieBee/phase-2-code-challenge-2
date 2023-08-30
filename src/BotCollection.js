import React, { useEffect, useState } from 'react';
import MyBotArmy from './MyBotArmy';
import EnlistedBots from './EnlistedBot';

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.log(error));
  }, []);

  const HandleBotDelete = (botId) => {
    // Make API call to delete bot on the backend
    // After deletion, update frontend
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE'
    })
      .then(() => {
        const updatedBots = bots.filter(bot => bot.id !== botId);
        setBots(updatedBots);
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  const HandleBotEnlist = (bot) => {
    if (!enlistedBots.some(enlistedBot => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const HandleBotRelease = (botId) => {
    const updatedEnlistedBots = enlistedBots.filter(bot => bot.id !== botId);
    setEnlistedBots(updatedEnlistedBots);
  };

  return (
    <>
      {bots.map(bot => (
        <div key={bot.id}>
          <img src={bot.avatar_url}/>
          <MyBotArmy
            id={bot.id}
            name={bot.name}
            health={bot.health}
            damage={bot.damage}
            armor={bot.armor}
            bot_class={bot.bot_class}
            catchphrase={bot.catchphrase}
            created_at={bot.created_at}
            updated_at={bot.updated_at}
            onDelete={HandleBotDelete}
            onEnlist={() => HandleBotEnlist(bot)}
          />
        </div>
      ))}

      <h2>My Bot Army:</h2>
      {enlistedBots.map(enlistedBot => (
        <div key={enlistedBot.id}>
          <EnlistedBots
            id={enlistedBot.id}
            name={enlistedBot.name}
            health={enlistedBot.health}
            damage={enlistedBot.damage}
            armor={enlistedBot.armor}
            bot_class={enlistedBot.bot_class}
            catchphrase={enlistedBot.catchphrase}
            created_at={enlistedBot.created_at}
            updated_at={enlistedBot.updated_at}
            image={enlistedBot.avatar_url}
            onRelease={() => HandleBotRelease(enlistedBot.id)}
          />
        </div>
      ))}
    </>
  );
};

export default BotCollection;
