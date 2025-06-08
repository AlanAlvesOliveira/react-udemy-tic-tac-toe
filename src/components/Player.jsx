import { useState } from "react";

export default function Player({ inicialName, symbol, isActive, onChangeName}) {

    const [playerName, SetPlayerName] = useState(inicialName);
    const [isEditing, setIsEditing] = useState(false)

    function handleClick() {
        setIsEditing(isEditing => !isEditing);
        if(isEditing){
            onChangeName(symbol, playerName)
        }
    }
    
    function handleChange(event){        
        SetPlayerName(event.target.value)        
    }

    let editablePlayerName = (
        <span onClick={handleClick} className="player-name">{playerName}</span>
    );

    if (isEditing) {
        editablePlayerName = (            
            //two way binding => pegar o valor do onchange e colocar de volta no input
            
            <input type="text" required  value={playerName} onChange={handleChange} ></input>

            // <input type="text" required  defaultValue={name}></input> // uma forma de editar mas sem travar o valor
        )
    }

    return (
        <li className={isActive? 'active': undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>

    );
}