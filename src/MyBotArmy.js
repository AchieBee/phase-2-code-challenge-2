
const MyBotArmy = ({id,name,health,damage,armor,bot_class,catchphrase,created_at,updated_at,onDelete}) => {
   
    return (
        <>
            <div key={id}>
                Name : {name}
                <br></br>
                Health :{health}
                <br></br>
                Damage :{damage} 
                <br></br>
                Armor :{armor}
                <br></br> 
                Class :{bot_class}
                <br></br> 
                Phrase :{catchphrase}
                <br></br> 
                Created :{created_at}
                <br></br> 
                Update :{updated_at}
                <br></br>
                <button onClick={() => onDelete(id)} style={{color:'red'}}>X</button>
            </div>
        </>
    )
};
export default MyBotArmy;