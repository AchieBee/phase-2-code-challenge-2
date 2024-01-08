import'./BotCard.css'; // Import the CSS file for styling

const BotCard = ({ bot }) => {
    return (
      <div className="bot-card">
        <img className="bot-image" src={bot.avatar_url} />
        <div className="bot-details">
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p>Catchphrase: {bot.catchphrase}</p>
          <p>Created: {bot.created_at}</p>
          <p>Updated: {bot.updated_at}</p>
          {/* <button onClick={() => onDelete(id)} style={{color:'red'}}>X</button> */}
          <button className="button" style={{color:'red'}}>X</button>
          <button className="button">Enlist</button>
        </div>
      </div>
    );
  };
  
  export default BotCard;
  