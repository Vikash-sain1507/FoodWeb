import React from 'react'

import{MomosData} from '../Data/Data'
import MomosCard from './MomosCard'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Button, Typography } from '@mui/material'
import { useNavigate} from 'react-router-dom';


function Momos() {
    const product="Momos";
    const navigate = useNavigate();

  return (
   <div>
      <Typography sx={{textAlign:'center',backgroundColor:"#e74c3c;",width:"100px",borderRadius:"5px"}} id="#Burger">MOOMO</Typography>
     <div  style={{display:"flex",flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around", padding:"30px"}}>
      
    {
       MomosData.map((item)=>(                
       <MomosCard val={item} />
        ))      
         }
         <div style={{display:"flex",alignItems:"center"}}>
         <Button variant="contained" endIcon={<ReadMoreIcon/>}onClick={()=>navigate("/AllProductburger",{state:{product}})} >More </Button>
         </div>
        
</div>
</div>
)
}
  

export default Momos