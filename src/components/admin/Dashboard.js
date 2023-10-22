import React, { useContext, useEffect, useState } from 'react';
import { DatabaseContext } from '../data/DatabaseContext';

const Dashboard = () => {

    const dbContext = useContext(DatabaseContext);

    const addUser = () => {
        dbContext.addUserStory("");
    }

  return (
    <div>
        <h2>Dashboard</h2>
        <h3>List: {dbContext.users.length}</h3>
        {/* {dbContext.users.map((user, key) => {
            return <p key={key}>{user.first_name}</p>})} */}

        <button onClick={addUser}>Add fake user.</button>
    </div>
  )
}

export default Dashboard