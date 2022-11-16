import { useraction } from "./Slice";

import { useDispatch,useSelector } from "react-redux";

import React from 'react'

function Output() {

    let state=useSelector((state)=>state);
    console.log(state);

    let dispatch=useDispatch()
        // console.log(dispatch);




        let fun=()=>{
            console.log("work");
            dispatch(useraction([...state.data.user,5]));
            console.log(state.data.user);
        }
       




            // console.log(state.user);




  return (
    <div>
        <button onClick={()=>fun()}>click</button>
        {state.data.user.map((ele)=>
        <div>{ele}</div>
        )}
       

    </div>
  )
}

export default Output


