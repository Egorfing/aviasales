import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import SocialIcon from '../SocialIcon/SocialIcon';
import { UPDATE_USER, UPDATE_EMAIL, COMPLETE_UPDATE } from '../../redux/actionTypes/actionTypes';


function Form() {

    const [opacity, setOpacity] = useState(1)
    const [email, setEmail] = useState('')
    const [disabledButton, setDisabledButton] = useState(true)
    const dispatch = useDispatch()
    const { user } = useSelector(state => state)
    let { complete } = useSelector(state => state)
    const navigate = useNavigate()

    useEffect(() => {
        if (user.shared) {
            setOpacity(0.5)
        } else {
            setOpacity(1)
        }
    }, [user])
    useEffect(() => {
        if (complete) navigate('/final')
        if (!user.id) {
            fetch('http://localhost:5050/user/create')
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: UPDATE_USER,
                        payload: data
                    })
                })
        } else if (user.email) {
            setEmail(user.email)
        }
    }, [])
    useEffect(() => {
        const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
        const valid = re.test(email)
        if (valid && user.shared) {
            user.email = email
            dispatch({
                type: UPDATE_EMAIL,
                payload: email
            })
            setDisabledButton(false)
        } else {
            setDisabledButton(true)
        }
    }, [email, user.shared])

    function submitForm(e) {
        e.preventDefault()
        fetch('http://localhost:5050/user/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                complete = true
                dispatch({
                    type: COMPLETE_UPDATE,
                    payload: true
                })

            })
    }

    return (
        <div className='w100 DF FDC AIC'>
            <div className='DF FDC AIC form'>
                <div className='headSnobel mt20'>Чтобы выиграть путешествие</div>
                <div className='DF FDC w100 mt20 mobileC'>
                    <div className='DF AIC mb20'>
                        {user.shared ?
                            <img className='mr20 imgCheck' src='./check.png' alt='checkbox' /> :
                            <div className='headSnobel mr20 text'>1.</div>}
                        <div style={{ opacity: opacity }} className='info ml20 text'>Поделись с друзьями:</div>
                    </div>
                    <div style={{ opacity: opacity }} className='DF JCSB ASC blockButton'>
                        <SocialIcon color='#45668E' icon='vk.png' link='https://vk.com/share.php?url=kandidat.aviasales.ru/' />
                        <SocialIcon color='#3B5998' icon='f.png' link='https://www.facebook.com/sharer.php?u=kandidat.aviasales.ru/' />
                        <SocialIcon color='#00ACED' icon='tw.png' link='https://twitter.com/intent/tweet?text=kandidat.aviasales.ru/' />
                        <SocialIcon color='#EB722E' icon='ok.png' link='https://connect.ok.ru/offer?url=kandidat.aviasales.ru/' />
                    </div>
                </div>
                <div className='DF FDC w100 mobileC'>
                    <div className='DF AIC'>
                        <div className='headSnobel mr5 text'>2.</div>
                        <div className='info ml20 text'>Оставь почту:</div>
                    </div>
                    <form onSubmit={submitForm}>
                        <input type='text' className='emailInput ASC mb20 z100' value={email} onChange={(e) => setEmail(e.target.value)} name='email' />
                        <input type='submit' disabled={disabledButton} className='sendButton mt20' value='Отправить' />
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Form;