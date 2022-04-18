import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/action';

const Welcome = () => {
    const user=useSelector(state=>state.currentUser);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleAuth=()=>{
        if(user){
            dispatch(logoutInitiate())
        }
        setTimeout(()=>{
            navigate('/')
        },1000)
    }
  return (
    <div>
    Welcome

    <button onClick={handleAuth}>Exit</button>
    </div>
  )
}

export default Welcome