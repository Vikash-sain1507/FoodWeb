import React from 'react'
import { BurgerData } from '../Data/Data'
import BurgerCard from './BurgerCard'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Button, Typography } from '@mui/material';
import { Link, useNavigate, useLocation} from 'react-router-dom';

function Burger() {
  const  location  = useLocation();
  console.log(location);
  const product="Burger";
  const navigate=useNavigate()

  return (
    <div>
      <div style={{display:"flex",}}>
      <Typography sx={{typographyextAlign:"center",backgroundColor:"#e74c3c;   ",width:"100px",borderRadius:"5px",}}>{product}</Typography>

      </div>
    <div  style={{display:"flex",flexDirection:"row",flexWrap:"wrap", justifyContent:"space-around", padding:"30px"}}>
        {
            BurgerData.map((item)=>(
                <BurgerCard val={item} />
            ))
        }
             <div style={{display:"flex",alignItems:"center"}}>
                   <Button variant="contained" endIcon={<ReadMoreIcon />} onClick={()=>navigate("/AllProductburger",{ state: {product}})} >More </Button>
              </div>
    </div>
    </div>
  )
}

export default Burger