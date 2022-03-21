// import { useState } from 'react'
import { connect } from 'react-redux'
import { removeGame , updategame } from '../actions/actions'

function GameItem(props){
    // const [completed, setCompleted] = useState(props.game.completed)
    // async function handleUpdate(e){
    //     e.preventDefault()
        
    //    await props.updategame(props.game._id, {completed: !completed})
    //     setCompleted(!completed)
    // }

    function handleClick(e){
        e.preventDefault()
        props.removeGame(e.target.id,
            props.game)
           
    }
    return(
        <div className = "gamelist">
        
        <h2>{props.game.title}</h2>
        <h3>{props.game.platforms}</h3>
        <h4>{props.game.genre}</h4>
        {/* <h3 onClick={handleUpdate}>{completed? "GAME COMPLETE!" : "STILL PLAYING!"}</h3> */}
        <button id = {props.game._id} onClick={handleClick}>Remove Game</button>
        </div>
    )
}

export default connect(null, {removeGame, updategame})(GameItem)