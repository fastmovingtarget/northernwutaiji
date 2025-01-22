import React from 'react';
import { useContext, createContext, useState} from "react";

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {

    const [currentActivity, setCurrentActivity] = useState(null);
    const [formProgress, setFormProgress] = useState(new Array(30).fill(false));
    const [levelData, setLevelData] = useState(null)



    return (
        <ActivityContext.Provider value={{currentActivity, setCurrentActivity, formProgress, setFormProgress, levelData, setLevelData}}>
            {children}
        </ActivityContext.Provider>
    )
}


export default ActivityProvider;

export const useActivity = () => {
    return useContext(ActivityContext);
}