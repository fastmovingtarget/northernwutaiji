//import formVid from "../Videos/Wu Style Taiji Quan Form.mp4"
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router"
import formMovements from "./FormMovements";
import {useActivity} from "../ActivityContext/ActivityContext";
import Carousel from "react-multi-carousel";
import { Link } from "react-router";
import "./Forms.css"

export default function Forms(){
    const [searchParams] = useSearchParams();
    const carouselRef = useRef(null);
    const videoRef = useRef(null);
    const {formProgress, setFormProgress, setLevelData} = useActivity();

    useEffect(() => {
        if(carouselRef){
            const formTitle = searchParams.get("title");  
            const slideIndex = formMovements.findIndex((data) => data.title.includes(formTitle))
            const defaultLocation = formProgress.findIndex((e) => !e) 
            carouselRef?.current?.goToSlide(slideIndex >= 0 ? 
                slideIndex : 
                defaultLocation >= 0 ? defaultLocation : 0)// if there's a link with a query string, go to that carousel item. If not, go to the first un-progressed form movement. If there's no un-progressed form movement, default to 0
        }
    }, [])

    const responsive = {
        everything: {//I don't want more than one item appearing on the carousel
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    }

    const toggleFormProgressItem = (index) => {
        let newFormArray = [...formProgress];
        newFormArray[index] = !newFormArray[index];

        setLevelData({
            Strength:newFormArray[index] ? 1 : -1,
            Flexibility:newFormArray[index] ? 1 : -1,
            Relaxation:newFormArray[index] ? 1 : -1,
            Technique:newFormArray[index] ? 1 : -1,
            Experience:newFormArray[index] ? 100 : -100
        })

        localStorage.setItem("taijiFormProgress", JSON.stringify(newFormArray))
        setFormProgress(newFormArray);
    }

    return (
        <div>
            <h1>Forms</h1>
            {/* <video className="forms video" src={formVid} alt="Forms Video"  muted loop height="300px" ref={videoRef} /> */}
            <Carousel swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={false}
                        autoPlay={false}
                        autoPlaySpeed={1000}q
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={"desktop"}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        ref={carouselRef}
                        beforeChange={(nextSlide, {currentSlide}) => {
                            if(nextSlide >= 0 && videoRef.current){
                                videoRef.current.currentTime = formMovements[nextSlide].timestamp
                            }
                        }}
                    >
                {
                    formMovements.map((element, index) => {
                        return (
                            <div key={"application-element-" + index } className="form-element hoverable">
                                <div className="form-text-container">
                                    <p>{element.title}</p>
                                    <p>{element.text}</p>
                                </div>
                                <div className="form-interactables-container">
                                    <button className={"form-done practiced-button toggle state-" + formProgress[index]} onClick={() => {toggleFormProgressItem(index)}}>{!formProgress[index] ? "I'm now comfortable with this movement" : "I want to practice this more"}</button>
                                    <Link to={"/Applications?title=" + element.title}>{"Application: " + element.title + " \u2192"}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}