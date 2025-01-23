import { useNavigate} from "react-router";
import { useState } from "react";
import { useActivity } from "../ActivityContext/ActivityContext";
import LevelTracker from "./LevelTracker";

export default function HomePage(){
    const navigate = useNavigate();
    const {formProgress, setPracticed, practiceData} = useActivity();
    const formProgressPercentage = Math.floor((formProgress.filter((e) => e).length / formProgress.length) * 100);

    console.log({practiceData})



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
        <div>
            <h3>Home</h3>
            <LevelTracker />
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
                                <button onClick={e => {e.preventDefault(); setPracticed(card.title)}}>I've practiced {card.title} today</button> ://if the've not practiced, show a button to say if they have
                                <p>You've done your {card.title} today, good work!</p>//otherwise, congratulate them on their good work
                            : null//but if it is Information, don't do anything
                        }
                    </div>
                    <button onClick={() => navigate(card.link)} >Take me to the {card.title} page</button>
                </div>
            ))}
        </div>
    )
}