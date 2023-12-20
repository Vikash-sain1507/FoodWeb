import React from 'react'
import { useLocation } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, Button, CardActions } from '@mui/material';
import Container from '@mui/material/Container';
import { BurgerAllData } from '../Data/Data';
import { PizzaAllData } from '../Data/Data';
import { MomosAllData } from '../Data/Data';



function AllProductburger() {
    const { state } = useLocation();
    
   
    const data =  state.product==="Burger"?BurgerAllData:state.product==="Pizza"?PizzaAllData :MomosAllData;
    return (
        <div>
            <Container maxWidth='lg'>
                <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
                    ALL PRODUCT LIST
                </Typography>
                <Grid container spacing={4} style={{ marginTop: "20PX" }}>
                    { data.map((result, index) => (
                        <Grid itam xs={12} sm={4} ms={4} key={index} style={{position:"relative"}} >
                            <Card  style={{ padding: "10px", marginBottom: "30px", height:"450px", width:"380px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={result.img}
                                        alt="green iguana"
                                        style={{ borderRadius: "5px" }} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {result.type}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {result.info}

                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions disableSpacing style={{position:"absolute",marginBottom:"0px" }}>

                                    <Button variant="contained">Add Cart</Button>

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