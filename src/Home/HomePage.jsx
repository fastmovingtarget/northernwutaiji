import { useEffect, useState } from "react";
import { useNavigate} from "react-router";
import { useActivity } from "../ActivityContext/ActivityContext";
import LevelTracker from "./LevelTracker";
import "./Home.css"

const levelBreakpoints = [
    0, 50, 100, 175, 275, 410, 550, 675, 850, 1030, 1430,
    1940, 2555, 3290, 4160, 5170, 6337, 7673, 9191, 10902, 12819,
    14954, 17320, 19930, 22797, 25933, 29351, 33066, 37089, 41435, 46117,
    51147, 56540, 62309, 68468, 75030, 82010, 89421, 97276, 105591, 114378,
    123652, 133428, 143718, 154538, 165902, 177824, 190318, 203400, 217082, 231381,
    246310, 261883, 278117, 295025, 312623, 330924, 349944, 369698, 390200, 411466,
    433511, 456349, 479996, 504466, 529776, 555940, 582973, 610890, 639708, 669441,
    700104, 731714, 764285, 797833, 832373, 867922, 904494, 942105, 980771, 1020507,
    1061330, 1103254, 1146297, 1190472, 1235797, 1282287, 1329958, 1378826, 1428907, 1480216,
    1532771, 1586586, 1641678, 1698063, 1755757, 1814776, 1875137, 1936855, 200000
  ]

export default function HomePage(){
    const navigate = useNavigate();
    const {formProgress, setPracticed, practiceData, levelData} = useActivity();
    const [currentExperience, setCurrentExperience] = useState(levelData.Experience);
    const formProgressPercentage = Math.floor((formProgress.filter((e) => e).length / formProgress.length) * 100);

    useEffect(() => {
        console.log({lvlXP:levelData.Experience, currentExperience})
        if(levelData.Experience > currentExperience){
            setTimeout(() => setCurrentExperience(currentExperience + 1), 10)
        }
    }, [levelData.Experience, currentExperience])

    const level = levelBreakpoints.findIndex(bp => bp > currentExperience) - 1;

    const toNextLevel = levelBreakpoints[level + 1] - currentExperience;


    const homeCards = [
    {
        title:"Forms",
        link:"/Forms",
        text:["Practicing form increases your strength, flexibility and technique, as well as improving your relaxation.",
            "Once a form is fully learned, variations like mirror form, backwards form and low form can be practiced.",
            "As well as this, try performing the form at slower or faster speeds and concentrate on making your movements as smooth as possible."
        ],
        otherComponents:(<label> Form Learning Progress: {formProgressPercentage} % <br/> <progress value={formProgress.filter((e) => e).length} max={formProgress.length} /></label>)
    },{
        title:"Applications",
        link:"/Applications",
        text:["Performing applications greatly increases your strength and technique.",
            "Generally each application should be practiced until it can be performed on both sides of the defender, from both sides of an attacker."]
    },{
        title:"QiGong",
        link:"/QiGong",
        text:["QiGong increases flexibility and relaxation.", 
            "Each QiGong exercise should be performed 24-72 times (in multiples of 12, depending on the student's stamina and time constraints), with 1 or 3 Opens in between."]
    },{
        title:"Foundations",
        link:"/Foundations",
        text:["Improving your Kung-Fu Foundations increases your strength, endurance and technique.", 
            "Kung-fu foundations should be performed in a single set, practicing each area."]
    },{
        title:"Information",
        link:"/Information",
        text:["Learning about Taiji won't increase any stats or help any levels, but you might find something interesting to motivate you going forwards."]
    }]

    return (
        <div className="home-page-container">
            <h3>Home</h3>
            <LevelTracker />
            <label className="progress-bar">{"Level: " + (level + 1) + " "}<progress value={currentExperience - levelBreakpoints[level]} max={levelBreakpoints[level + 1] - levelBreakpoints[level]} /> {toNextLevel}XP to next level.</label>
            {homeCards.map((card, index) => (
                <div className="home-card hoverable" key={"home-card-" + index} >
                    <h4>{card.title}</h4>
                    {card.text.map(textItem => (
                        <p>{textItem}</p>
                    ))}
                    <div>
                        {card.otherComponents}
                    </div>
                    <div>
                        {   
                            card.title !== "Information" ?// so long as the card isn't Information
                                practiceData[card.title]?.practiceDate === null || new Date(practiceData[card.title]?.practiceDate).valueOf() < new Date().valueOf() - 86400000 ?//check to see if the user has practiced today
                                <button className={"practiced-button " + card.title} onClick={e => {e.preventDefault(); setPracticed(card.title)}}>I've practiced {card.title} today</button> ://if the've not practiced, show a button to say if they have
                                <p className={"practiced-text " + card.title}>You've done your {card.title} today, good work!</p>//otherwise, congratulate them on their good work
                            : null//but if it is Information, don't do anything
                        }
                    </div>
                    <div className="card-nav-link"  >
                        <p onClick={() => navigate(card.link)}>{card.title + " \u2192"} </p>
                    </div>
                </div>
            ))}
        </div>
    )
}