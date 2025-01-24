import React from 'react';
import { useContext, createContext, useState} from "react";

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {

    
    //localStorage.setItem("taijiPractice", null)
    //localStorage.setItem("taijiLevel", null)
    //localStorage.setItem("taijiFormProgress", null)

    const [currentActivity, setCurrentActivity] = useState(null);
    const [formProgress, setFormProgress] = useState(JSON.parse(localStorage.getItem("taijiFormProgress")) ?? new Array(30).fill(false));
    const [levelData, setLevelState] = useState(JSON.parse(localStorage.getItem("taijiLevel")) ?? 
        {
            Strength:10,
            Flexibility:10,
            Endurance:10,
            Technique:10,
            Relaxation:10,
            Experience:0
        }
    )

    const [practiceData, setPracticeData] = useState(JSON.parse(localStorage.getItem("taijiPractice")) ?? 
        {
            Forms:{
                practiceDate:null
            },
            Applications:{
                practiceDate:null
            },
            Foundations:{
                practiceDate:null
            },
            QiGong:{
                practiceDate:null
            },
        }
    );

    const setPracticed = itemKey => {
        let newPracticeData = {...practiceData};
        newPracticeData[itemKey].practiceDate = new Date();
        setPracticeData(newPracticeData);
        localStorage.setItem("taijiPractice", JSON.stringify(newPracticeData));

        switch (itemKey){
            case "Forms":
                setLevelData({
                    Strength:1,
                    Flexibility:1,
                    Relaxation:1,
                    Technique:1,
                    Experience:100
                });
                break;
            case "Applications":
                setLevelData({
                    Strength:3,
                    Technique:3,
                    Experience:100
                });
                break;
            case "QiGong":
                setLevelData({
                    Relaxation:2,
                    Flexibility:2,
                    Experience:100
                });
                break;
            case "Foundations":
                setLevelData({
                    Strength:2,
                    Endurance:3,
                    Technique:1,
                    Experience:100
                })
                break;
            default:
                break;

        }
    }

    const setLevelData = (inputStats) => {
        const newLevelData = {...levelData};
        Object.keys(inputStats).forEach((key, index) => {
            newLevelData[key] += inputStats[key];
        })
        setLevelState(newLevelData)
        localStorage.setItem("taijiLevel", JSON.stringify(newLevelData))
    }

    return (
        <ActivityContext.Provider value={{currentActivity, setCurrentActivity, formProgress, setFormProgress, levelData, setLevelData, setPracticed, practiceData}}>
            {children}
        </ActivityContext.Provider>
    )
}


export default ActivityProvider;

export const useActivity = () => {
    return useContext(ActivityContext);
}