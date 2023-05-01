import React from "react";

import MainIcon from "../assets/gateway.svg";
const Gateways = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="my-6 px-6">
      <div className="text-center text-[#7936f4] font-fontBold leading-[24px] text-normalText my-2">
        Gateways
      </div>
      <div className="text-center text-darkerGrey text-[24px] md:text-[28px] lg:text-veryLargeText my-2 md:font-fontBold leading-[32px] md:leading-[34px] lg:leading-[44px]">
        Connect and collect with your favorite gateways
      </div>
      <div className="text-center text-[#677289] mb-[1rem] text-[18px] lg:text-[20px] leading-[28px] my-2 lg:leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </div>
      <div
        class={`flex grid grid-cols-12 mt-4 sm:px-[1rem] md:px-[1rem] px-[7rem]`}
      >
        {arr.map((item) => (
          <div
            className={`col-span-12 md:col-span-4 lg:col-span-3 flex justify-center m-8 md:m-4`}
          >
            <div className="bg-[#F9FAFB] rounded-[16px] w-[305px] h-[214px] flex flex-col p-6">
              <div className="mx-auto my-0 mt-[-3rem]">
                {" "}
                <img src={MainIcon} />
              </div>
              <div className="text-[#1C2433] font-fontBold text-[18px] lg:text-[20px] leading-[28px] lg:leading-[30px] mx-auto my-2 ">
                Amazon Pay
              </div>
              <div className="mx-auto my-2 text-[#677289] text-[16px] lg:text-[18px] leading-[22px] lg:leading-[28px]  w-[200px] break-all">
                Lorem ipsum dolor sit amet, consecr adipiscing elit, sed do
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gateways;
