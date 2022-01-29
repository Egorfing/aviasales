import React, { useState } from 'react';
import './Header.css'

function Header(props) {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth)
    window.addEventListener('resize', () => {
        setWidthScreen(window.innerWidth)
    })
    return (
        <div className='DF JCSB AIC header'>
            {widthScreen > 480 ?
                <img src='./logo.png' alt='fullLogo' /> :
                <img src='./7.png' alt='shortLogo' />}
            <button disabled title='В разработке' className='buttonRules'>Правила</button>
        </div>
    );
}

export default Header;