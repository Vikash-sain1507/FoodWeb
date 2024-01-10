import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Card, CardContent, Typography, CardActionArea, CardMedia, Button, CardActions, Stack, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AddCart } from '../REDUX/cartSystem';

import { Alldata } from '../Data/Alldata';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import Footer from './Footer';
import Slide from '@mui/material/Slide';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AllProduct(){
  const [filterdAlldata,setFilteredAlldata]= useState([]);
  const [wordEntered,setWordEnterd]= useState("");
  const [filteredData,setfilteredData]= useState(Alldata);
  const [allFoodData,setAllFoodData]= useState([]);
  console.log("sdfsdf",filteredData);

// useEffect(()=>{
//  setAllFoodData(Alldata);
// },[])
  
 useEffect(() => {

  const data=Alldata.filter((value=>{
      return value.category === wordEntered
    }));
  console.log("dddddddd",data.length);
   data !=0 ? setfilteredData(data) : setfilteredData(Alldata)
 
  },[wordEntered,Alldata])



  const { name } = useSelector((state) => state);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };


  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch()
  const { state } = useLocation();
  const navigation = useNavigate();
  
  return (
    <>
      <Navbar />


      <Container maxWidth='lg' sx={{ marginTop: "100px" }}>
        <form className="d-flex" style={{ marginLeft: "40%", }}>
          <input className=" me-2" style={{ backgroundColor: "#0010" }} type="search" placeholder="Search" aria-label="Search" value={wordEntered} onChange={(e)=>setWordEnterd(e.target.value)  } />
          <button className="btn btn-outline-success" type="submit" >Search</button>
          {filterdAlldata.length != 0 && 
          filterdAlldata?.slice(0,6).map((value,index)=>{
            
            return value.type;
          })}
        </form>
        <Typography variant='h4' align='center' style={{ marginTop: "50px" }}>
          ALL PRODUCT LIST
        </Typography>
        <Grid container spacing={4} style={{ marginTop: "20PX" }}>
          {filteredData?.map((result, index) => (
            <Grid itam xs={12} sm={4} ms={4} key={index} style={{ position: "relative" }} >
              <Card style={{ padding: "10px", marginBottom: "30px", height: "450px", width: "380px" }}  >
                <CardActionArea>
                  <CardMedia onClick={() => navigation("/Product")}
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
                    <Button variant="contained" onClick={() => { dispatch(AddCart(result)); handleClickOpen();}} >Add Cart</Button>
                    

                    <Typography variant='h5'>{`$${result.mrp}`}</Typography>
                    <Button variant="contained" sx={{ backgroundColor: "green" }}>Buy Now</Button>
                   

                  </Stack>

                </CardActions>

              </Card>

            </Grid>
          ))}

        </Grid>
        <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"
                    >
                      <DialogTitle>{"Successfull Add to Cart"}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="Successfull">
                          Successfull
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Stack direction={"row"} justifyContent={"space-between"} full width mt={2}>
                          <Button sx={{ backgroundColor: "" }} onClick={handleClose}>ok</Button>
                          <AddShoppingCartIcon sx={{ fontSize: "30px", color: "balck" }} onClick={() => navigation("/Cart")} /></Stack>
                      </DialogActions>
                    </Dialog>
      </Container>

      <Footer />
    </>
  )
}

export default AllProduct