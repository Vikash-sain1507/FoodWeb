import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, Button, CardActions, Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { BurgerAllData } from '../Data/Data';
import { PizzaAllData } from '../Data/Data';
import { MomosAllData } from '../Data/Data';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../REDUX/cartSystem';
import Navbar from './Navbar';

function AllProductburger() {
    const { name } = useSelector((state) => state);
    console.log("🚀 ~ file: AllProductburger.jsx:14 ~ AllProductburger ~ result:", name.cart)
    const dispatch = useDispatch()
    const { state } = useLocation();


    const data = state.product === "Burger" ? BurgerAllData : state.product === "Pizza" ? PizzaAllData : MomosAllData;
    const navigation=useNavigate();
    return (
        <div>
        <Navbar/>
            <Container maxWidth='lg' sx={{marginTop:"100px"}}>
                <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
                    ALL PRODUCT LIST
                </Typography>
                <Grid container spacing={4} style={{ marginTop: "20PX" }}>
                    {data.map((result, index) => (
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

        </div>

    )
}

export default AllProductburger