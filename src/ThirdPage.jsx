import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import MessageIcon from '@material-ui/icons/Message';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { FormControl, Input } from '@material-ui/core';

import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import { Multistepcontext } from "./FormStepContext";
import { useContext } from "react";

const ThirdPage = () => {
  const { submitData, setStep, userData, setUserData } = useContext(Multistepcontext);

  return (
    <>
      <form>
        <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} lg={12}>
            <TextField variant="outlined"
              value={userData["phone"]}
              onChange={(event) => setUserData({ ...userData, "phone": event.target.value })}
              id="input-with-icon-textfield"
              autoComplete="off" margin="normal"
              label="contact" type="text"
              placeholder="Enter your Contact No" color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    < ContactPhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField variant="outlined"
              value={userData["hobb"]}
              onChange={(event) => setUserData({ ...userData, "hobb": event.target.value })}
              id="input-with-icon-textfield"
              autoComplete="off" margin="normal"
              label="Hobbies" type="text"
              placeholder="Enter your Hobbies" color="secondary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SentimentVerySatisfiedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <div>
            <Grid container>
              <Grid item direction="row">
                <Button variant="contained" onClick={() => setStep(2)} margin="normal" size="medium"
                  color="primary">Back</Button> <span></span><span></span>
                <Button variant="contained" onClick={() => setStep(4)} margin="normal" size="medium"
                  color="secondary">Next</Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </form>
    </>
  );
};
export default ThirdPage;