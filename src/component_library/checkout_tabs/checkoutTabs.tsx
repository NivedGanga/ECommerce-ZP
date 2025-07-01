'use client'
import { Box, Step, StepLabel, Stepper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CheckoutForm from '../checkout_form/checkoutForm';
import ShipmentDetails from '../shipment_details/shipmentDetails';
import { checkoutSteps } from '@/core_components/utils/constants/constants';
import { useCheckoutArea } from '../checkout_area/useCheckoutArea';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}


const CheckoutTabs = () => {
    const [activeStep, setActiveStep] = useState(0);
    const { formik, success } = useCheckoutArea()

    useEffect(() => {
        if (success == 'next') {
            handleNext()
        }
    }, [success])

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <Box sx={{ paddingBottom: 1, borderColor: 'divider' }}>
                <Stepper activeStep={activeStep}>
                    {checkoutSteps.map((label, index) => (
                        <Step key={index} completed={index < activeStep}>
                            <StepLabel sx={{
                                '& .MuiStepLabel-label': {
                                    color: 'gray'
                                },
                                '& .MuiStepLabel-label.Mui-active': {
                                    color: 'black'
                                },
                                '& .MuiStepLabel-label.Mui-completed': {
                                    color: 'green'
                                },
                                '& .MuiStepIcon-text': {
                                    fill: 'white',
                                    fontSize: '13px',
                                },
                                '& .MuiStepIcon-text.Mui-active': {
                                    fill: 'white',
                                    fontSize: '13px',
                                },
                                '& .MuiStepIcon-text.Mui-completed': {
                                    fill: 'white',
                                    fontSize: '13px',
                                }
                            }}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <React.Fragment>
                <TabPanel value={activeStep} index={0}>
                    <CheckoutForm formik={formik} />
                </TabPanel>
                <TabPanel value={activeStep} index={1}>
                    <ShipmentDetails onBack={() => handleBack()} onProceed={() => handleNext()} />
                </TabPanel>
                <TabPanel value={activeStep} index={2}>
                    Payment Screen
                </TabPanel>
            </React.Fragment>
        </>
    )
}

export default CheckoutTabs