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
        var dummy = {
            age: "20",
            email: "",
            employment_status: "unemployed",
            first_name: "Pedro",
            last_name: "Ko",
            gender: "Male",
            happiness: false,
            loves: ["Football", "Sketching", "Italian Food"],
            skills: ["Drawing", "Football"]
        }
        console.log("Adding User Story: ", dummy);
        await addDoc(usersCollectionRef, dummy);
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