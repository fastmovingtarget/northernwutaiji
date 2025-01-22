import { useNavigate } from "react-router";
import { useActivity } from "../ActivityContext/ActivityContext";
import LevelTracker from "./LevelTracker";

export default function HomePage(){
    const navigate = useNavigate();
    const {formProgress} = useActivity();
    const formProgressPercentage = Math.floor((formProgress.filter((e) => e).length / formProgress.length) * 100)

    const homeCards = [
    {
        title:"Forms",
        link:"/Forms",
        text:"Practicing form increases your strength, flexibility and technique, as well as improving your relaxation",
        otherComponents:(<label> Form Learning Progress: {formProgressPercentage} % <br/> <progress value={formProgress.filter((e) => e).length} max={formProgress.length} /></label>)
    },{
        title:"Applications",
        link:"/Applications",
        text:"Performing applications greatly increases your strength and technique"
    },{
        title:"QiGong",
        link:"/QiGong",
        text:"QiGong increases flexibility and relaxation"
    },{
        title:"Foundations",
        link:"/Foundations",
        text:"Improving your Kung-Fu Foundations increases youe strength, endurance and technique"
    },{
        title:"Information",
        link:"/Information",
        text:"Learning about Taiji won't increase any stats or help any levels, but you might find something interesting to motivate you going forwards."
    }]

    return (
        <div>
            <h3>Home</h3>
            <LevelTracker />
            {homeCards.map((card, index) => (
                <div className="home-card hoverable" key={"home-card-" + index} onClick={() => navigate(card.link)}>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>    
                    {card.otherComponents}
                </div>
            ))}
        </div>
    )
}