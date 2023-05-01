import React from "react";

import MainIcon from "../assets/MainIcon.svg";
import Content from "../assets/bg.svg";
import { formattedText } from "./helper";
const Features = () => {
  let arr = [1, 2, 3, 4, 5];
  const ContentComponent = () => {
    return (
      <div className="px-4 my-4 md:my-0">
        <img src={Content} />
      </div>
    );
  };
  const ImageComponent = () => {
    return (
      <div className="flex flex-col max-w-[500px] lg:mt-12 ">
        <div className="my-2">
          <img src={MainIcon} />
        </div>
        <div className="text-[#1c2433] font-semibold text-[24px] leading-[32px] lg:text-[30px] lg:leading-[38px] my-2">
          Nonprofits and Fundraisers
        </div>
        <div className="text-[#677289] font-normal text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] my-2">
          FormPay helps nonprofits and fundraising organizations with its
          donation form feature. You can create donation forms in one click.
          Collect one-time or recurring donations. Create workflows to acquire,
          welcome, and retain your donors.
        </div>
      </div>
    );
  };
  return (
    <div className="my-8">
      <div className="flex justify-center text-[#7936f4] font-fontBold leading-[24px] text-normalText my-2">
        Features
      </div>
      <div className="flex justify-center text-darkerGrey text-[24px] md:text-[28px] lg:text-veryLargeText leading-[32px] md:leading-[34px] lg:leading-[44px] font-fontBold font-normal font-inter my-2">
        Who can use FormPay?
      </div>

      {formattedText(
        "",
        "text-[#677289] my-2 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[30px]",
        "Nonprofits, Subscription Business, Online Course-sellers, Event Business, Microbusinesses"
      )}
      <div className="flex flex-col my-4">
        {arr.map((item) => (
          <div
            className={`flex ${
              item % 2 === 0
                ? "flex-col sm:flex-row md:flex-row lg:flex-row"
                : "flex-col sm:flex-row-reverse md:flex-row-reverse md:flex-row-reverse"
            } justify-center my-8`}
          >
            <div className="px-[2rem]">
              <ImageComponent />
            </div>
            <ContentComponent />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Features;
