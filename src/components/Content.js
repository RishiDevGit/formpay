import React from "react";
import TableSvg from "../assets/NewOne.svg";
import PhoneIcon from "../assets/PhoneIcon.svg"
const Content=()=>{
    return (
<div className="mt-[5rem] font-bolder flex flex-col">
    <div className="my-0 mx-auto">
    <p className="font-fontMoreBold w-[390px] sm:w-[600px] md:w-[700px] lg:w-[1024px] text-center h-[400px] sm:h-[220px] md:h-[200px] lg:h-[128px] text-blueDark tracking-[-0.03em] text-[52px] leading-[64px]">All in one <span style={{
      background: "linear-gradient(to right,#ff3364,#fe6939, #a91ffe)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent"
}}>Payments Solution </span>for <span style={{
    background: "linear-gradient(to right,#ff3364,#fe6939, #a91ffe)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
}}>HubSpot.</span> <span>Any gateway, Worldwide.</span></p>




</div>
<div className="my-2 mx-auto">
    <p className="w-[390px] h-[52px] text-center leading-[26px] font-normal font-inter font-fontLight text-largeText text-darkGrey">Connect your favorite gateway with HubSpot using FormPay. Collect, track, manage and <span>automate your one-time or recurring payment data within HubSpot.</span></p>
</div>

<div className="my-2 mx-auto mt-[70px] flex">
<button class="px-[20px] mr-4 text-[#FFFFFF] py-[12px] bg-[#7936F4] rounded-lg shadow-[0_1px_2px_rgba(16, 24, 40, 0.05)] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Try for Free
</button>

<button class="px-[20px] flex items-center  py-[12px] bg-white border-[#D0D5DD] border-[1px] border-solid rounded-lg shadow-[0_1px_2px_rgba(16, 24, 40, 0.05)] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
<img src={PhoneIcon} className="mr-[10px]"/>
  <span className="text-[#3B424F]">Schedule a Call</span>
</button>
</div>
<div className="my-0 mx-auto mt-[50px] flex" style={{
    backgroundImage: `url("../assets/formpayPattern.svg")`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition: 'center',
    width:"100%",
    justifyContent:"center"
}}>
    <img src={TableSvg}/>
    </div>
    <br/><br/>
</div>
    )
};
export default Content;