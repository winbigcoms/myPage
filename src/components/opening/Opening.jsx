import React, { useEffect, useState } from 'react';
import style from './opening.module.scss';
export default function Opening(){
  const [loading,loadState] = useState(false);
  function show(){
    if(document.readyState ==="interactive"){
      loadState(state=>true)
    }else if(document.readyState ==="complete"){
      loadState(state=>false)
    }
  }
  useEffect(()=>{
    document.addEventListener('readystatechange',show)
    return ()=>{
      document.removeEventListener('readystatechange',show)
    }
  },[]);

  return  loading&&(
    <div className={style.wallPaper}>
    </div>
  )
}