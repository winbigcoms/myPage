import React, { useLayoutEffect } from 'react';

export default function useResizeRander(setOffsets,e){
  useLayoutEffect(()=>{
      setOffsets(state=>({
        ...state,[e.current.id]:e.current.offsetTop
      }))
  },[window.innerHeight]);
}