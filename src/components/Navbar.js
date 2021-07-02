import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => setClick(false);

    return ( 
        <header className="header">
            <div className="wrapper">
                <IconContext.Provider value={{ color: '#fff' }}>
                    <nav className='navbar'>
                        <div className='navbar-container container'>
                            <div className='menu-icon' onClick={handleClick}>
                                { click ? <FaTimes /> : <FaBars /> }
                            </div>

                            <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to='/rooms' className='nav-links' onClick={closeMobileMenu}> Room </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </IconContext.Provider>
                
            </div>
        </header>
     );
}
 
export default Navbar;