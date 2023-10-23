import React, { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const DatabaseContext = createContext();

const DatabaseProvider = ({children}) => {

    const usersCollectionRef = collection(db, "users");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getUsers();
    }, []);


    async function addUserStory(payload) {
        try {
            await addDoc(usersCollectionRef, payload)
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <DatabaseContext.Provider
            value={{users, addUserStory}}
        >
            {children}
        </DatabaseContext.Provider>
    )
}

export {DatabaseContext, DatabaseProvider};