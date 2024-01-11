import {React, useState }from 'react'
import { useLocation } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, Button, CardActions, Stack, Box } from '@mui/material';
import Container from '@mui/material/Container';
import { BurgerData } from '../Data/Data';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart, decquantity, decrement, incquantity, removeCart } from '../REDUX/cartSystem';
import Navbar from './Navbar';
import DeleteIcon from '@mui/icons-material/Delete';


function Cart() {
    const { name } = useSelector((state) => state);
    const dispatch=useDispatch();
    const data = useSelector((state) => state);

    var cartData = name.cart
    const show = BurgerData[0].info;
    const [quantity,setQuantity] = useState(1);
    
    function quantityVal(type,id){
        if(type==="minus"){
           
            dispatch(decquantity(id))
        }
        else{
            
            dispatch(incquantity(id))    

    
        }
       }


    
    return (
        <>
            <Navbar />

            <Stack direction={"row"} sx={{ marginTop: "100px" }}>

                <Stack flexGrow={1} spacing={2} >

                    {cartData?.map((result, index) => (

                        <Stack direction={"row"} flexGrow={1} spacing={10} backgroundColor={"#1F1F1E"}  >
                            <Stack >
                                <img src={result.img} style={{ height: "200px", width: "300px" }} />
                            </Stack>
                            <Stack spacing={2}>
                                <Typography>{`Name : ${result.type}`}</Typography>
                                <Typography>{`Stock : ${result.stock}`}</Typography>
                                <Typography>{`Quantity : ${result.quantity}`}</Typography>
                                <Typography>{`Price : ${result.mrp}`}</Typography>
                            </Stack>
                            <Stack sx={{justifyContent:"center"}}><DeleteIcon onClick={()=>dispatch(removeCart(index))} /> </Stack>
                            <Stack sx={{justifyContent:"center"}}>
                            <Stack spacing={2} direction={"row"} justifyContent={"center"}>
                        <Button onClick={()=>quantityVal("minus",result.id)}>-</Button>
                        <Typography>{result.quantity}</Typography>
                        <Button onClick={()=>quantityVal("plus",result.id)}>+</Button>
                        </Stack>
                        </Stack>
                        </Stack>
                    ))}
                </Stack>

                <Stack spacing={5} sx={{ height: "100vh", widht: "300px", padding: "20px" }}>
                    <Stack sx={{ alignItems: "center" }}>TOTAL</Stack>

                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography >Discount</Typography>
                        <Typography >$1</Typography>
                    </Stack>

                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography >Total</Typography>
                        <Typography >{`$${name.total}`}</Typography>
                    </Stack>


                    <Button variant="contained" sx={{ backgroundColor: "green", }}>Buy Now</Button>
                </Stack>
            </Stack>






        </>

    )
}

export default Cart