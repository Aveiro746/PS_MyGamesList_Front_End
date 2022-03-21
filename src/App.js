import './App.css';

import GameList from './components/GameList'
import GameForm from './components/GameForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
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
      <Navbar/>

      <GameForm />
      {props.isLoading ? "Your GameList is Loading!" : " Your GameList"}
      <GameList />
      {props.error !== "" ? props.error : ""}
      <Footer/>
    </div>
  );
}

export default connect(mapStateToProps, {fetchgamelist})(App)
