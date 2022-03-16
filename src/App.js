import './App.css';
import GameList from './GameList'
import GameForm from './GameForm'
import {useEffect} from 'react'
import {fetchgamelist} from './actions/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error
})

function App(props) {
    useEffect(()=>{
      props.fetchgamelist()
    },[])
  return (
    <div className="App">
      <GameForm />
      {props.isLoading ? "Your GameList is Loading!" : "GameList Loaded"}
      <GameList />
      {props.error !== "" ? props.error : ""}
    </div>
  );
}

export default connect(mapStateToProps, {fetchgamelist})(App)
