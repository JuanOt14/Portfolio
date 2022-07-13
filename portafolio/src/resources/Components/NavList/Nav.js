import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='o-nav'>
            <div className='header'>
                <div className='inner-width'>
                    <h1>Menu</h1>
                    <div className='menu-icon'>
                        <i className='fas fa-bars'></i>
                    </div>
                </div>
            </div>
            <div className='navigation-menu'>
                <nav>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/projects'>Projects</a></li>
                </nav>
            </div>
            
        </div>
    )
}

export default Nav;