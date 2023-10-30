import './App.css';
import '@fontsource/montserrat';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Dashboard from './components/admin/Dashboard';

import { DatabaseProvider } from './components/data/DatabaseContext';

import Form from './components/forms/Form';
import Footer from './components/footer/Footer';
import Results from './components/results/Results';
import { Button, Typography } from '@mui/material';

import { motion, AnimatePresence } from "framer-motion";

import { generalStyles, headerStyle, beginBtnStyle } from './styles/style.js';


function App() {

  const navigate = useNavigate();
  const [results, setResults] = useState({});
  const [showBeginBtn, setShowBeginBtn] = useState(true);

  const [showHeader, setShowHeader] = useState(true);

  const navigateToResults = (data) => {
    setResults(data);
    navigate('/results', {replace: true});
    setShowBeginBtn(false);
  };

  const handleBegin = () => {
    setShowHeader(false);
    setShowBeginBtn(false);
  }

  const returnToHome = () => {
    setShowHeader(true);
    setShowBeginBtn(true);
  }

  
  return (
    <DatabaseProvider>
      <div className="App">
      <AnimatePresence>
        {showHeader && (
          <motion.header
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6}}
          >
            <Typography sx={headerStyle} variant='h1' fontFamily={'Montserrat'} >Welcome to Ikig.AI</Typography>
            <Typography variant='h4' fontFamily={'Montserrat'} >Begin your self-discovery journey here.</Typography>
          </motion.header>
        )}
      </AnimatePresence>
      {showBeginBtn ? <Button sx={beginBtnStyle} onClick={handleBegin} ><Typography variant='h3' color={"white"} fontFamily={'Montserrat'} >Begin</Typography></Button> : null}
      
      <Routes>
        <Route path="/" element={<Form showBegin={returnToHome} showHeader={showHeader} navigateToResults={navigateToResults} />} />
        <Route path="/results" element={<Results results={results} showBegin={returnToHome} />} />
        <Route path="/dashboard" element={<Dashboard setShowHeader={setShowHeader} setShowBeginBtn={setShowBeginBtn} />} />
      </Routes>

      <Footer />
      </div>
      <div class="error-prompt">
        <Typography variant='h4' fontFamily={'Montserrat'} >Please view this website on a desktop for the best experience.</Typography>
      </div>
    </DatabaseProvider>
  );
}

export default App;
