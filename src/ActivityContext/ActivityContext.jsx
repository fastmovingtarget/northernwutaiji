import React from 'react';
import { useContext, createContext, useState} from "react";

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {

    const [currentActivity, setCurrentActivity] = useState(null);
    const [formProgress, setFormProgress] = useState(JSON.parse(localStorage.getItem("taijiFormProgress")) ?? new Array(30).fill(false));
    const [levelData, setLevelState] = useState(JSON.parse(localStorage.getItem("taijiLevel")) ?? 
        {
            Strength:10,
            Flexibility:10,
            Endurance:10,
            Technique:10,
            Relaxation:10
        }
    )

    const setLevelData = (inputStats) => {
        const newLevelData = {...levelData};
        Object.keys(inputStats).forEach((key, index) => {
            newLevelData[key] += inputStats[key];
        })
        setLevelState(newLevelData)
        localStorage.setItem("taijiLevel", JSON.stringify(newLevelData))

    }

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