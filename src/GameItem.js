import { useState } from 'react'
import { connect } from 'react-redux'
import { removeGame , updategame } from './actions/actions'

function GameItem(props){
    console.log(props.game)
    const [completed, setCompleted] = useState(props.game.completed)
    async function handleUpdate(e){
        e.preventDefault()
        
       await props.updategame(props.game._id, {completed: !completed})
        setCompleted(!completed)
    }

    function handleClick(e){
        e.preventDefault()
        props.removeGame(e.target.id,
            props.game)
    }
    return(
        <>
        <h2>{props.game.Title}</h2>
        <p>{props.game.Platforms}</p>
        <h6>{props.game.Genre}</h6>
        <h3 onClick={handleUpdate}>{completed? "GAME COMPLETE!" : "STILL PLAYING!"}</h3>
        <button id = {props.game._id} onClick={handleClick}>DELETE</button>
        </>
    )
}

export default connect(null, {removeGame, updategame})(GameItem)