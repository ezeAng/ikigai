import React, {useContext, useEffect, useState} from 'react';
import Button from '@mui/material/Button';

import FormPageA from './FormPageA';
import FormPageB from './FormPageB';
import FormPageC from './FormPageC';
import FormPageD from './FormPageD';
import FormPageE from './FormPageE';
import FormPageSubmit from './FormPageSubmit';

import { DatabaseContext } from '../data/DatabaseContext';

import { motion, AnimatePresence, stagger } from "framer-motion";

import "../../styles/global.css";


import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Typography } from '@mui/material';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#9f4216',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#9f4216',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : 'rgb(107, 60, 59)',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : 'rgb(107, 60, 59)',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#463a38',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#463a38',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};


const Form = ({showBegin, navigateToResults, showHeader}) => {

    const dbContext = useContext(DatabaseContext);



    const formCount = 6;
    const [page, setPage] = useState(0);

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        age: 0,
        gender: "",
        employment_status: "",
        nationality: "",
        place_of_residence: "",
        happiness: "",
        skills: [],
        loves: [],
        help_wanted: 0
    });

    const movePageForward = () => {
        var curr = page;
        if (curr + 1 < formCount) {
            setPage(curr + 1);
        }
    }

    const movePageBackward = () => {
        var curr = page;
        if (curr - 1 >= 0) {
            setPage(curr - 1);
        }
    }

    const setFormData = (target, val) => {
        var newData = {...data};
        newData[target] = val;
        setData(newData);
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await dbContext.addUserStory(data);
        } catch (error) {
            console.log(error);
        }
        
        //Send data to results to pass to GPT
        navigateToResults(data);
    }

    const steps = [
      'About you',
      'Tell us more',
      'Happiness',
      'Skills',
      'What you love',
      'What you need'
    ];
    const btnStyle = {
      backgroundColor: "#9f4216",
      opacity: 0.85,
      transition: 'transform 0.5s ease-in-out',
      '&:hover': {
        opacity: 1,
        transform: 'scale(1.05)',
        transition: 'transform 1s ease-in-out',
        backgroundColor: '#9f4216',
        boxShadow: 'none',
      },
      
      borderRadius: 15,
      color: "white",
      margin: 10,
      marginTop: 20,
      width: 200,
      height: 70
    }

    const submitBtnStyle = {
      backgroundColor: "#919e97fa",
      opacity: 0.85,
      transition: 'transform 0.5s ease-in-out',
      '&:hover': {
        opacity: 1,
        transform: 'scale(1.3)',
        transition: 'transform 0.5s ease-in-out',
        backgroundColor: '#919e97fa',
        boxShadow: 'none',
      },
      borderRadius: 15,
      color: "black",
      margin: 10,
      marginTop: 20,
      width: 200,
      height: 70
    }

  return (
    <div>
        <AnimatePresence>
        {!showHeader && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 0 }}
            transition={{ duration: 1, delay: 0.8, type: 'spring' }}
          >
            <form onSubmit={handleSubmit}>
                <Stepper sx={{
                    display: 'flex',
                    width: 0.5,
                    margin: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '10vh', // You can adjust the height as needed
                    }} alternativeLabel activeStep={page} connector={<QontoConnector />}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}><Typography fontSize={16} fontFamily={'Montserrat'}>{label}</Typography></StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <div className='form-container'>

                    {page === 0 ? <FormPageA formData={data} updateFormData={setFormData} /> : null}
                    {page === 1 ? <FormPageB formData={data} updateFormData={setFormData} /> : null}
                    {page === 2 ? <FormPageC formData={data} updateFormData={setFormData} /> : null}
                    {page === 3 ? <FormPageD formData={data} updateFormData={setFormData} /> : null}
                    {page === 4 ? <FormPageE formData={data} updateFormData={setFormData} /> : null}
                    {page === 5 ? <FormPageSubmit formData={data} updateFormData={setFormData} /> : null}
                    <motion.div
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1}}
                      exit={{ opacity: 0, scale: 0, y: 0 }}
                      transition={{ duration: 1, delay: 2 }}
                    >
                      <div className='button-component'>
                      {page !== formCount - 1 ? 
                          <div className='form-button-bar'>
                            {page === 0 ? <Button sx={btnStyle} href='/'><Typography fontSize={18} fontFamily={'Montserrat'}>Home</Typography></Button> : null}
                            {page !== 0 ? <Button sx={btnStyle} onClick={movePageBackward}><Typography fontSize={18} fontFamily={'Montserrat'}>Back</Typography></Button> : null}
                              <Button sx={btnStyle} onClick={movePageForward}><Typography fontSize={18} fontFamily={'Montserrat'}>Next</Typography></Button>
                          </div> 
                      : null}

                      {page === formCount - 1 ? 
                          <div className='form-button-bar'>
                              <Button sx={btnStyle} onClick={movePageBackward}><Typography fontSize={18} fontFamily={'Montserrat'}>Back</Typography></Button>
                              
                              <Button sx={submitBtnStyle} type='submit'><Typography fontSize={18} fontFamily={'Montserrat'}>Submit</Typography></Button>
                          </div> 
                      : null }
                    </div>
                    </motion.div>

                </div>
            </form>
          </motion.div>
        )}
          
      </AnimatePresence>
        <div>
            
        </div>
    </div>
  )
}

export default Form