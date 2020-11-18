import React from "react";
import { Stepper, StepLabel, Step, Grid } from '@material-ui/core';
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FormDisplayResult from "./FormDisplayResult";
import { Multistepcontext } from "./FormStepContext";
import { useContext } from "react";
import "./App.css";


const App = () => {
    const { currentStep } = useContext(Multistepcontext);
    const showStep = (step) => {
        console.log(step);
        // eslint-disable-next-line default-case
        switch (step) {
            case 1:
                return <FirstPage />
            case 2:
                return <SecondPage />
            case 3:
                return <ThirdPage />
            case 4:
                return <FormDisplayResult />
        }
    };
    return (
        <>

            <div className="div_style">

                <h1 style={{ color: "#ff2e7e" }}>Login Form </h1>

                <Grid container justify="center">
                    <Stepper className="stepper_g"
                        activeStep={currentStep - 1} orientation="horizontal">
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                    </Stepper>
                </Grid>

                {showStep(currentStep)}
                {/* we will call a function.we will use switch in function */}
            </div>


        </>
    );
};
export default App;