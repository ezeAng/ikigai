import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import { DatabaseProvider } from './components/data/DatabaseContext';
import Dashboard from './components/admin/Dashboard';
import Form from './components/forms/Form';
import Footer from './components/footer/Footer';
import Results from './components/results/Results';

function App() {

  const navigate = useNavigate();
  const [results, setResults] = useState({});

  const navigateToResults = (data) => {
    setResults(data);
    navigate('/results', {replace: true});
  };
  
  return (
    <DatabaseProvider>
      <div className="App">
        <h1>Welcome to Ikig.AI</h1>
        <h1>Begin your journey here.</h1>
        <Routes>
          <Route path="/" element={<Form navigateToResults={navigateToResults} />} />
          <Route path="/results" element={<Results results={results} />} />
        </Routes>

        <Footer />
      </div>
    </DatabaseProvider>
  );
}

export default App;
