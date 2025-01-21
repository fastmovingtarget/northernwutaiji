import placeholderVid from "../Videos/MisacHover.mp4"
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router"
import formMovements from "./FormMovements";
import Carousel from "react-multi-carousel";
import { Link } from "react-router";

export default function Forms(){
    const [searchParams] = useSearchParams();
    const carouselRef = useRef(null)

    
    useEffect(() => {
        if(carouselRef){
            const formTitle = searchParams.get("title");  
            const slideIndex = formMovements.findIndex((data) => data.title.includes(formTitle))
            console.log(slideIndex)
            carouselRef?.current?.goToSlide(slideIndex >= 0 ? slideIndex : 0)
        }
    }, [])

    const responsive = {
        everything: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    }

    return (
        <div>
            <h1>Forms</h1>
            <video className="forms video" src={placeholderVid} alt="Forms Video"  muted loop height="300px"/>
            <Carousel swipeable={false}
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
                        ref={carouselRef}
                    >
                {
                    formMovements.map((element, index) => {
                        return (
                            <div key={"application-element-" + index}>
                                <video className="forms video" src={element.video} alt={"Applications Video " + element.title}  muted loop height="300px"/>
                                <div>
                                    <p>{element.title}</p>
                                    <p>{element.text}</p>
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