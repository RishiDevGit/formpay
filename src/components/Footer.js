import React from "react";
import Logo from "../assets/OtherLogo.svg";
import ArrowRight from "../assets/BlackArrow.svg";
import LogoOne from "../assets/image-15.svg";
import LogoTwo from "../assets/image-11.svg";
import LogoThree from "../assets/image-13.svg";
import LogoFour from "../assets/image-12.svg";
import LogoFive from "../assets/image-16.svg";
import LogoSix from "../assets/image-14.svg";
const Footer=()=>{
return (
    <div className="bg-darkBlack2 h-[1000px] md:h-[1050px] lg:h-[1000px] xl:h-[930px] 2xl:h-[820px] w-full">
<div className="relative">

<div className="flex flex-col lg:flex-row justify-between  mb-3 absolute p-16 top-[-6rem] bg-formPay300 left-[20%] w-[60%] h-auto">
   <div className="flex flex-col"> <div className="text-white text-[30px] font-fontBold">Why use a bunch of payment apps when one is enough.</div>
   <div className="text-[#F3EBFE] text-[20px] font-fontLight">Get FormPay to sort all your payment related business inside HubSpot.</div>
   </div>
   <div className="my-auto"><button class="bg-white w-auto flex justify-center hover:bg-gray-100 text-smallText text-darkBlack font-medium py-2 px-4">
    Try for free <span className="text-white ml-2"><img src={ArrowRight} /></span>
              </button></div>
    </div>
    <div className="flex flex-col justify-between  mb-3 absolute p-16 mt-64 lg:mt-52 left-[10%] lg:left-[20%] w-[90%] lg:w-[60%] h-auto">
    <div class="flex grid grid-cols-12 gap-10">
    <div className="col-span-12 lg:col-span-4">
    <div className="flex flex-col"><div><img src={Logo}/></div>
        <div className="text-normalWhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </div>  </div></div>
<div className="col-span-12 lg:col-span-8 flex justify-between">
        <div className="flex flex-col justify-between"><div className="text-normalWhite">Use cases</div>{[1,2,3,4,5].map(item=><div className="text-lightGrey2">Subscription Business</div>)}</div>
        <div className="flex flex-col justify-between"><div className="text-normalWhite">Use cases</div>{[1,2,3,4,5].map(item=><div className="text-lightGrey2">Subscription Business</div>)}</div>
        <div className="flex flex-col justify-between"><div className="text-normalWhite">Use cases</div>{[1,2,3,4,5].map(item=><div className="text-lightGrey2">Subscription Business</div>)}</div>

</div>
</div>
<div className="mx-auto mt-16 mb-6 text-lightBlack">Trusted By</div>
<div class="flex grid grid-cols-12 gap-10 my-6">
<div className="col-span-4 gap-3 flex justify-center">
<img src={LogoOne}/>
<img src={LogoTwo}/>
</div>

<div className="col-span-4 gap-3 flex justify-center">
<img src={LogoThree}/>
<img src={LogoFour}/>
<img src={LogoFive}/>
</div>
<div className="col-span-4 flex justify-center">
<img src={LogoSix}/>
</div>
</div>
<div class="flex grid grid-cols-12 bg-lightWhite h-[1px] my-6">

</div>

<div class="flex grid grid-cols-12 mt-6">
    <div className="col-span-12 lg:col-span-6 font-fontMedium flex justify-start text-lightGrey3">
    Privacy Policy | Security
    </div>
    <div className="col-span-12 lg:col-span-6  font-fontLight flex justify-start lg:justify-end text-normalWhite">
    Copyright ©MakeWebBetter. All Rights Reserved
    </div>
</div>
</div>
    {/* <div className="pt-52 flex justify-center mx-auto">
    <div class="flex grid grid-cols-12">
    <div className="col-start-3 col-span-2">
        <div className="flex flex-col"><div><img src={Logo}/></div>
        <div className="text-normalWhite">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </div>  </div></div>
        <div className="col-span-8"></div>
        </div>
    </div> */}
</div>
    </div>
)
};
export default Footer;