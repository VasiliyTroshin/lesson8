import {React,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadPosts } from './redux/reducers/postReducer';
import { postsSelector } from './redux/reducers/postsSelector';

const Posts = () => {
    const dispatch=useDispatch();
    const posts=useSelector(postsSelector);
    const loading=useSelector(state=>state.posts.loading);
    const error=useSelector(state=>state.posts.error)

    useEffect(()=>{
        dispatch(loadPosts())
    },[])

    const handleError=()=>{
        dispatch(loadPosts())
    }

    if(loading){
        return (
            <div>
                <h2>Идет загрузка</h2>
            </div>
        )
    }

if(error){
    return(
        <div>
            Произошла ошибка.Повторите попытку
            <button onClick={handleError}>Повторить попытку</button>
        </div>
    )
}

  return (
    <div>
        {
            posts.map((item)=>(
                <div style={{'marginTop':20}} key={item.id}>
                    <b>
                        {item.title}
                    </b>
                </div>
            ))
        }
    </div>
  )
}

export default Posts