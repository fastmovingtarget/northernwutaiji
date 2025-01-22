import React from "react";
import { useRef, useEffect } from "react";
import {Link, useSearchParams} from "react-router-dom"
import Carousel from "react-multi-carousel";
import "./Applications.css"
import formAppData from "../Videos/ApplicationVideos/VideoImports";

export default function Applications(){
    const carouselRef = useRef(null)
    const [searchParams] = useSearchParams();

    
    useEffect(() => {
        if (carouselRef && carouselRef.current) {
            const formTitle = searchParams.get("title");  
            const slideIndex = formAppData.findIndex((data) => data.title.includes(formTitle))
            carouselRef.current.goToSlide(slideIndex >= 0 ? slideIndex : 0); 
        }
    }, [])

    const responsive = {
          everything: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
          }
    }


    const elementsArr = formAppData;

    return (
        <div className="applications">
            <h2>Applications</h2>
            <Carousel 
                        ref={carouselRef}
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={false}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={"desktop"}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                {elementsArr.map((element, index) => {
                    return (
                        <div key={"application-element-" + index}>
                            {/*<video className="forms video" src={element.video} alt={"Applications Video " + element.title}  muted loop height="300px"/>*/}
                            <div>
                                <p>{element.title}</p>
                                <p>{element.text}</p>
                            </div>
                            <div>
                                <Link to={"/Forms?title="+ element.title}>{"Form: " + element.title}</Link>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}