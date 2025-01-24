import { useState } from "react";
import "./TaijiInfo.css";

/*To Action booking form, look in to using emailjs - free up to 200 per month, and claims not to share user data. Who knows if that's true.*/
export default function Information(){

    const [formState, setFormState] = useState({})

    const inputHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div>
            <h1>Information</h1>
            <div>
                <p>Explanations</p>
            </div>
            <h3>Book a session:</h3>
            <form className="booking-form column" onSubmit={submitHandler} >
                <label>First Name: 
                    <input type="text" name="FirstName" onInput={inputHandler} placeholder="...John"/>
                </label>
                <label>Last Name: 
                    <input type="text" name="LastName" onInput={inputHandler} placeholder="...Doe"/>
                </label>
                <label>Contact Number: 
                    <input type="text" name="Number" onInput={inputHandler} placeholder="...0123456789"/>
                </label>
                <label>Preferred Time: 
                    <input type="datetime-local" name="Time" onInput={inputHandler}/>
                </label>
                <label className="information-label">Extra Information: 
                    <input type="textbox" name="Information" onInput={inputHandler} placeholder="...Anything else you'd like me to know"/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}