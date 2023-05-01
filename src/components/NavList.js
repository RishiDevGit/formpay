import React, { useState } from "react";
import List from "../assets/list.svg";
import NavImg from "../assets/NavImg.svg";
import ArrowRight from "../assets/arrow-right.svg";
const NavList = (props) => {
  const { currentActiveItem, setCurrentActiveItem, options } = { ...props };
  const ResourceContent = (id) => {
    return (
      <div className="relative">
        {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
        <button
          type="button"
          className={`
               group rounded-md  inline-flex items-center  pb-8'
              `}
          onClick={() =>
            setCurrentActiveItem({
              itemId: "resources",
              isOpen: !currentActiveItem?.isOpen,
            })
          }
        >
          <span
            className={`${
              currentActiveItem?.itemId !== id || !currentActiveItem?.isOpen
                ? "text-normalGrey font-fontMedium"
                : "text-activenormalGrey font-fontBold"
            }`}
          >
            Resources
          </span>
          {/*
          Heroicon name: solid/chevron-down

          Item active: "text-gray-600", Item inactive: "text-gray-400"
        */}
          <svg
            className={
              currentActiveItem?.itemId === "resources" &&
              currentActiveItem?.isOpen
                ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                : "transform rotate-0 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/*
        'Who can use?' flyout menu, show/hide based on flyout menu state.

        Entering: "transition ease-out duration-200"
          From: "opacity-0 translate-y-1"
          To: "opacity-100 translate-y-0"
        Leaving: "transition ease-in duration-150"
          From: "opacity-100 translate-y-0"
          To: "opacity-0 translate-y-1"
      */}

        <div
          //onMouseLeave={() => setFlyer(false)}
          className={
            currentActiveItem?.itemId === "resources" &&
            currentActiveItem?.isOpen
              ? "bg-[#FFFFFF] opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-[75vw] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-[75vw] max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
          }
        >
          {currentActiveItem?.itemId === "resources" &&
          currentActiveItem?.isOpen ? (
            <div className="border-[1px] border-solid border-[#E0E1E3] overflow-hidden p-6 max-h-[370px]">
              <div class={`flex grid grid-cols-12`}>
                <div
                  className={`sm:col-span-7 md:col-span-7 lg:col-span-7 flex flex-col`}
                >
                  <div className="text-[#7936f4] text-[14px] font-inter mb-4 mt-8">
                    Resources
                  </div>
                  <div className="flex">
                    <div className="flex flex-col justify-between h-[210px]">
                      {[1, 2, 3].map((item) => (
                        <div className="flex my-2 w-[250px]">
                          <div>
                            <img src={List} />{" "}
                          </div>
                          <div className="ml-2 text-[16px] text-darkerGrey font-fontMedium">
                            Blog
                            <br />
                            <span className="text-[14px] font-fontLight text-lightBlack">
                              Lorem ipsum dolor sit amet, consectetur.
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col justify-between mx-auto h-[210px]">
                      {[1, 2].map((item) => (
                        <div className="flex my-2 w-[250px]">
                          <div>
                            <img src={List} />{" "}
                          </div>
                          <div className="ml-2 text-[16px] text-darkerGrey font-fontMedium">
                            Blog
                            <br />
                            <span className="text-[14px] font-fontLight text-lightBlack">
                              Lorem ipsum dolor sit amet, consectetur.
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`sm:col-span-5 md:col-span-5 lg:col-span-5 flex flex-col mt-8`}
                >
                  <div className="flex my-2">
                    <div>
                      <img src={NavImg} />
                    </div>
                    <div className="flex flex-col w-[300px] justify-between ml-3">
                      <div className="text-[16px] text-[#1c2433] font-fontMedium">
                        Auto-layout explained
                      </div>
                      <div className="text-[14px] text-[#677289] font-fontLight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="text-[14px] text-[#7936f4] flex items-center">
                        Read Post <img src={ArrowRight} />
                      </div>
                    </div>
                  </div>
                  <div className="flex my-2">
                    <div>
                      <img src={NavImg} />
                    </div>
                    <div className="flex flex-col justify-between w-[300px] ml-3">
                      <div className="text-[16px] text-[#1c2433] font-fontMedium">
                        Auto-layout explained
                      </div>
                      <div className="text-[14px] text-[#677289] font-fontLight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="text-[14px] text-[#7936f4] flex items-center">
                        Read Post <img src={ArrowRight} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  };
  const CompanyContent = (id) => {
    return (
      <div className="relative">
        {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
        <button
          type="button"
          className={`
               group rounded-md  inline-flex items-center  pb-8'
              `}
          onClick={() =>
            setCurrentActiveItem({
              itemId: "company",
              isOpen: !currentActiveItem?.isOpen,
            })
          }
        >
          <span
            className={`${
              currentActiveItem?.itemId !== id || !currentActiveItem?.isOpen
                ? "text-normalGrey font-fontMedium"
                : "text-activenormalGrey font-fontBold"
            }`}
          >
            Company
          </span>
          {/*
            Heroicon name: solid/chevron-down
            
            Item active: "text-gray-600", Item inactive: "text-gray-400"
            */}
          <svg
            className={
              currentActiveItem?.itemId === "company" &&
              currentActiveItem?.isOpen
                ? "transform rotate-180 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
                : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {/*
            'More' flyout menu, show/hide based on flyout menu state.
            
            Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
            */}{" "}
        <div
          //onMouseLeave={() => setFlyerTwo(false)}
          className={
            currentActiveItem?.itemId === "company" && currentActiveItem?.isOpen
              ? "bg-[#FFFFFF] opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-[75vw] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
              : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-[75vw] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
          }
        >
          {currentActiveItem?.itemId === "company" &&
          currentActiveItem?.isOpen ? (
            <div className="border-[1px] border-solid border-[#E0E1E3] overflow-hidden p-6 h-[370px]">
              <div class={`flex grid grid-cols-12`}>
                <div
                  className={`sm:col-span-4 md:col-span-4 lg:col-span-4 flex flex-col`}
                >
                  <div className="text-[#7936f4] text-[14px] font-inter mb-4 mt-8">
                    Company
                  </div>
                  <div className="flex">
                    <div className="flex flex-col justify-start h-[210px]">
                      {[1, 2].map((item) => (
                        <div className="flex my-2 w-[250px]">
                          <div>
                            <img src={List} />{" "}
                          </div>
                          <div className="ml-2 text-[16px] text-darkerGrey font-fontMedium">
                            Blog
                            <br />
                            <span className="text-[14px] font-fontLight text-lightBlack">
                              Lorem ipsum dolor sit amet, consectetur.
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`sm:col-span-8 md:col-span-8 lg:col-span-8 flex flex-col mt-8`}
                >
                  <div className="flex my-2">
                    {[1, 2, 3].map((item) => (
                      <div className="flex flex-col justify-between h-[250px]">
                        <div>
                          <img src={NavImg} />
                        </div>
                        <div className="text-[16px] text-[#1c2433] font-fontMedium">
                          Auto-layout explained
                        </div>
                        <div className="text-[14px] text-[#677289] font-fontLight">
                          Lorem ipsum dolor sit amet, consectetur adipiscing.{" "}
                        </div>
                        <div className="text-[14px] text-[#7936f4] flex items-center">
                          Read Post <img src={ArrowRight} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {options.map((item, index) => {
        return item.id === "resources" ? (
          <a
            href="#"
            className={`px-2 py-2 flex items-center ${
              currentActiveItem?.itemId !== item?.id
                ? "text-normalGrey font-fontMedium"
                : "text-activenormalGrey font-fontBold"
            } text-smallText leading-4  hover:font-fontBold hover:font-activenormalGrey not-italic`}
          >
            {ResourceContent(item?.id)}
          </a>
        ) : item.id === "company" ? (
          <a
            href="#"
            className={`px-2 py-2 flex items-center ${
              currentActiveItem?.itemId !== item?.id
                ? "text-normalGrey font-fontMedium"
                : "text-activenormalGrey font-fontBold"
            } text-smallText leading-4  hover:font-fontBold hover:font-activenormalGrey not-italic`}
          >
            {CompanyContent(item?.id)}
          </a>
        ) : (
          <div
            onClick={() => {
              currentActiveItem?.itemId !== item?.id
                ? setCurrentActiveItem({ itemId: item?.id, isOpen: false })
                : setCurrentActiveItem({ itemId: "", isOpen: false });
            }}
            href="#"
            className={`px-2 cursor-pointer py-2 flex items-center ${
              currentActiveItem?.itemId !== item?.id
                ? "text-normalGrey font-fontMedium"
                : "text-activenormalGrey font-fontBold"
            } text-smallText leading-4  hover:font-fontBold hover:font-activenormalGrey not-italic`}
          >
            {item?.title}
          </div>
        );
      })}
    </>
  );
};
export default NavList;
