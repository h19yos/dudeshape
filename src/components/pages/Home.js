import React from 'react'
import StarRatings from 'react-star-ratings';
import homeImg from '../images/Main_img.png'
import airbnbLogo from '../images/Airbnb Logo.png'
import hubspotLogo from '../images/Hubspot Logo.png'
import googleLogo from '../images/Google Logo.png'
import microsoftLogo from '../images/Microsoft Logo.png'
import walmartLogo from '../images/Walmart Logo.png'
import fedexLogo from '../images/FedEx Logo.png'
import product1 from '../images/product-1.png'
import product2 from '../images/product-2.png'
import feedback1 from '../images/feedback-img1.png'
import feedback2 from '../images/feedback-img2.png'


function Home() {
    return (
        <div className='home__page'>
            <main className='main'>
                <section className='home'>
                    <div className='home__left'>
                        <div className='home__left__title'>
                            <h1>Get Your Best Cosmetic<br />Products Here</h1>
                        </div>
                        <div className='home__left__text'>
                            <p>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the industry's<br />   standard dummy</p>
                        </div>
                        <div className="home__left__search">
                            <label htmlFor="search-form">
                                <input
                                    type="search"
                                    name="search-form"
                                    id="search-form"
                                    className="search-input"
                                    placeholder="Search..."
                                    value=""
                                />
                            </label>
                        </div>
                        <button className='home__left__btn'>Shop Now</button>
                    </div>
                    <div className='home__right'>
                        <img src={homeImg} alt='' className='home__right__image' />
                    </div>
                </section>
                <section className='market__logos'>
                    <ul className='market__logo'>
                        <li className='market__logo__item'><a href='#!' className='market__logo__link'><img src={airbnbLogo} alt='' className='market__logo__img' /></a></li>
                        <li className='market__logo__item'><a href='#!' className='market__logo__link'><img src={hubspotLogo} alt='' className='market__logo__img' /></a></li>
                        <li className='market__logo__item'><a href='#!' className='market__logo__link'><img src={googleLogo} alt='' className='market__logo__img' /></a></li>
                        <li className='market__logo__item'><a href='#!' className='market__logo__link'><img src={microsoftLogo} alt='' className='market__logo__img' /></a></li>
                        <li className='market__logo__item'><a href='#!' className='market__logo__link'><img src={walmartLogo} alt='' className='market__logo__img' /></a></li>
                        <li className='market__logo__item'><a href='#!' className='market__logo__link'><img src={fedexLogo} alt='' className='market__logo__img' /></a></li>
                    </ul>
                </section>
                <section className='products'>
                    <div className='product__top'>
                        <div className='product__top__left'>
                            <div className='product__top__title'><h1>Our Porular Product</h1></div>
                            <div className='product__top__text'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry's standard dummy</p></div>
                        </div>
                        <div className='product__top__right'>
                            <div className='product__top__link'><a href='#!'>Discover Our Products</a></div>
                        </div>
                    </div>
                    <div className='product__bottom'>
                        <div className='product__bottom__left'>
                            <img src={product1} alt='product-1' className='product__bottom__left__img' />
                            <div className='product__bottom__bottom'>
                                <div className='product__bottom__title'>
                                    <h1>Cosmetic products</h1>
                                </div>
                                <div className='product__bottom__text'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy</p>
                                </div>
                                <div className='product-btn-price'>
                                    <div className='product__bottom__btns'>
                                        <button className='buy-now-btn'>Buy Now</button>
                                        <button className='add-to-cart-btn'>Add To Cart</button>
                                    </div>
                                    <div className='product__bottom__price'>
                                        <p>$120</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product__bottom__right'>
                            <img src={product2} alt='product-2' className='product__bottom__right__img' />
                            <div className='product__bottom__bottom'>
                                <div className='product__bottom__title'>
                                    <h1>Cosmetic products</h1>
                                </div>
                                <div className='product__bottom__text'>
                                    <p>Lorem Ipsum is simply dummy text of the printing and<br /> typesetting industry. Lorem Ipsum has been the industry's<br /> standard dummy</p>
                                </div>
                                <div className='product-btn-price'>
                                    <div className='product__bottom__btns'>
                                        <button className='buy-now-btn'>Buy Now</button>
                                        <button className='add-to-cart-btn'>Add To Cart</button>
                                    </div>
                                    <div className='product__bottom__price'>
                                        <p>$120</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='stats'>
                    <div className='stats__wrapper'>
                        <ul className='stats__list'>
                            <li className='stats__list__item'>
                                <h1>100%</h1>
                                <p>Organic Products</p>
                            </li>
                            <li className='stats__list__item'>
                                <h1>2M+</h1>
                                <p>Yearly Sales</p>
                            </li>
                            <li className='stats__list__item'>
                                <h1>1.9M+</h1>
                                <p>Happy Customar</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className='feedback'>
                    <div className='product-you'>
                        <div className='product-you__left'>
                            <div className='product-you__left__title'>
                                <h1>The Perfect Beauty<br /> Of You</h1>
                            </div>
                            <div className='product-you__left__text1'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum has been the industry's standard dummy text<br /> ever since the 1500s, when an unknown printer took a galley of type<br /> and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className='product-you__left__text2'>
                                <p>It has survived not only five centuries, but also the leap into electronic<br /> typesetting, remaining essentially unchanged. Lorem Ipsum is simply<br /> dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div className='product-you__left__btn'>
                                <button className='product-you__left__btn-btn'>Shop Now</button>
                            </div>
                        </div>
                        <div className='product-you__right'>
                            <img src={feedback1} alt='' className='product-you__right__img' />
                        </div>
                    </div>
                    <div className='feedback-customer'>
                        <div className='product-you__left'>
                            <img src={feedback2} alt='' className='product-you__left__img' />
                        </div>
                        <div className='product-you__right'>
                            <div className='product-you__right__title'>
                                <h1>Amazing Cosmetic</h1>
                            </div>
                            <div className='product-you__right__star'>
                                <StarRatings
                                    rating={4.5}
                                    starRatedColor="rgba(255, 192, 70, 1)"
                                    starEmptyColor="rgba(255, 192, 70, 0.5)"
                                    starDimension="24px"
                                    starSpacing="12px"
                                />
                            </div>
                            <div className='product-you__right__text'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum has been the industry's standard dummy text<br /> ever since the 1500s, when an unknown printer took a galley of type<br /> and scrambled it to make a type specimen book</p>
                            </div>
                            <div className='product-you__right__customer'>
                                <h1>Rusmin Islam</h1>
                            </div>
                            <div className='product-you__right__prof'>
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
