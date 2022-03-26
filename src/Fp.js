/* eslint-disable default-case */
import React, { useState } from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        marginRight: theme.spacing(1),
    },
}));

function getSteps() {
    return [
        "Enter Your Valid Email",
        "Enter New Password",
        "Submit",
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <>
                    <TextField
                        id="Email"
                        label="Email"
                        variant="outlined"
                        placeholder="Enter Your Email"
                        fullWidth
                        margin="normal"
                        name="email"
                    />
                </>
            );

        case 1:
            return (
                <>
                    <TextField
                        id="password"
                        label="Enter New Password"
                        variant="outlined"
                        placeholder="Enter New Password"
                        fullWidth
                        margin="normal"
                        name="password"
                    />
                </>
            );


    }
}

const LinaerStepper = () => {
    let history = useHistory()
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();
    const [errors, setErrors] = useState('');
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = () => {
    
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
        let item = {
            email: values.email,
            password: values.password
          }
        axios.put(`http://localhost:9900/savepassword`, item).then((res)=>{
            console.log("ressssssss", res)
        })
        };

        const isLastStep = () => {
            if (activeStep === steps.length) window.location.href = '\booking';
            return false;
          };    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // const handleSkip = () => {
    //     if (!isStepSkipped(activeStep)) {
    //         setSkippedSteps([...skippedSteps, activeStep]);
    //     }
    //     setActiveStep(activeStep + 1);
    // };

    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography
                                variant="caption"
                                align="center"
                                style={{ display: "block" }}
                            >
                                
                            </Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <Typography variant="h3" align="center">
                    Thank You
                </Typography>
            ) : (
                <>
                    <form>{getStepContent(activeStep)}</form>
                    <Button
                        className={classes.button}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                    >
                        back
                    </Button>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    >
                        {activeStep === steps.length - 1 ? "Submit" : "Next"}
                    </Button>
                </>
            )}
        </div>
    );
};

export default LinaerStepper;