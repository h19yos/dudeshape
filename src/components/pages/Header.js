import React from 'react'
import profileLogo from '../images/Profile.png'
import buyLogo from '../images/Buy.png'
import sidebarLogo from '../images/Sidebar.png'

function Header() {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <div className='header__container'>
                    <div className='title'>
                        <p className='header__title'>Dudeshape</p>
                    </div>
                    <div className='list'>
                        <ul className='header__list'>
                            <li className='list__item'>
                                <a href='#!' className='list__item__link'>Home</a>
                            </li>
                            <li className='list__item'>
                                <a href='#!' className='list__item__link'>Products</a>
                            </li>
                            <li className='list__item'>
                                <a href='#!' className='list__item__link'>About Us</a>
                            </li>
                            <li className='list__item'>
                                <a href='#!' className='list__item__link'>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='bar'>
                        <a href='#!' className='bar__profile'>
                            <img src={profileLogo} alt='profile' className='bar__profile__logo' />
                        </a>
                        <a href='#!' className='bar__buy'>
                            <img src={buyLogo} alt='buy' className='bar__buy__logo' />
                        </a>
                        <a href='#!' className='bar__sidebar'>
                            <img src={sidebarLogo} alt='sidebar' className='bar__sidebar__logo' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
