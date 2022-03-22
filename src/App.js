import './App.css';
import { Switch , Route } from 'react-router'
import GameList from './components/GameList'
import GameForm from './components/GameForm'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import {useEffect} from 'react'
import {fetchgamelist} from './actions/actions'
import {connect} from 'react-redux'
import Browsegames from './components/Browsegames';


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
     
      <Switch>
        <Route path = '/mygamelist'>
      <GameForm />
      {props.isLoading ? "Your GameList is Loading!" : " Your GameList"}
      <GameList />
      {props.error !== "" ? props.error : ""}
        </Route>

      
        <Route path = '/browsegames'>
          <Browsegames/>
        </Route>
      </Switch>
     

      <Footer/>
    </div>
  );
}

export default connect(mapStateToProps, {fetchgamelist})(App)
