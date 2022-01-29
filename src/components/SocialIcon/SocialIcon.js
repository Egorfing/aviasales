import React, { useState } from 'react';
import './SocialIcon.css'
import { UPDATE_SHARED } from '../../redux/actionTypes/actionTypes';
import { useDispatch, useSelector } from 'react-redux';


function SocialIcon({color, icon, link}) {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state)
    const {complete} = useSelector(state => state)

    function buttonHandler(e){
        e.preventDefault() 
        if(!complete){
            user.shared = true
            dispatch({
                type: UPDATE_SHARED,
                payload: true
            })
        }
        
        window.open(link, "_blank")
    }

    const [focus, setFocus] = useState(false)
    const srcIcon = './' + icon
    return (
        <div className='pr mla' onPointerEnter={()=> setFocus(true)} onPointerLeave={()=> setFocus(false)}>
            {(focus && !user.shared) || (focus && complete)? 
            <div onClick={buttonHandler} >
                <button className='buttonSocial cp' style={{backgroundColor: color}}></button>
                <img className='iconButtonImg cp' src='./like.png' alt='heart'/>
            </div>:
            <img className='imgIcon' src={srcIcon} alt={icon}/>}
        </div>
    );
}

export default SocialIcon;