import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props){

    const {Componet} = props;
    const  naviget = useNavigate();
    useEffect(()=>{
        const login = localStorage.getItem("login");
        if(login==="false"){
            naviget("/login")
        }
    })
  return (
    <div>

        <Componet/>
    </div>
  )
}

export default Protected