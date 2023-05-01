import React from "react";
import Logo from "../assets/OtherLogo.svg";
import ArrowRight from "../assets/BlackArrow.svg";
import LogoOne from "../assets/image-15.svg";
import LogoTwo from "../assets/image-11.svg";
import LogoThree from "../assets/image-13.svg";
import LogoFour from "../assets/image-12.svg";
import LogoFive from "../assets/image-16.svg";
import LogoSix from "../assets/image-14.svg";
const Footer = () => {
  return (
    <div className="bg-darkBlack2 h-[1300px] sm:h-[1200px] md:h-[1050px] lg:h-[850px] xl:h-[830px] 2xl:h-[820px] w-full">
      <div className="relative">
        <div className="flex flex-col  lg:flex-row border rounded-[16px] shadow-[0_20px_24px_-4px_rgba(16, 24, 40, 0.1),0_8px_8px_-4px_rgba(16, 24, 40, 0.4)] justify-between  mb-3 absolute p-16 top-[-6rem] bg-formPay300 left-[5%] w-[90%] h-auto">
          <div className="flex flex-col">
            {" "}
            <div className="text-white text-[24px] xl:text-[30px] leading-[32px] xl:leading-[38px]  font-fontBold my-2">
              Why use a bunch of payment apps when one is enough.
            </div>
            <div className="text-[#F3EBFE] text-[18px] xl:text-[20px] font-fontLight my-2">
              Get FormPay to sort all your payment related business inside
              HubSpot.
            </div>
          </div>
          <div className="my-2">
            <button class="bg-white w-auto flex justify-center hover:bg-gray-100 text-smallText text-darkBlack font-medium py-2 px-4">
              Try for free{" "}
              <span className="text-white ml-2">
                <img src={ArrowRight} />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start sm:justify-between  mb-3 absolute py-16 px-0 sm:px-16 sm:py-16 mt-64 lg:mt-52 left-[5%] w-[90%] h-auto">
          <div class="flex grid grid-cols-10 sm:grid-cols-12 gap-10">
            <div className="col-span-10 sm:col-span-12  lg:col-span-4">
              <div className="flex flex-col w-[220px] sm:w-auto">
                <div>
                  <img src={Logo} />
                </div>
                <div className="text-normalWhite ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </div>{" "}
              </div>
            </div>
            <div className="col-span-10 sm:col-span-12 lg:col-span-8 flex justify-between">
              <div className="flex flex-col  justify-between">
                <div className="text-normalWhite">Use cases</div>
                {[1, 2, 3, 4, 5].map((item) => (
                  <div className="text-lightGrey2">Subscription Business</div>
                ))}
              </div>
              <div className="flex flex-col  justify-between">
                <div className="text-normalWhite">Use cases</div>
                {[1, 2, 3, 4, 5].map((item) => (
                  <div className="text-lightGrey2">Subscription Business</div>
                ))}
              </div>
              <div className="flex flex-col  justify-between">
                <div className="text-normalWhite">Use cases</div>
                {[1, 2, 3, 4, 5].map((item) => (
                  <div className="text-lightGrey2">Subscription Business</div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 mb-6 text-lightBlack">Trusted By</div>
          <div class="flex grid grid-cols-10 sm:grid-cols-12 gap-10 my-6">
            <div className="col-span-4 gap-3 flex justify-center">
              <img src={LogoOne} />
              <img src={LogoTwo} />
            </div>

            <div className="col-span-4 gap-3 flex justify-center">
              <img src={LogoThree} />
              <img src={LogoFour} />
              <img src={LogoFive} />
            </div>
            <div className="col-span-10 sm:col-span-4 flex justify-center">
              <img src={LogoSix} />
            </div>
          </div>
          <div class="flex grid grid-cols-12 bg-lightWhite h-[1px] my-6"></div>

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
  );
};
export default Footer;
