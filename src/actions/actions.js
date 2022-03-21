import axios from 'axios'

export const FETCH_GAMES_START = "FETCH_GAMES_START"
export const FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS"
export const FETCH_GAMES_FAIL = "FETCH_GAMES_FAIL"
export const ADD_GAME = "ADD_GAME"
export const UPDATE_GAME = "UPDATE_GAME"
export const REMOVE_GAME = "REMOVE_GAME"

export const FETCH_NEW_GAMES_START = "FETCH_NEW_GAMES_START"
export const FETCH_NEW_GAMES_SUCCESS = "FETCH_NEW_GAMES_SUCCESS"
export const FETCH_NEW_GAMES_FAIL = "FETCH_NEW_GAMES_FAIL"

//Pull from Mongo API
export const fetchgamelist = () => (dispatch) => {
    dispatch({type: FETCH_GAMES_START})

    axios
    .get("https://mygamelist-server.herokuapp.com/mygames")
    .then(data => {
        dispatch({type: FETCH_GAMES_SUCCESS, payload: data.data.game_list})
    })
    .catch(err =>{
        dispatch({type: FETCH_GAMES_FAIL,payload: err.message})
    })
}

export const addgame = (game) => (dispatch) =>{
    
    dispatch({type: FETCH_GAMES_START})
    axios
    .post("https://mygamelist-server.herokuapp.com/mygames", game)
    .then(data =>dispatch({type: ADD_GAME, payload:game}))
    .catch(err => dispatch({type:FETCH_GAMES_FAIL, payload: err.message}))

}

export const updategame=(id,update) => (dispatch) => {
    dispatch({type: FETCH_GAMES_START})
    axios
    .put(`https://mygamelist-server.herokuapp.com/mygames/${id}`,update)
    .then(data =>dispatch({type:UPDATE_GAME,payload:data.data.game_item,}))
    .catch(err=>dispatch({type:FETCH_GAMES_FAIL, payload:err.message}))
}

export const removeGame = (id, game) => (dispatch) =>{
    dispatch({type: FETCH_GAMES_START})
    axios
    .delete(`https://mygamelist-server.herokuapp.com/mygames/${id}`, game)
    .then(data => dispatch({type: REMOVE_GAME, payload: game}))
    .catch(err => dispatch({type: FETCH_GAMES_FAIL, payload:err.message}))
}

//PULL FROM RAWG GAMES API
export const fetchgames = () => dispatch => {
    dispatch({type: FETCH_NEW_GAMES_START})
    axios
    .get('https://api.rawg.io/api/platforms?key=afb57002e85b4a82a08d30d1e1815873')
    .then(data => {console.log(data);
       dispatch({type:FETCH_NEW_GAMES_SUCCESS, payload:data.data}) 
    })
    .catch(err => {
        dispatch({type: FETCH_NEW_GAMES_FAIL, payload: err.message})
    })
}
