import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Stack,Badge, IconButton } from '@mui/material';
import Cart from './Cart';
import cartSystem from '../REDUX/cartSystem';
import { useSelector } from 'react-redux';




export default function Navbar() {
  const {name}=useSelector((state)=>state);
 
  const navigate =useNavigate();
  const logout=()=>{
    alert("logut succssefull")
     localStorage.setItem("login",false);
   
     navigate("/login");
     
  }
  

  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{position:"fixed",top:0,width:"100%",zIndex:"999"}} >
    <div className="container-fluid">
      <Link className="navbar-brand fs-4 fst-italic  " to="/">GoFood</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/AllProduct">AllProduct</Link>
          </li>
        
        
          
     
       
          
        </ul>
      </div>
     <div style={{marginRight:"35px"}}>
      <Stack spacing={2} direction="row">
       
        <NavLink className='nav-link'to="/cart" >
        <IconButton>
        <Badge badgeContent={name.cart.length} color='primary'>
          
        <AddShoppingCartIcon sx={{fontSize:"30px",color:"white"}} />
        </Badge>
        </IconButton></NavLink>
      


      </Stack>
     </div>
      <div style={{justifyContent:"space-between",backgroundColor:"white", borderRadius:"4px",}}>
     
          
            <Link className='nav-link' onClick={logout} to="/login">logout</Link>
            

          
        </div>
    </div>
   
  </nav></div>
  )
}
