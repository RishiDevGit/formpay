import React from "react";

import MainIcon from "../assets/Icon.svg";
import { formattedText } from "./helper";
const Others=()=>{
    const arr=[1,2,3,4,5,6];
    const ImageComponent=()=>{
        return (
            <div className="flex flex-col justify-between  h-[200px] lg:h-[220px] xl:h-[190px] 2xl:h-[190px] w-[382px]">
<div className="mx-auto my-0"> <img src={MainIcon}/></div>
<div className="text-[#FFFFFF] font-fontMedium text-[20px] mx-auto my-0">
    <div className="text-center">
        Payment with HubSpot forms,
links and quotes
        </div></div>
        <div className="text-[#ECEDEE] font-normal text-[18px] mx-auto my-0">
        <div className="text-center">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt   </div>  </div>
        
</div>
        )
    }
    return (
<div className="bg-gradient-to-r px-4 sm:px-[6rem] py-[4rem] from-[#4D2A8D] to-[#150C27]">
{formattedText("","font-fontBold mb-[1rem] text-[36px] text-[#FFFFFF] font-inter leading-[40px]","Why Formpay Over Others?")}
{/* <div className="text-center ">Why Formpay Over Others?</div> */}
{formattedText("","font-fontLight text-[20px] text-[#FFFFFF] font-inter leading-[30px] mb-[1rem]","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.")}

<div class={`flex grid grid-cols-12`}>
    {arr.map(item=>
<div className={`col-span-12 my-8 mx-4 sm:col-span-12 md:col-span-6 lg:col-span-4 flex justify-center`}><ImageComponent/></div>)}
</div>
</div>
    )
};
export default Others;