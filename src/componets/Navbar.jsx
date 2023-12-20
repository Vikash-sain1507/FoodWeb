import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Stack,Badge, IconButton } from '@mui/material';




export default function Navbar() {
  const navigate =useNavigate();
  const logout=()=>{
    alert("logut succssefull")
     localStorage.setItem("login",false);
   
     navigate("/login");
     
  }
  

  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{position:"fixed",width:"100%",zIndex:"999"}} >
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
          {/* <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>

           {/* <li>{auth ? <Link  onClick={logout} to="/login">logout</Link> :
          <Link to="/login">login</Link>}</li> 
          <li> 
            <Link className='nav-link' to="/Register">Register</Link>

          </li> */}
        
          
     
       
          
        </ul>
      </div>
     <div style={{marginRight:"35px"}}>
      <Stack spacing={2} direction="row">
        <IconButton>
        <Badge badgeContent={5} color='primary'>
        <AddShoppingCartIcon sx={{fontSize:"30px",color:"white"}} />
        </Badge>
        </IconButton>
      


      </Stack>
     </div>
      <div style={{justifyContent:"space-between",backgroundColor:"white", borderRadius:"4px",}}>
     
          
            <Link className='nav-link' onClick={logout} to="/login">logout</Link>
            

          
        </div>
    </div>
   
  </nav></div>
  )
}
