import React from "react";

import MainIcon from "../assets/MainIcon.svg";
import Content from "../assets/bg.svg"
import { formattedText } from "./helper";
const Features=()=>{
    let arr=[1,2,3,4,5];
    const ContentComponent=()=>{
        return <div className="px-[1rem]">
        <img src={Content}/>
    </div>
    }
    const ImageComponent=()=>{
        return <div className="flex flex-col max-w-[500px] lg:mt-[3rem] ">
        <div>
        <img src={MainIcon}/>
        </div>
        <div className="text-[#1c2433] font-semibold text-[24px] lg:text-[30px]">
        Nonprofits and Fundraisers
        </div>
        <div className="text-[#677289] font-normal text-[16px] lg:text-[18px]">
        FormPay helps nonprofits and fundraising organizations with its donation form feature. You can create donation forms in one click. Collect one-time or recurring donations. Create workflows to acquire, welcome, and retain your donors.
        </div>
        </div>
    };
    return (
<div className="my-8">
    
<div className="flex justify-center text-[#7936f4] font-fontBold leading-[24px] text-normalText">Features</div>
<div className="flex justify-center text-darkerGrey text-veryLargeText font-fontBold font-normal font-inter">Who can use FormPay?</div>

{formattedText("","text-[#677289] mb-[1rem]","Nonprofits, Subscription Business, Online Course-sellers, Event Business, Microbusinesses")}
<div className="flex flex-col ">
    {arr.map(item=> <div className={`flex ${item%2===0?"flex-col sm:flex-row md:flex-row lg:flex-row":"flex-col sm:flex-row-reverse md:flex-row-reverse md:flex-row-reverse"} justify-center mb-[1rem] md:mb-[2rem]`}><div className="px-[2rem]"><ImageComponent/></div><ContentComponent/></div>
   )}
   
 </div>
</div>
    )
};
export default Features;