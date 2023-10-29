import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { PuffLoader } from 'react-spinners';

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

    const intervalId = setInterval(() => {
      console.log("Mounted Results Page");
    }, 1000);
  
    getOpenAIResult(final_prompt);
    // Cleanup the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
    
  }, []);


  //Do the GPT API Call here
  async function getOpenAIResult(prompt) {
    try {
      console.log("Getting GPT")
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      if (completion) {
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

  


  //Get the results

  const resultHeaderStyle ={
    margin: 6,
    display : "block",
    justifyContent: 'center',
    alignItems: 'center'
  }

  const resultStyle ={
    margin: 6,
    display : "block",
    width: "75vw",
    justifyContent: 'center',
    alignItems: 'center'
  }

  const typographyStyle = {
    fontSize: '1.25rem', // Adjust the font size as needed for readability
    textAlign: 'left',
  };


  const loaderStyle = {
    display : "flex",
    position: "absolute",
    height: "80vh",
    width: "100vw",
    justifyContent: 'center',
    alignItems: 'center',
  }

  const homeBtnStyle = {
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
    width: 300,
    height: 100
  }

  const btnContStyle = {
    width: "100vw",
    position: "relative",
    bottom: 0
  }

  return (
    <div>
      <div>
        
        <Typography variant="h4" sx={resultHeaderStyle} fontFamily={"montserrat"} >"Knowing yourself is the beginning of all wisdom."</Typography>
        <Typography variant="h5" sx={resultHeaderStyle} fontFamily={"montserrat"} gutterBottom>- Aristotle.</Typography>
        <Box sx={loaderStyle}>
          <PuffLoader loading={isLoading} />
        </Box>
        
        <Box className='results-chat-reply' sx={resultStyle}>
          {hasError ? <Typography variant="h5" sx={resultHeaderStyle} fontFamily={"montserrat"} gutterBottom>There seems to be an error with our service, our engineers are working on it.</Typography> : null}
          <Typography variant="h6" sx={resultHeaderStyle} fontFamily={"montserrat"} gutterBottom>Hello {results.first_name ? <span>{results.first_name}</span> : <span>friend</span>}, thank you for waiting.</Typography>
          <Typography sx={typographyStyle} fontSize={14} fontFamily={"montserrat"} >{finalRes ? finalRes : null }</Typography>
        </Box>
        <Box sx={btnContStyle}>
          <Button sx={homeBtnStyle} onClick={navigateToHome}><Typography sx={resultStyle} fontSize={20} fontFamily={"montserrat"} >Return Home</Typography></Button>
        </Box>
        
      </div>
    </div>

  )
}

export default Results