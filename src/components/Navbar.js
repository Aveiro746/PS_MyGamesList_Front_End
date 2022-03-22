import { Link } from "react-router-dom";

const Navbar=() => {
    return(
        <nav>
            <Link to = '/browsegames'>Find Games!</Link>
            <br></br>
            <Link to ='/mygamelist'>My Games</Link>
        </nav>
    )
}

export default Navbar;