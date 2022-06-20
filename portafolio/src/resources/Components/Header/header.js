import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='o-header'>
            <Link to={'/'} className='o-Link'>Profile</Link>
            <Link to={'/Projects'} className='o-Link'>Projects</Link>
        </div>
    )
}

export default Header;