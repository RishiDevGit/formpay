import React from "react";
import MacbookIcon from "../assets/MacbookIcon.svg";
import GreenTick from "../assets/GreenTick.svg";

import ArrowRight from "../assets/WhiteArrow.svg";
const AppFeatures = () => {
  return (
    <div className="my-8 w-[80%] mx-auto flex flex-col">
      <div className="flex justify-start text-darkerGrey font-fontBold text-[28px] md:text-[36px] leading-[34px] md:leading-[44px]">
        Features of Formpay
      </div>
      <div className="flex justify-start text-lightBlack font-fontLight text-[18px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
      </div>
      <div className="my-4">
        <div class={`flex grid grid-cols-12`}>
          <div
            className={`col-span-12 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4 flex flex-col justify-between`}
          >
            <div className="text-successDark flex justify-start text-smallText bg-successLight w-32">
              <div className="mx-auto">Free 7-day Trial</div>
            </div>
            <div>
              {new Array(13).fill(1).map((item) => (
                <div className="flex justify-start my-2 ">
                  <img src={GreenTick} />
                  <div className="ml-2">Form Submission Tracking</div>
                </div>
              ))}
            </div>
            <div className="flex sm:justify-center md:justify-center lg:justify-start">
              <button class="bg-formPay100 border border-solid border-formPay100 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-[8px] flex justify-center hover:bg-gray-100 text-smallText text-white font-medium my-2 w-full lg:my-0 lg:w-64 py-2 px-4">
                Try Now{" "}
                <span className="text-white ml-2">
                  <img src={ArrowRight} />
                </span>
              </button>
            </div>
          </div>
          <div
            className={`col-span-12 md:col-span-8 lg:col-span-8 mt-6 lg:mt-0`}
          >
            <img src={MacbookIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppFeatures;
