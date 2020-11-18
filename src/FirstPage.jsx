import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import { Multistepcontext } from "./FormStepContext";
import { useContext } from "react";

const FirstPage = () => {
  const { setStep, userData, setUserData } = useContext(Multistepcontext);
  const inputEvent = (event) => {
    console.log(event.target.value);
    setUserData({ ...userData, "firstname": event.target.value })

  };
  return (
    <>

      <form>
        <div className="">
          <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={12} lg={12}>
              <TextField variant="outlined" id="input-with-icon-textfield"
                onChange={inputEvent}
                value={userData["firstname"]}
                autoComplete="off" margin="normal" label="FirstName" type="text"
                placeholder="Enter your FirstName" color="secondary" fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} lg={12}>
              <TextField variant="outlined" autoComplete="off" margin="normal" label="LastName"
                type="text" fullWidth value={userData["lastname"]}
                onChange={(event) => setUserData({ ...userData, "lastname": event.target.value })}
                placeholder="Enter your LastName" color="secondary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />

            </Grid>
            <Grid item xs={12} lg={12}>
              <TextField variant="outlined" autoComplete="off" margin="normal"
                label="AGE" type="number"
                value={userData["age"]}
                onChange={(event) => setUserData({ ...userData, "age": event.target.value })}
                color="secondary"
                placeholder="Enter your Age" fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }} />
            </Grid>
            <Button variant="contained" onClick={() => setStep(2)} margin="normal" size="medium"
              color="primary">Next</Button>

          </Grid>
        </div>
      </form>
    </>
  );
};
export default FirstPage;