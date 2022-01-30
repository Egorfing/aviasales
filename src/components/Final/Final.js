import React from 'react';
import './Final.css'
import SocialIcon from '../SocialIcon/SocialIcon';
import Header from '../Header/Header';

function Final(props) {
    return (
        <div className='pr'>
        <div className='DF FDC z100'>
            <img className='finalMain' src='./man.png' alt='man' />
            <img className='finalGround' src='./ground.png' alt='ground' />
            <div className='DF JCSB ASC blockButton blockButtonFinal'>
                <SocialIcon color='#45668E' icon='vk.png' link='https://vk.com/share.php?url=kandidat.aviasales.ru/' />
                <SocialIcon color='#3B5998' icon='f.png' link='https://www.facebook.com/sharer.php?u=kandidat.aviasales.ru/' />
                <SocialIcon color='#00ACED' icon='tw.png' link='https://twitter.com/intent/tweet?text=kandidat.aviasales.ru/' />
                <SocialIcon color='#EB722E' icon='ok.png' link='https://connect.ok.ru/offer?url=kandidat.aviasales.ru/' />
            </div>
        </div>
        <Header propstyle='footer'/>
        </div>
    );
}

export default Final;