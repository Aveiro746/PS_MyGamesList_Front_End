import { connect } from 'react-redux'
import GameItem from './GameItem'

const mapStateToProps = (state) =>({
    myGamesData: state.myGamesData
})

function myGamesList(props){
    return(
        <>
        {props.myGamesData.map(game =>{
           return( 
            <>
                <GameItem game = {game} key={game._id}/>
            </>
           )
        })}
        </>
    )
}

export default connect(mapStateToProps, {})(myGamesList)