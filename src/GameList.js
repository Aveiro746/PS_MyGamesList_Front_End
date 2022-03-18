import { connect } from 'react-redux'
import GameItem from './GameItem'

const mapStateToProps = (state) =>({
    
    myGamesData: state.myGamesData
})

function myGamesList(props){
    console.log(props.myGamesData)
    return(
        <>
        {props.myGamesData.length > 0 ? props.myGamesData.map(game =>{
           return( 
            <>
                <GameItem game = {game} key={game.id}/>
            </>
           )
        }):"loading"}
        </>
    )
}

export default connect(mapStateToProps, {})(myGamesList)