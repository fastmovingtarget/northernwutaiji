import placeholderVid from "../Videos/MisacHover.mp4";

export default function Foundations(){
    return (        
    <div>
        <h1>Foundation</h1>
        <video className="foundations video" src={placeholderVid} alt="Foundations Video"  muted loop height="300px"/>
        <div>
            <p>Explanations</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
    )
}