
import { ADD_GAME,REMOVE_GAME,FETCH_GAMES_SUCCESS,FETCH_GAMES_FAIL, FETCH_GAMES_START, UPDATE_GAME} from '../actions/actions'


const initialState = {
    myGamesData: [],
    isLoading:false,
    error: ""

}
export default function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_GAMES_START:
            return{
                ...state,
              isLoading:true
            }
        case FETCH_GAMES_FAIL:
            return{
                ...state,
                 error: action.payload, isLoading:false
            }
        case FETCH_GAMES_SUCCESS:
            return{
                ...state,
                myGamesData:[...state.myGamesData,...action.payload],
                 error: "",
                 isLoading:false
            }
           
       case ADD_GAME:
           return{
               ...state,myGamesData: [...state.myGamesData, action.payload], isLoading:false
           }
        case UPDATE_GAME:

           let updatedState=[]
        for(let i= 0; i<state.myGamesData.length; i++){
            if (state.myGamesData[i]._id === action.payload._id){
                updatedState.push(action.payload)
            } else{
                updatedState.push(state.myGamesData[i])
            }
        }
            return {
                ...state, myGamesData: updatedState
            }

        case REMOVE_GAME:
            let newState = state.myGamesData.filter(item => item !== action.payload)
            return{
                ...state, myGamesData:newState
            }
        default:
            return state
    }

}