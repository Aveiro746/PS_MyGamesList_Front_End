import axios from "axios";
import {useState, useEffect} from 'react'


// export const fetchgames = ()=> {
//     axios
//     .get('https://api.rawg.io/api/platforms?key=afb57002e85b4a82a08d30d1e1815873')
//     .then(data => {console.log(data);
//     })
//     .catch(err => {
//     })
// }


const Browsegames = () =>{
    const [videoGames, setvideoGames] = useState(null)

    useEffect( () =>{
    async function fetchGames(){
        const res = await axios.get("https://api.rawg.io/api/platforms?key=afb57002e85b4a82a08d30d1e1815873")
        setvideoGames(res.data)
    }
    fetchGames()
    },[])
    return(
        <div>
            <form>
                <label htmlFor="gameSearch">Game Search</label>
                <input type='text' id="gameSearch"/>
                <input type='submit'/>
            </form>
        </div>
    )
}

   
    

export default Browsegames;

   // console.log(props)
    // function handleClick(e){
    //     e.preventDefault()
    //     fetchgamelist()