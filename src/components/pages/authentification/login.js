import React from 'react'

function login() {
  return (
    <div className='login'>
        <div className='login__wrapper'>
            <div className='login__container'>
                <form className='login__form'>
                    <label className='login__label'>Login</label>
                    <input type='text' placeholder='Username' className='login__input' />
                    <input type='password' placeholder='Password' className='login__input' />
                    <button type='submit' className='login__button'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default login
