import { useEffect, useState } from 'react';
import YourBotArmy from './YourBotArmy';

const BotCollection = () => {
    const [bots, setBots] = useState ([])

    useEffect (() => {
    fetch('http://localhost:8001/bots')
    .then(response => response.json())
    .then(data => setBots(data))
    .catch(error => console.log(error))
    },[])


    return (
        <>
        {bots.map(bot => (
        <div key={bot.id}>
            <img 
                src={bot.avatar_url} 
            />
            <YourBotArmy
                name={bot.name} 
                health={bot.health}
                damage={bot.damage} 
                armor={bot.armor} 
                bot_class={bot.bot_class} 
                catchphrase={bot.catchphrase}
                created_at={bot.created_at} 
                updated_at={bot.updated_at} 
            />
        </div>
    ))}

        </>
    );
  
};
export default BotCollection;