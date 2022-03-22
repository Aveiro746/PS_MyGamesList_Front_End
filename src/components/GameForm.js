import {useState} from 'react'
import { connect } from 'react-redux'
import { addgame } from '../actions/actions'


function GameForm(props){
    const [initialForm] = useState({
        title: "",
        platforms: "",
        genre:""
    })
    //universal form handler
    const [form, setForm] = useState(initialForm)

    //universal change handler
    function handleChange(e){
        console.log(e.target.name, e.target.value)
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
        props.addgame(form)
        setForm(initialForm)

    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label for="title">Game Title: </label>
            <input type="text" name="title" onChange={handleChange}/>
            <label for="platforms">Platform:</label>
            <input type="text" name="platforms" onChange={handleChange}/>
            <label for="genre"> Game Genre:</label>
            <input type="text" name="genre" onChange={handleChange}/>
            
            <button>Submit</button>
        </form>
        </div>
    )
}

export default connect(null, {addgame})(GameForm)