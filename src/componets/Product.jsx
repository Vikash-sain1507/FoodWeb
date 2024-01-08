import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { BurgerData } from '../Data/Data'
import { Alldata } from '../Data/Alldata';
import { useLocation, useSearchParams } from 'react-router-dom';
import Footer from './Footer';


export default function Product() {
     const [quantity,setQuantity] = useState(1);
     const  {pathname}  = useLocation();
     console.log("🚀 ~ file: Product.jsx:12 ~ Product ~ pathname:", pathname)
   
   function quantityVal(type){
    if(type==="minus"){
        setQuantity(quantity-1);
    }
    else{
        setQuantity(quantity+1);

    }
   }
    

    return (
        <>
        <Box direction={"row"} display={"flex"} justifyContent={"space-around"}marginTop={"30px"}>
            <Stack  width={"580px"} height={"200px"}>
                <Stack>
                <img src={BurgerData[1].img} alt="" style={{height:"400px",width:"580px"}} />
                {BurgerData[1].info}
                </Stack>
                
            </Stack>
            <Stack spacing={2} sx={{height:"400px" ,justifyContent:"center"}} >
                <Stack spacing={2} direction={"row"}>
                    <Typography >stock </Typography>
                    <Typography>{BurgerData[1].stock}</Typography>
                </Stack>
                <Stack spacing={2} direction={"row"}>
                    <Typography> Type    </Typography>
                    <Typography>  {BurgerData[1].type}</Typography>
                </Stack>
                <Stack spacing={2} direction={"row"}>
                    <Typography>MRP    </Typography>
                    <Typography>  ${BurgerData[1].mrp}</Typography>
                </Stack>
                <Stack spacing={2} direction={"row"}>
                    <Typography>discount     </Typography>
                    <Typography>{BurgerData[1].discount}</Typography>
                </Stack>
                    <Stack spacing={2} direction={"row"}>
                        <Typography>quantity</Typography>
                        <Typography>{BurgerData[1].quantity}</Typography>
                    </Stack>
                    
            </Stack>
            <Stack sx={{width:"120px",display:"flex"}} spacing={3}justifyContent={'end'}>
                        <Stack spacing={2} direction={"row"} justifyContent={"center"}>
                        <Button onClick={()=>quantityVal("minus")}>-</Button>
                        <Typography>{quantity}</Typography>
                        <Button onClick={()=>quantityVal("plus")}>+</Button>
                        </Stack>
                <Button variant="contained" sx={{ backgroundColor: "success" }} >Add Cart</Button>
            <Button variant="contained" sx={{ backgroundColor: "green" }}>Buy Now</Button>
            </Stack>





        </Box>
       
        </>
    )
}

