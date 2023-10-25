import React, { useContext } from 'react';
import { DatabaseContext } from '../data/DatabaseContext';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import AuthDetails from '../auth/AuthDetails';
const Dashboard = ({setShowHeader, setShowBeginBtn}) => {
    setShowBeginBtn(false);
    setShowHeader(false);
    const dbContext = useContext(DatabaseContext);



  return (
    <div>
      <div className='dashboard'>
        <h1>Authenticated Admin</h1>
        <h1>Ikigai Data Dashboard</h1>
        <h3>Count of users: {dbContext.users.length}</h3>
        {dbContext.users.map((user, key) => {
            return <p key={key}>{user.first_name}</p>})}
        <div>In the future, show a table of data</div>
      </div>  
      
      <button><a href='/'>Main Site</a></button>
    </div>
  )
}

export default Dashboard