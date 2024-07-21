
import React, { useState, useEffect, useRef } from 'react'
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Divider, Grid, ListItemButton, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import FOG from 'vanta/dist/vanta.fog.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag


export default function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: myRef.current,
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  highlightColor: 0xffffff,
  midtoneColor: 0xd6d6d6,
  lowlightColor: 0xffffff,
  baseColor: 0xd6d6d6,
  blurFactor: 0.59,
  speed: 2.60,
  zoom: 1.10
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  
  return (
    <Grid
    ref={myRef}
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ height: '100vh', overflow:'hidden' }}
>
  <Grid item  textAlign={'center'}>
    
    {/* <Grid container height={'100%'}  sx={{ height: '100%' ,alignItems:"stretch"}} >
      <Grid  container direction='column' xs display="flex" justifyContent="center" justifyItems={'center'} alignItems="center" > */}
      <Typography variant="h3"  fontFamily={"inherit"}>
        Illia Chuiev
      </Typography>
      <Typography variant="h6" fontFamily={"inherit"}>
        .NET / React.js developer
      </Typography>
        <List >
          <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <LinkedInIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="LinkedIn" secondary="linkedin.com/in/illia-chuiev" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemAvatar >
              <Avatar>
                <TelegramIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Telegram" secondary="@palaniza" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemAvatar >
              <Avatar>
                <MailOutlineIcon />
              </Avatar>
            </ListItemAvatar >
            <ListItemText primary="Gmail" secondary="chuev120@gmail.com" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemAvatar >
              <Avatar>
                <PhoneIphoneIcon />
              </Avatar>
            </ListItemAvatar >
            <ListItemText primary="Phone (UA)" secondary="+380955578928" />
          </ListItemButton>
        </List>
      </Grid>
    </Grid>
    
  );
}