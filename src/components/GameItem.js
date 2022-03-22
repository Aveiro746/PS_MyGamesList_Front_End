
import { connect } from 'react-redux'
import { removeGame , updategame } from '../actions/actions'

function GameItem(props){


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
        <button id = {props.game._id} onClick={handleClick}>Remove Game</button>
        </div>
    )
}

export default connect(null, {removeGame, updategame})(GameItem)