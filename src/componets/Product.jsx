import React, { useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

import { Alldata } from '../Data/Alldata';
import { useLocation, useSearchParams } from 'react-router-dom';

import { AddCart } from '../REDUX/cartSystem';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Navigate, useNavigate } from 'react-router-dom';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Product({ val }) {
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = React.useState(false);
    const { pathname } = useLocation();
    const path= pathname.split("/")
    console.log(path.length);
    


    function quantityVal(type) {
        if (type === "minus") {
            setQuantity(quantity - 1);
        }
        else {
            setQuantity(quantity + 1);

        }
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch()
    const [expanded, setExpanded] = React.useState(false);
    function AddCartClick() {
        dispatch(AddCart(val));
        handleClickOpen();
    }
    const navigation = useNavigate();
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };




    return (
        <>
            <Navbar />
            <Box direction={"row"} display={"flex"} justifyContent={"space-around"} marginTop={"30px"}>
                <Stack width={"580px"} height={"200px"}>
                    <Stack>
                        <img src={Alldata[1].img} alt="" style={{ height: "400px", width: "580px" }} />
                        {Alldata[1].info}
                    </Stack>

                </Stack>
                <Stack spacing={2} sx={{ height: "400px", justifyContent: "center" }} >
                    <Stack spacing={2} direction={"row"}>
                        <Typography >stock </Typography>
                        <Typography>{Alldata[1].stock}</Typography>
                    </Stack>
                    <Stack spacing={2} direction={"row"}>
                        <Typography> Type    </Typography>
                        <Typography>  {Alldata[1].type}</Typography>
                    </Stack>
                    <Stack spacing={2} direction={"row"}>
                        <Typography>MRP    </Typography>
                        <Typography>  ${Alldata[1].mrp}</Typography>
                    </Stack>
                    <Stack spacing={2} direction={"row"}>
                        <Typography>discount     </Typography>
                        <Typography>{Alldata[1].discount}</Typography>
                    </Stack>
                    <Stack spacing={2} direction={"row"}>
                        <Typography>quantity</Typography>
                        <Typography>{Alldata[1].quantity}</Typography>
                    </Stack>

                </Stack>

                <Stack sx={{ width: "120px", display: "flex" }} spacing={3} justifyContent={'end'}>
                    <Stack spacing={2} direction={"row"} justifyContent={"center"}>
                        <Button onClick={() => quantityVal("minus")}>-</Button>
                        <Typography>{quantity}</Typography>
                        <Button onClick={() => quantityVal("plus")}>+</Button>
                    </Stack>
                    <Button variant="contained" sx={{ backgroundColor: "success" }} onClick={() => AddCartClick()} >Add Cart</Button>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Let Google help apps determine location. This means sending anonymous
                                location data to Google, even when no apps are running.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={handleClose}>Agree</Button>
                        </DialogActions>
                    </Dialog>
                    <Button variant="contained" sx={{ backgroundColor: "green" }}>Buy Now</Button>
                </Stack>





            </Box>

        </>
    )
}

