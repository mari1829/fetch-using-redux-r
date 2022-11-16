import React, {useState, useEffect} from 'react'
import axios from "axios"

function Fetch() {

    const[todus,setTodus]=useState([]);
    useEffect(()=>{
        getTodus()
        console.log("installation");
    },[])

    const getTodus= async()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(res,'res');

    }







  return (
    <div>Fetch</div>
  )
}

export default Fetch