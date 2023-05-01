import React from "react";
import FormPaySvg from "../assets/Logo.svg";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Example } from "./Example";
const MobileNavList = (props) => {
  const { open, setOpen, options, currentActiveItem, setCurrentActiveItem } = {
    ...props,
  };

  const accordionIds = [
    { title: "Resources", id: "resources", content: <ContentPlaceholder /> },
    { title: "Company", id: "company", content: <ContentPlaceholder /> },
  ];
  return (
    <div
      className={
        open
          ? "bg-white opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 transition transform origin-top-right lg:hidden"
          : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
      }
    >
      <div className=" bg-white divide-y-2 divide-gray-50">
        <div className="">
          <div className="flex bg-purpleLight2 items-center justify-between p-6">
            <div>
              <img src={FormPaySvg} />
            </div>
            <div className="-mr-2 flex">
              <div className="mr-4 hidden md:flex">
                <button class="hover:bg-gray-100 text-formPay100 text-smallText font-medium py-2 px-4 mr-6">
                  Log in
                </button>
                <button class="mr-6 bg-formPay100  border border-solid border-formPay100 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-[8px] text-smallText text-white font-medium py-2 px-4">
                  Sign up
                </button>
              </div>
              <button
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className=" bg-white p-6">
            <nav className="grid gap-y-8">
              {options.map((item) =>
                !["resources", "company"].includes(item?.id) ? (
                  <a
                    href="#"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <span className="ml-3 text-normalGrey font-fontMedium">
                      {item?.title}
                    </span>
                  </a>
                ) : (
                  <></>
                )
              )}

              <Example accordionIds={accordionIds} />
            </nav>
            <div className="md:hidden">
              <button class="w-full my-2 hover:bg-gray-100 text-formPay100 text-smallText font-medium py-2 px-4 mr-6">
                Log in
              </button>
              <button class="w-full my-2mr-6 bg-formPay100 rounded-2 hover:bg-gray-100 text-smallText text-white font-medium py-2 px-4">
                Sign up
              </button>
            </div>
          </div>
        </div>
        {/* <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Enterprise
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Help Center
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Guides
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Security
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Events
              </a>
            </div>
           
          </div> */}
      </div>
    </div>
  );
};
export default MobileNavList;
