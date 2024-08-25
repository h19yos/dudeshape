import React from 'react';
import facebookLogo from '../images/facebook 1.png';
import twitterLogo from '../images/twitter 1.png';
import instagramLogo from '../images/instagram 1.png'

function Footer() {
    const handleSubscribe = (e) => {
        e.preventDefault();
        // Logic to handle subscription
        console.log('Subscribed!');
    };

    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <div className='footer__top'>
                    <div className='footer__top__title'>
                        <h1>Subscribe to Get Our Letest News</h1>
                    </div>
                    <div className='footer__top__input'>
                        <form onSubmit={handleSubscribe} style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="email" placeholder="Enter email" className='footer__top__input__text'/>
                            <button type="submit" className='footer__top__input__btn'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='footer__bottom'>
                    <div className='footer__bottom__company'>
                        <div className='footer__bottom__company__title'>
                            <h1>Dudeshape</h1>
                        </div>
                        <div className='footer__bottom__company__text'>
                            <p>Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry. Lorem<br /> Ipsum has been the industry's standard<br /> dummy</p>
                        </div>
                    </div>
                    <div className='footer__bottom__links'>
                        <ul className='footer__bottom__links__list'>
                            <li className='footer__bottom__links__item'><h1>Quick Link</h1></li>
                            <li className='footer__bottom__links__item'><a href='#!'>Home</a></li>
                            <li className='footer__bottom__links__item'><a href='#!'>Products</a></li>
                            <li className='footer__bottom__links__item'><a href='#!'>About Us</a></li>
                        </ul>
                    </div>
                    <div className='footer__bottom__contacts'>
                        <ul className='footer__bottom__links__list'>
                            <li className='footer__bottom__links__item'><h1>Contact Us</h1></li>
                            <li className='footer__bottom__links__item'><p>oyasimnaeem@email.com</p></li>
                            <li className='footer__bottom__links__item'><p>+123456789</p></li>
                            <li className='footer__bottom__links__item'>
                                <ul className='footer__bottom__links__links__list'>
                                    <li className='footer__bottom__links__links__item'><a href='https://www.facebook.com/?_rdr=p'><img src={facebookLogo} alt='' className='' /></a></li>
                                    <li className='footer__bottom__links__links__item'><a href='https://x.com/?lang=ru'><img src={twitterLogo} alt='' className='' /></a></li>
                                    <li className='footer__bottom__links__links__item'><a href='https://www.instagram.com'><img src={instagramLogo} alt='' className='' /></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
