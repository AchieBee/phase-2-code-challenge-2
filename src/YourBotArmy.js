
const YourBotArmy = ({name,health,damage,armor,bot_class,catchphrase,created_at,updated_at}) => {
    return (
        <>
            <div>
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
                <br></br>
            </div>
        </>
    )
};
export default YourBotArmy;