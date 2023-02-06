import './Header.css';
import Logo from "./rickandmortylogo.webp";
import { Link } from 'react-router-dom';
const Header=()=>{

    return(
        <header className="Header">
            <div className="left__Header">
             <Link to="/Characters" className="link__Header">Characters</Link>
            <Link to ="/Locations" className="link__Header">Locations</Link>
            </div>
            <Link to="/" className="logo__Header">
                <img src={Logo} alt='logo'></img>
            </Link>
            <div className="right__Header">
            <Link to ="/Episodes" className="link__Header">Episodes</Link>
                <a className="link__Header">Watchlist</a>
            </div>
        </header>
    )
}
export default Header;