import axios from "axios";
import {useState, useEffect} from 'react'

const Browsegames = () =>{
    const [videoGames, setvideoGames] = useState(null)

    useEffect( () =>{
    async function fetchGames(){
        const res = await axios.get("https://api.rawg.io/api/platforms?key=afb57002e85b4a82a08d30d1e1815873")
        setvideoGames(res.data)
    }
    fetchGames()
    },[])

     function handleSubmit(e) {
        e.preventDefault();
        console.log(videoGames)
    }
    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <label htmlFor="gameSearch">Game Search</label>
                <input type='text' id="gameSearch"/>
                <input type='submit'/>
            </form>


        </div>
    )
}
  

export default Browsegames;
