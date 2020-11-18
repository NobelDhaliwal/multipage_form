import React from "react";
import { useState } from "react";
import App from "./App";

export const Multistepcontext = React.createContext();
const FormStepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const submitData = () => {

        setFinalData((finalData) => [...finalData, userData]);
        alert("Form Submitted !👍");
        setUserData("");
        setStep(1);
        // window.open(URL, "_blank");
        document.write("<h1>Congratulations ! Your Form Submitted</h1>");
        document.body.style.backgroundColor = "aliceblue";
        document.write("<h1>Thankyou!👍😀</h1>");
    };


    return (
        <div>
            <Multistepcontext.Provider value={{
                currentStep, setStep, userData,
                setUserData, finalData, setFinalData, submitData
            }}>
                <App />
            </Multistepcontext.Provider>

        </div>
    )

};
export default FormStepContext;
