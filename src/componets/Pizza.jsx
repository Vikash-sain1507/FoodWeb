import React from 'react'
import { pizzaData } from '../Data/Data'
import PizzaCard from './PizzaCard'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Button,Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';


function Pizza() {
  
  const product="Pizza";
  const navigate=useNavigate()
  return (
<div>
<Typography sx={{textAlign:'center',backgroundColor:"#e74c3c;",width:"100px",borderRadius:"5px"}}>PIZZA</Typography>

    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around", padding:"30px"}}>
         {
            pizzaData.map((item)=>(                
            <PizzaCard val={item} />
             ))      
              }
              <div style={{display:"flex",alignItems:"center"}}>
              <Button variant="contained" endIcon={<ReadMoreIcon />}onClick={()=>navigate("/AllProductburger",{state:{product}})} >More </Button>
              </div>
             
   </div>
   </div>
  )
}

export default Pizza 
