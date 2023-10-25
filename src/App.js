import './App.css';
import './styles/global.css'
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

function App() {

  const navigate = useNavigate();
  const [results, setResults] = useState({});
  const [showBeginBtn, setShowBeginBtn] = useState(true);

  const [showHeader, setShowHeader] = useState(true);

  const [showForm, setShowForm] = useState(false);

  const navigateToResults = (data) => {
    setResults(data);
    navigate('/results', {replace: true});
    setShowForm(false);
    setShowBeginBtn(false);
  };

  const handleBegin = () => {
    setShowHeader(false);
    setShowForm(true)
    setShowBeginBtn(false);
  }

  const returnToHome = () => {
    setShowHeader(true);
    setShowBeginBtn(true);
  }

  const beginBtnStyle = {
    display: showBeginBtn ? "block" : "none",
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
    color: "black",
    margin: "auto",
    marginTop: 20,
    width: 0.4,
    height: 120
  }

  const headerStyle = {
    margin: "auto",
    marginTop: 20,
    marginBottom: 10,
    width: 0.5,
    height: 100
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
            <Typography variant='h3' fontFamily={'Montserrat'} >Begin your self-discovery journey here.</Typography>
          </motion.header>
        )}
      </AnimatePresence>
      <Button sx={beginBtnStyle} onClick={handleBegin} ><Typography variant='h3' fontFamily={'Montserrat'} >Begin</Typography></Button>
      <Routes>
        <Route path="/" element={<Form showBegin={returnToHome} showHeader={showHeader} navigateToResults={navigateToResults} />} />
        <Route path="/results" element={<Results results={results} showBegin={returnToHome} />} />
        <Route path="/dashboard" element={<Dashboard setShowHeader={setShowHeader} setShowBeginBtn={setShowBeginBtn} />} />
      </Routes>

      <Footer />
      </div>
    </DatabaseProvider>
  );
}

export default App;
