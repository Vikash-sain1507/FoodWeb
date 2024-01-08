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
        <InstagramIcon sx={{backgroundColor:"red",borderRadius:"2px"}}></InstagramIcon>
        <FacebookIcon sx={{backgroundColor:"red",borderRadius:"2px"}}></FacebookIcon>
        <WhatsAppIcon sx={{backgroundColor:"red",borderRadius:"2px"}}></WhatsAppIcon>
        < YouTubeIcon sx={{backgroundColor:"red",borderRadius:"2px"}}></YouTubeIcon>
      </Stack >
      <Stack width={"100%"} alignItems={'center'} marginTop={"120px"} >© 2023 GoFOO Inc
      </Stack>
  

    
  </Box>
  )
}
  