import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {Multistepcontext}from "./FormStepContext";
import { useContext } from "react";


const SecondPage=()=>{
  const {setStep,userData,setUserData}=useContext(Multistepcontext);
  // const inputEvent=(event)=>{
  //   console.log(event.target.value);
  //   setUserData({...userData,"email":event.target.value})
    
  //     };
  const inputEvent=(event)=>{
    setUserData((preVal)=>{
return{
...preVal,"email":event.target.value}
 });
  };
return(
<>
<form>
<Grid container direction="column" justify="center"
 alignItems="center" spacing={3}>

  <Grid item  xs={12}  lg={12}>
      <TextField variant="outlined" 
       onChange={inputEvent}
       value={userData["email"]}
       id="input-with-icon-textfield"
     autoComplete="off" margin="normal" label="email" type="email" 
    placeholder="Enter your Email"  color="secondary" 
    InputProps={{
        startAdornment: (
          <InputAdornment position="start">
         <EmailIcon/>
          </InputAdornment>
        ),
      }}
      />
</Grid>

<Grid item xs={12} lg={12}>
  <TextField variant="outlined" autoComplete="off" 
  value={userData["password"]}
  onChange={(event)=>setUserData({...userData,"password":event.target.value})}
  margin="normal" label="Password"
type="password" 
 placeholder="Enter your Password"  
 color="secondary" 
 InputProps={{
  startAdornment: (
    <InputAdornment position="start">
   <VisibilityOffIcon/>
    </InputAdornment>
  ),
}}
   />

</Grid>

<Grid item   xs={12}  lg={12}>
  <TextField variant="outlined" autoComplete="off" margin="normal"
 label="Employee_ID" type="text" 
 value={userData["emp"]}
onChange={(event)=>setUserData({...userData,"emp":event.target.value})}
    placeholder="Enter your Employee_Id" 
     color="secondary"
     size="medium"
    InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle/>
          </InputAdornment>
        ),
      }}/>
</Grid>
<div>
   <Button variant="contained"  onClick={()=>setStep(1)}  margin="normal" size="medium" 
     color="primary">Back</Button> <span></span><span></span>
   <Button variant="contained"  onClick={()=>setStep(3)}  margin="normal" size="medium" 
     color="secondary">Next</Button>
  </div>
    </Grid>
</form>
</>
);
};
export default SecondPage;