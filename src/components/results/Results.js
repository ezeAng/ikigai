import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { GridLoader } from 'react-spinners';
import "../../styles/global.css";

import { OpenAI } from 'openai';

const openai = new OpenAI({apiKey: process.env.REACT_APP_API_KEY, dangerouslyAllowBrowser: true});



const Results = ({results, showBegin}) => {

  const navigate = useNavigate();
  const navigateToHome = () => {
    showBegin();
    navigate('/', {replace: true});
  };

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [finalRes, setFinalRes] = useState('');


  var loves = ["No loved activities"];
  if (results['loves']) {
    loves = results['loves'].join(',');
  }

  var skills = ["No loved activities"];
  if (results['skills']) {
    skills = results['skills'].join(',');
  }
  
  const help_wanted = results['help_wanted'];
  //Create GPT PRompt
  
  const prompt = `I love these subjects ${loves} and I have these skills ${skills}. 
  how can I utilise my skills to do what I love 
  while providing value to the world? 
  In other words, find my Ikigai based on what are the in demand industries and trends.`;

  const prompt_options = {
    0 : `After which, tell me 5 possible career paths I can take. Respond simply in the tone of a counsellor or yoga instructor, in less than 100 words.`,
    1 : `After which, tell me 5 possible steps I can take. Respond simply in the tone of a counsellor or yoga instructor, in less than 100 words.`
  };

  var final_prompt = prompt + prompt_options[help_wanted];



  useEffect(() => {
    getOpenAIResult(final_prompt);
    return;
  });


  //Do the GPT API Call here
  async function getOpenAIResult(prompt) {
    try {
      console.log("Getting...")
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      if (completion) {
        console.log("Completed")
        setFinalRes(completion.choices[0].message.content);
        setIsLoading(false);
      }
      
      return completion;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setHasError(true);
      return null;
    }
  }

  const resultHeaderStyle ={
    margin: "auto",
    marginTop: "1rem",
    marginBottom: "1rem",
    width: "100vw",
    display : "block",
    justifyContent: 'center',
    alignItems: 'center'
  }

  const resultStyle ={
    margin: "auto",
    marginBottom: "1rem",
    width: "80vw",
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // light shadow for a hovering effect
    borderRadius: '20px', // rounded corners
    padding: '1rem',
    display: 'flex',
    alignItems: 'center', // vertically center the text
    justifyContent: 'center', // horizontally center the text
    transition: 'transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-10px)', // move the card up by 10px on hover
      boxShadow: '0 6px 16px rgba(0, 0, 0, 1)' // increase the shadow to emphasize the hover
    }
  }

  const typographyStyle = {
    padding: 5,
    fontSize: '1.25rem', // Adjust the font size as needed for readability
    textAlign: 'left',
  };


  const loaderStyle = {
    display : "flex",
    position: "absolute",
    top: 0,
    height: "100vh",
    width: "100vw",
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'scale(2)'
  }

  const homeBtnStyle = {
    backgroundColor: "#919e97fa",
    opacity: 0.85,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.5s ease-in-out',
    '&:hover': {
      transform: 'translateY(-10px)', // move the card up by 10px on hover
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)' ,
      opacity: 1,
      backgroundColor: '#919e97fa',
    },
    borderRadius: 15,
    color: "black",
    width: "20rem",
    height: "6rem"
  }

  const btnContStyle = {
    marginTop: "3rem",
    width: "100vw",
    position: "relative",
    bottom: 0
  }

  return (
    <div>
      <div>
        <Typography variant="h3" sx={resultHeaderStyle} fontFamily={"montserrat"} >"Knowing yourself is the beginning of all wisdom."</Typography>
        <Typography variant="h5" sx={resultHeaderStyle} fontFamily={"montserrat"} gutterBottom>- Aristotle.</Typography>
        <Box sx={loaderStyle}>
          <GridLoader loading={isLoading} color="#545251" />
        </Box>
        <Box sx={resultHeaderStyle}>
          {!isLoading && finalRes ? <Typography variant="h5" sx={resultHeaderStyle} fontFamily={"montserrat"} gutterBottom>Hello {results.first_name ? <span>{results.first_name}</span> : <span>friend</span>}, thank you for waiting.</Typography> : null}
        </Box>
        
        <Box display={(finalRes || hasError) && !isLoading} sx={resultStyle}>
          {hasError ? <Typography variant="h5" sx={resultHeaderStyle} fontFamily={"montserrat"} gutterBottom>There seems to be an error with our service, our engineers are working on it.</Typography> : null}
          <Typography sx={typographyStyle} fontSize={14} fontFamily={"montserrat"} >{finalRes ? finalRes : null }</Typography>
        </Box>
        <Box sx={btnContStyle}>
          {!isLoading && (finalRes || hasError) ? <Button sx={homeBtnStyle} onClick={navigateToHome}><Typography fontSize={24} fontFamily={"montserrat"} >Return Home</Typography></Button> : null}
        </Box>
        
      </div>
    </div>

  )
}

export default Results