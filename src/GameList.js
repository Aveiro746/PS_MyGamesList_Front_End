import { connect } from 'react-redux'
import GameItem from './GameItem'

const mapStateToProps = (state) =>({
    myGamesData: state.myGamesData
})

function myGamesList(props){
    console.log(props)
    return(
        <>
        {props.map(game =>{
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