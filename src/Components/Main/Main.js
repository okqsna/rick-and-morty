import './Main.css';
import { Link } from 'react-router-dom';

const Main=()=>{
    return(
        <main className="Main">
            <h3>Dive into the adventurous world of Ricky and Morty!</h3>
            <Link to="/Characters" className='explore__link'>explore</Link>
        </main>
    )
}
export default Main;