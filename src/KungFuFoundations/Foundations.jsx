import Carousel from "react-multi-carousel";

export default function Foundations(){
     const responsive = {
              everything: {
                breakpoint: { max: 4000, min: 0 },
                items: 1
              }
        }
    
    const elementsArr = [{
        title:"Test 1",
        //video:placeholderVid,
        text:"Lorem Ipsum blah blah blah",
        link:"/applicationLink"
    },{
        title:"Test 2",
        //video:placeholderVid,
        text:"Lorem Ipsum blah blah blah",
        link:"/applicationLink"
    },{
        title:"Test 3",
        //video:placeholderVid,
        text:"Lorem Ipsum blah blah blah",
        link:"/applicationLink"
    },{
        title:"Test 4",
        //video:placeholderVid,
        text:"Lorem Ipsum blah blah blah",
        link:"/applicationLink"
    },{
        title:"Test 5",
        //video:placeholderVid,
        text:"Lorem Ipsum blah blah blah",
        link:"/applicationLink"
    },{
        title:"Test 6",
        //video:placeholderVid,
        text:"Lorem Ipsum blah blah blah",
        link:"/applicationLink"
    }];
    return (        
        <div>
            <h2>Foundation</h2>
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
                                <div key={"foundation-element-" + index}>
                                    <video className="foundation video" src={element.video} alt={"Foundation Video " + element.title}  muted loop height="300px"/>
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