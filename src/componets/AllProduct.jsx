import React from 'react'
import Navbar from './Navbar'

import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, Button, CardActions, Stack,Container } from '@mui/material';
import {useDispatch,useSelector } from 'react-redux';
import { AddCart } from '../REDUX/cartSystem';
import Carousel from './Carousel'
import { Alldata } from '../Data/Alldata';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';




function AllProduct() {
    const { name } = useSelector((state) => state);
   
    const dispatch = useDispatch()
    const { state } = useLocation();
    const navigation=useNavigate();
  return (
    <>
    <Navbar/>
    
    <Container maxWidth='lg' sx={{marginTop:"100px"}}>
                <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
                    ALL PRODUCT LIST
                </Typography>
                <Grid container spacing={4} style={{ marginTop: "20PX" }}>
                    {Alldata.map((result, index) => (
                        <Grid itam xs={12} sm={4} ms={4} key={index} style={{ position: "relative" }} >
                            <Card style={{ padding: "10px", marginBottom: "30px", height: "450px", width: "380px" }}  >
                                <CardActionArea>
                                    <CardMedia onClick={()=>navigation("/Product")}
                                        component="img"
                                        height="194"
                                        image={result.img}
                                        alt="green iguana"
                                        style={{ borderRadius: "5px" }} />
                                    <CardContent sx={{ height: "150px" }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {result.type}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {result.info}

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions disableSpacing>
                                <Stack direction={"row"} justifyContent={"space-between"} full width mt={2} alignItems={"center"}>
                                        <Button variant="contained" onClick={() => dispatch(AddCart(result))}>Add Cart</Button>
                                        <Typography variant='h5'>{`$${result.mrp}`}</Typography>
                                        <Button variant="contained" sx={{ backgroundColor: "green" }}>Buy Now</Button>

                                    </Stack>

                                </CardActions>

                            </Card>

                        </Grid>
                    ))}

                </Grid>

            </Container>


    </>
  )
}

export default AllProduct