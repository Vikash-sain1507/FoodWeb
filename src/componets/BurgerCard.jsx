// import React from 'react'
// import{ Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import img from '../Images/mainpic.jpg';
// export default function Card() {
//     return (
//         <div>
            
//          <CardMedia 
//          component={"img"}
//          height={"140"}
//          image={img}
//          alt='test image'/>

//          <CardContent>
//             <Typography gutterBottom variant='h5' component={"div"}>
//                 momoas
//             </Typography>

//          </CardContent>
//          <CardActions>
//             <Button size='samll' color='primary'>Add to Card</Button>
//          </CardActions>

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
import { colors } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

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
   
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <CardMedia
        component="img"
        height="194"
        image={val.img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {val.info}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <Button variant="contained">Add Cart</Button>
       
      </CardActions>
    

    </Card>
    
    
  );
}


































