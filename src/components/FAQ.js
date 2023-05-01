import React from "react";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Example } from "./Example";
import FAQPlaceholder from "./FAQPlaceholder";
import AccordionIcon from "../assets/Accordion.svg";
import AccordionIconHide from "../assets/AccordionHide.svg";
import ArrowRight from "../assets/BlackArrow.svg";
const FAQ = () => {
  const accordionIds = [
    {
      title: (
        <div className="text-darkerGrey text-largeText font-fontMedium">
          Can I Connect Multiple HubSpot accounts with Formpay?
        </div>
      ),
      id: "resources",
      content: <FAQPlaceholder />,
    },
    {
      title: (
        <div className="text-darkerGrey text-largeText font-fontMedium">
          Can I Connect Multiple HubSpot accounts with Formpay?
        </div>
      ),
      id: "company",
      content: <FAQPlaceholder />,
    },
  ];
  return (
    <div className="my-32 w-[80%] mx-auto flex flex-col lg:text-center">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex justify-start md:justify-center lg:justify-start   text-darkerGrey font-fontBold text-[24px] lg:[36px] my-2">
          Frequently Asked Questions
        </div>
        <button className="border border-solid w-32 my-2 bg-purpleLight2 border-purpleLight2 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-[8px] text-formPay100">
          View all Articles
        </button>
      </div>
      <div className="flex justify-start text-lightBlack font-fontLight text-[18px] my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </div>
      <div className=" bg-white py-6">
        <div className="grid gap-y-8">
          <Example
            accordionIds={accordionIds}
            isDivider={true}
            dynamicIcons={{ open: AccordionIcon, close: AccordionIconHide }}
          />
        </div>
      </div>
      <div class={`flex grid grid-cols-12`}>
        <div className="col-span-12 lg:col-span-6 sm:mt-6 lg:mt-0 bg-normalBlack flex flex-col h-56 justify-between p-6 my-2 lg:my-0 lg:mr-10">
          <div className="text-darkerGrey text-[20px] font-fontMedium flex justify-start">
            Didn’t find your answer?
          </div>
          <div className="text-lightBlack text-largeText font-fontLight flex justify-start">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </div>
          <div className="flex justify-start">
            <button class="bg-white w-auto flex justify-center hover:bg-gray-100 text-smallText text-darkBlack font-medium py-2 px-4">
              Explore our Knowledge Base{" "}
              <span className="text-white ml-2">
                <img src={ArrowRight} />
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 sm:mt-6 lg:mt-0 bg-normalBlack flex flex-col h-56 justify-between my-2 lg:my-0 p-6">
          <div className="text-darkerGrey text-[20px] font-fontMedium flex justify-start">
            Have a more complex query?
          </div>
          <div className="text-lightBlack text-largeText font-fontLight flex justify-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
          <div className="flex justify-start">
            <button class="bg-white w-auto flex justify-center hover:bg-gray-100 text-smallText text-darkBlack font-medium py-2 px-4">
              Ask our experts{" "}
              <span className="text-white ml-2">
                <img src={ArrowRight} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
