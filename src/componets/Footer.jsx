import { Stack,Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
  return (
    <Box sx={{width:"100%", height:"30vh",backgroundColor:""}}>
    

      <Stack direction={"row"} spacing={2}  justifyContent={"end"} marginRight={"50px"} marginTop={"30px"}>
        <InstagramIcon sx={{backgroundColor:"#9e0c1e",borderRadius:"3px"}}></InstagramIcon>
        <FacebookIcon sx={{backgroundColor:"#2900e4",borderRadius:"3px"}}></FacebookIcon>
        <WhatsAppIcon sx={{backgroundColor:"#22c40e",borderRadius:"50px",}}></WhatsAppIcon>
        < YouTubeIcon sx={{backgroundColor:"red",borderRadius:"3px"}}></YouTubeIcon>
      </Stack >
      <Stack width={"100%"} alignItems={'center'} marginTop={"120px"} >© 2023 GoFOO Inc
      </Stack>
  

    
  </Box>
  )
}
  