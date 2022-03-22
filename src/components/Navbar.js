import { Link } from "react-router-dom";

const Navbar=() => {
    return(
        <nav>
            <Link to = '/browsegames'>Find Games!</Link>
            <br/>
            <Link to ='/mygamelist'>My Games</Link>
            <br/>
            <Link to ='/'>Home</Link>

        </nav>
    )
}

export default Navbar;