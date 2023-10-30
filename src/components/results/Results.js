import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { Typography } from '@mui/material';
import { GridLoader } from 'react-spinners';
import { generalStyles, loaderStyle, resultHeaderStyle, resultStyle, typographyStyle, btnContStyle, homeBtnStyle } from '../../styles/style.js';
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
    0 : `After which, tell me 5 possible career paths I can take. `,
    1 : `After which, tell me 5 possible steps I can take. `
  };

  const tone = "Respond simply in the tone of a counsellor or yoga instructor, in less than 100 words.";

  var final_prompt = prompt + prompt_options[help_wanted] + tone;



  useEffect(() => {
    getOpenAIResult(final_prompt);
    return;
  },[]);


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





  return (
      <div>
        <Typography variant="h3" sx={resultHeaderStyle} fontFamily={"montserrat"} >"Knowing yourself is the beginning of all wisdom."</Typography>
        <Typography variant="h5" sx={resultHeaderStyle} fontFamily={"montserrat"} gutterBottom>- Aristotle.</Typography>
        <Box sx={loaderStyle}>
          <GridLoader loading={isLoading} color="#545251" />
        </Box>
        <Box sx={resultHeaderStyle}>
          {!isLoading && finalRes ? <Typography variant="h5" sx={resultHeaderStyle} fontFamily={"montserrat"} gutterBottom>Hello {results.first_name ? <span>{results.first_name}</span> : <span>friend</span>}, thank you for waiting.</Typography> : null}
        </Box>
        {(finalRes || hasError) && !isLoading ? <Box sx={resultStyle}>
          {hasError ? <Typography variant="h5" sx={resultHeaderStyle} fontFamily={"montserrat"} gutterBottom>There seems to be an error with our service, our engineers are working on it.</Typography> : null}
          <Typography sx={typographyStyle} fontSize={14} fontFamily={"montserrat"} >{finalRes ? finalRes : null }</Typography>
        </Box> : null}
        
        <Box sx={btnContStyle}>
          {!isLoading && (finalRes || hasError) ? <Button sx={homeBtnStyle} onClick={navigateToHome}><Typography fontSize={24} fontFamily={"montserrat"} >Return Home</Typography></Button> : null}
        </Box>
        
      </div>
  )
}

export default Results