import React, {useContext, useEffect, useState} from 'react';
import Button from '@mui/material/Button';

import FormPageA from './FormPageA';
import FormPageB from './FormPageB';
import FormPageC from './FormPageC';
import FormPageD from './FormPageD';
import FormPageE from './FormPageE';
import FormPageSubmit from './FormPageSubmit';

import { DatabaseContext } from '../data/DatabaseContext';


import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
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


const Form = ({navigateToResults}) => {

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
        if (target === "skills" || target === "loves") {
            newData[target] = [val];
        } else {
            newData[target] = val;
        }
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
        'Personal Information',
         'Tell us more',
          'Happiness',
           'Skills',
            'What you love',
             'What you need'];

  return (
    <div>
        <div>
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
                        <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
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
                    
                    
                    {page !== formCount - 1 ? 
                        <div className='form-button-bar'>
                            <Button variant="contained" onClick={movePageBackward}>Back</Button>
                            <Button variant="contained" onClick={movePageForward}>Next</Button>
                        </div> 
                    : null}

                    {page === formCount - 1 ? 
                        <div>
                            <Button variant="contained" onClick={movePageBackward}>Back</Button>
                            <Button type='submit'>Submit</Button>
                        </div> 
                    : null }
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form