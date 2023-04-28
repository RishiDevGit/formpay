import React from "react";
import Carousel from "framer-motion-carousel";
import LeftIcon from "../assets/LeftIcon.svg";
import ActiveImage from "../assets/ActiveImage.svg";
import InActiveImage from "../assets/InActiveImage.svg";
import RightIcon from "../assets/RightArrow.svg";
import ImageCarousel from "../assets/Image.svg";
import StarIcon from "../assets/Star.svg";
const Reviews=()=>{
        // set ref;
const carouselRef = React.useRef();
    return (
        <div className="bg-[#FFFFFF]">
        <div className="text-center text-[#7936f4] font-fontBold leading-[24px] text-normalText">Reviews</div>
        <div className="text-center text-darkerGrey text-veryLargeText font-fontBold font-normal font-inter my-2">What others say about Formpay?</div>
       <div className="mx-[2rem] lg:mx-[8rem] relative border-2 border-solid border-[#1C2736] rounded-[2rem] h-auto bg-[#1C2736] px-[4rem] py-[5rem]">
       
    <div style={{display: 'flex',  marginBottom: '10px',position:"absolute",bottom:"0",right:"4rem"}}>
    <button onClick={() => carouselRef.current.handlePrev()} class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-2 rounded-full">
  <img src={LeftIcon}/>
</button>
<button onClick={() => carouselRef.current.handleNext()} class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-2 rounded-full">
<img src={RightIcon}/>
</button>
    </div>
    <div style={{display: 'flex', gap: '10px', marginBottom: '10px',position:"absolute",bottom:"1rem",left:"4rem"}}>
  <img src={ActiveImage} onClick={() => carouselRef.current.setIndex(0)}/>
  <img src={InActiveImage} onClick={() => carouselRef.current.setIndex(1)}/>

  <img src={InActiveImage} onClick={() => carouselRef.current.setIndex(2)}/>
  </div>
    <Carousel ref={carouselRef} autoPlay={false} renderArrowLeft={()=><></>} renderArrowRight={()=><></>} renderDots={()=><></>}>
        {[1, 2, 3, 4].map((item, i) => (
            <div className="flex flex-col lg:flex-row justify-start">
            <img
                draggable="true"
                src={ImageCarousel}
                key={i}
                width="300px"
                height="300px"
                alt=""
            />
            <div className="lg:ml-[60px] flex flex-col">
                <div className="flex my-1">{[1,2,3,4,5].map(item=><img className="mx-1" src={StarIcon}/>)}</div>
                <div className="text-[22px] font-fontMedium text-[#ffffff] text-inter mx-1 my-1">Great product, Great customer Service, Couldn't ask for anything better</div>
         <div className="text-[16px] font-fontLight text-inter text-[#ecedee] mx-1 my-1">I have been searching for a while for a product that does every thing this does, but not only that teh customer
service team is amazing and they listen o our needs as their clients and are very helpful</div>
<div className="text-[16px] text-[#ecedee] font-fontBold mx-1 my-2">
What problem are you trying to solve?<br/>
<span className="font-fontLight">Being able to have a direct payment gateway on a landing page is amazing, without having the prospect navigating away from the page.</span>
</div>
<div className="mx-1 my-2 font-fontMedium text-[18px] text-[#ffffff]">
— Brendan T<br/><span className="text-[16px] font-fontLight">Photography</span>
</div>
            </div>
            </div>
        ))}
    </Carousel>



       </div>
       
       <br/>
       <br/>
        </div>
    )
};
export default Reviews;