import { useNavigate } from "react-router";

export default function HomePage(){
    const navigate = useNavigate();

    const homeCards = [{
        title:"Forms Card",
        link:"/Forms",
        text:"Go do some form!"
    },{
        title:"Applications Card",
        link:"/Applications",
        text:"Go beat up some consenting adults!"
    },{
        title:"QiGong Card",
        link:"/QiGong",
        text:"Go meditate...at some consenting adults!"
    },{
        title:"Foundations Card",
        link:"/Foundations",
        text:"Go exercise with some consenting adults!"
    },{
        title:"Information Card",
        link:"/Information",
        text:"Go learn about some consenting adults!"
    }]

    return (
        <div>
            <h3>Home</h3>
            {homeCards.map((card, index) => (
                <div className="home-card hoverable" key={"home-card-" + index}>
                    <h4>{card.title}</h4>
                    <p>{card.text}</p>    
                </div>
            ))}
        </div>
    )
}