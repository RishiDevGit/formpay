import React from "react";
import Carousel from "framer-motion-carousel";
import LeftIcon from "../assets/LeftIcon.svg";
import ActiveImage from "../assets/ActiveImage.svg";
import InActiveImage from "../assets/InActiveImage.svg";
import RightIcon from "../assets/RightArrow.svg";
import ImageCarousel from "../assets/Image.svg";
import StarIcon from "../assets/Star.svg";
import Frame from "../assets/Frame.svg";
import FeaturedIcon from "../assets/FeaturedIcon.svg";
const PaymentActivities=()=>{
        // set ref;
const carouselRef = React.useRef();
    return (
        <div className="bg-[#FFFFFF] px-4 sm:px-[2rem] md:px-[2rem] lg:px-[5rem] xl:px-[17rem] 2xl:px-[17rem] my-6 flex">
  {/* <div className='bg-[#F9F5FE] my-2 w-[17rem] border-2 border-solid border-[#F9F5FE] rounded-10 text-center text-[#7936f4] text-[14px] font-fontMedium'>
  Streamline all your payment activities
  </div> */}
  <div className='w-[4px] h-[350px] bg-[#F2F4F7]'>
          <div className='h-[100px] w-[4px] bg-[#7936F4]'></div>
  </div>

     <div className="relative h-auto sm:h-[450px] lg:h-[400px] bg-[#ffffff] mx-8">
    
    
   
    <Carousel ref={carouselRef} autoPlay={false} renderArrowLeft={()=><></>} renderArrowRight={()=><></>} renderDots={()=><></>}>
        {[1, 2, 3, 4].map((item, i) => (
          <div class={`flex grid grid-cols-12`}>
            <div className={`col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 flex flex-col`}>
                <div className="my-1"><img src={FeaturedIcon}/></div>
  <div className="text-[36px] font-fontBold text-[#1C2433] font-inter my-1">Collect payments in HubSpot without switching tabs</div>
         <div className="text-[16px] text-[#677289] my-1">Receive payments within HubSpot CRM so you don’t need to open another app in your browser to check your payments.</div>
            </div>

            <div className={`col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 flex justify-center`}>
                <img src={Frame}/>
                </div>
          </div>
        ))}
    </Carousel>

    <div className="flex mb-3 absolute bottom-0 left-8">
    <button onClick={() => carouselRef.current.handlePrev()} class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-2 rounded-full">
  <img src={LeftIcon}/>
</button>
<button onClick={() => carouselRef.current.handleNext()} class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-2 rounded-full">
<img src={RightIcon}/>
</button>
    </div>

       </div>
       
       <br/>
       <br/>
        </div>
    )
};
export default PaymentActivities;