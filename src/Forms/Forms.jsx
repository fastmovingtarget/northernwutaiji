import formVid from "../Videos/Wu Style Taiji Quan Form.mp4"
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router"
import formMovements from "./FormMovements";
import {useActivity} from "../ActivityContext/ActivityContext";
import Carousel from "react-multi-carousel";
import { Link } from "react-router";

export default function Forms(){
    const [searchParams] = useSearchParams();
    const carouselRef = useRef(null);
    const videoRef = useRef(null);
    const {formProgress, setFormProgress} = useActivity();

    console.log(formProgress)

    useEffect(() => {
        if(carouselRef){
            const formTitle = searchParams.get("title");  
            const slideIndex = formMovements.findIndex((data) => data.title.includes(formTitle))
            carouselRef?.current?.goToSlide(slideIndex >= 0 ? slideIndex : formProgress.findIndex((e) => !e))// if there's a link with a query string, go to that carousel item. If not, go to the first un-progressed form movement
        }
    }, [])

    const responsive = {
        everything: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    }

    const toggleFormProgressItem = (index) => {
        console.log(index)
        let newFormArray = [...formProgress];
        newFormArray[index] = !newFormArray[index];
        setFormProgress(newFormArray);
    }

    return (
        <div>
            <h1>Forms</h1>
            <video className="forms video" src={formVid} alt="Forms Video"  muted loop height="300px" ref={videoRef}/>
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
                        afterChange={(prevSlide, {currentSlide}) => {
                            if(currentSlide >= 0){
                                videoRef.current.currentTime = formMovements[currentSlide].timestamp
                            }
                        }}
                    >
                {
                    formMovements.map((element, index) => {
                        return (
                            <div key={"application-element-" + index}>
                                <div>
                                    <p>{element.title}</p>
                                    <p>{element.text}</p>
                                    <button onClick={() => {toggleFormProgressItem(index)}}>{!formProgress[index] ? "I'm now comfortable with this movement" : "I want to practice this more"}</button>
                                </div>
                                <div>
                                    <Link to={"/Applications?title=" + element.title}>{"Application: " + element.title}</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}