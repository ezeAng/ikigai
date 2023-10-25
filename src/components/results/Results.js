import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { CircularProgress } from '@mui/material';

const Results = ({results, showBegin}) => {
  const navigate = useNavigate();
  
  const navigateToHome = () => {
    showBegin();
    navigate('/', {replace: true});
  };


  console.log("Results: ", results);

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
  
  const prompt = `I love these ${loves} and I have these skills ${skills}. 
  how can I utilise my skills to do what I love 
  while providing value to the world? 
  In other words, find my Ikigai based on what are the in demand industries and trends.`;

  const prompt_options = {
    0 : `After which, tell me 5 possible career paths I can take. Respond simply in the tone of a counsellor or yoga instructor, in less than 100 words.`,
    1 : `After which, tell me 5 possible steps I can take. Respond simply in the tone of a counsellor or yoga instructor, in less than 100 words.`
  };

  var final_prompt = prompt + prompt_options[help_wanted];
  console.log("Final prompt: ", final_prompt);

  //Do the GPT API Call here



  //Get the results

  return (
    <div>Results
      <div>
          <div><CircularProgress /></div>

          <div>"Knowing yourself is the beginning of all wisdom." - Aristotle.</div>

          <div><p>Hello {results.first_name ? <span>{results.first_name}</span> : <span>friend</span>}, thank you for waiting.</p></div>
          <div>RESULTS HERE</div>
          <p>Once result retrieved, fade it in</p>
          <Button onClick={navigateToHome}>Home</Button>
      </div>
    </div>

  )
}

export default Results