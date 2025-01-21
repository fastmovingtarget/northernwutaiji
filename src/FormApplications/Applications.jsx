import React from "react";
import Carousel from "react-multi-carousel";
import "./Applications.css"
import formAppData from "../Videos/ApplicationVideos/VideoImports";

export default function Applications(){
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
            <Carousel swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
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
                            <video className="forms video" src={element.video} alt={"Applications Video " + element.title}  muted loop height="300px"/>
                            <div>
                                <p>{element.title}</p>
                                <p>{element.text}</p>
                            </div>
                            <div>
                                <p>{element.link}</p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}