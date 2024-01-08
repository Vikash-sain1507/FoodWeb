

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Container, Stack, colors } from '@mui/material';
import { AddCart } from '../REDUX/cartSystem';
import { useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  const [value,setValue]=useState(0)
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BurgerCard({val}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch =useDispatch() 
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function AddCartClick(){
    dispatch(AddCart(val));
    handleClickOpen();
  }
  const navigation =useNavigate();



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={val.type}
        subheader={val.stock}
      />
      <CardMedia onClick={()=>navigation(`/Product/${val.id}`)}
        component="img"
        height="194"
        image={val.img}
        alt="Paella dish"
      />
      <CardContent sx={{height:"150px"}}>
        <Typography variant="body2" color="text.secondary">
        {val.info}
        </Typography>
      </CardContent>
      
      <Container >
      
      </Container>
      <CardActions disableSpacing>
       <Stack direction={"row"} justifyContent={"space-between"} full width mt={2} alignItems={"center"}>
       <Button variant="contained"onClick={()=>AddCartClick()}>Add Cart</Button>
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
          <Stack direction={"row"} justifyContent={"space-between"}  full  width mt={2}>
          <Button sx={{backgroundColor:""}} onClick={handleClose}>ok</Button>
          <AddShoppingCartIcon sx={{fontSize:"30px",color:"balck"}} onClick={()=>navigation("/Cart")} /></Stack>
        </DialogActions>
      </Dialog>
       <Typography variant='h5'>{`$${val.mrp}`}</Typography>
       <Button variant="contained" sx={{backgroundColor:"green"}}>Buy Now</Button>

       </Stack>
       
      </CardActions>
    

    </Card>
    
    
  );
}


































