import { Box, Button, Checkbox,  FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';


function App() {
  return (
    <Grid container component={Paper} height={"100vh"} sx={{backgroundColor:"red"}}display={"flex"} justifyContent="center" alignItems={"center"}>
     <Box component={Paper} width={"600px"} p={2} flexDirection="column" height={"80%"} gap={2} display={"flex"} justifyContent="center" alignItems={"center"} >
      <Typography variant='h5'>Hello Everyone</Typography>
      <TextField label="username"fullWidth margin='normal'/>
      <TextField label="email" fullWidth margin='normal'/>
      <TextField label="password"fullWidth margin='normal'/>
      <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={<Typography sx={{ fontSize: `80%` }}>Remember Me</Typography>}/>
      <Button variant='contained' fullWidth onClick={()=>{alert("hii")}}>Save</Button>
       </Box>
    </Grid>
    
  );
}

export default App;
