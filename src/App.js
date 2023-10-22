import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import { DatabaseProvider } from './components/data/DatabaseContext';
import Dashboard from './components/admin/Dashboard';
import Form from './components/forms/Form';
import Footer from './components/footer/Footer';

function App() {
  return (
    <DatabaseProvider>
      <div className="App">
        <h1>Welcome to Ikig.AI</h1>
        <button>Continue as guest</button>
        {/* <SignIn />
        <SignUp />
        <AuthDetails /> */}
        <Form />
        {/* <Dashboard /> */}
        
        <Footer />
      </div>
    </DatabaseProvider>
  );
}

export default App;
