import React, { useEffect, useState } from "react";
import LeftIcon from "../assets/LeftIcon.svg";
import RightIcon from "../assets/RightArrow.svg";
import FeaturedIcon from "../assets/FeaturedIcon.svg";

import Frame from "../assets/Frame.svg";
import { AnimatePresence, motion } from "framer-motion";
const NewPaymentActivites = () => {
  const [componentList, setComponentList] = useState([1, 2, 3, 4, 5, 6]);
  const [topIndex,setTopIndex]=useState(0);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const xVariants = {
    initial: (direction) => {
      return { x: direction > 0 ? 200 : -200, opacity: 0 };
    },
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        x: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -200 : 200,
        opacity: 0,

        transition: {
          x: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
          opacity: { duration: 0.2 },
        },
      };
    },
  };
  const variants = {
    initial: (direction) => {
      return { y: direction > 0 ? 200 : -200, opacity: 0 };
    },
    animate: {
      y: 0,
      opacity: 1,

      transition: {
        y: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => {
      return {
        y: direction > 0 ? -200 : 200,
        opacity: 0,

        transition: {
          y: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
          opacity: { duration: 0.2 },
        },
      };
    },
  };

  const nextStep = () => {
    setTopIndex(topIndex+8);
    setDirection(1);
    if (index === componentList.length - 1) setIndex(0);
    else setIndex(index + 1);
  };
  const prevStep = () => {
    setTopIndex(topIndex-8);
    setDirection(-1);
    if (index === 0) setIndex(componentList.length - 1);
    else setIndex(index - 1);
  };
  return (
    <div className="bg-[#FFFFFF]  px-4 sm:px-[2rem] md:px-[2rem] lg:px-[5rem] xl:px-[17rem] 2xl:px-[17rem] my-6 flex flex-col md:flex-row">
      {/* <div className='bg-[#F9F5FE] my-2 w-[17rem] border-2 border-solid border-[#F9F5FE] rounded-10 text-center text-[#7936f4] text-[14px] font-fontMedium'>
        Streamline all your payment activities
        </div> */}

      <div
        className={`hidden md:flex w-[4px] h-[350px] relative bg-[#F2F4F7]`}
      >
        <div className={`h-[100px] w-[4px] absolute  bg-[#7936F4]`} style={{top:`${topIndex}px`}}></div>
      </div>

      <div className="hidden md:flex relative h-auto sm:h-[450px] lg:h-[400px] bg-[#ffffff] mx-8">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            variants={variants}
            key={componentList[index]}
            animate="animate"
            initial="initial"
            exit="exit"
            alt="slides"
            custom={direction}
          >
            <motion.div className={`flex grid grid-cols-12`}>
              <motion.div
                className={`col-span-12 md:col-span-6 lg:col-span-6 flex flex-col`}
              >
                <motion.div className="my-1">
                  <motion.img src={FeaturedIcon} />
                </motion.div>
                <motion.div className="text-[24px] md:text-[36px] leading-[32px] md:leading-[44px] font-fontBold text-[#1C2433] font-inter my-1">
                  Collect payments in HubSpot without switching tabs
                </motion.div>
                <motion.div className="text-[16px] leading:[24px] text-[#677289] my-1">
                  Receive payments within HubSpot CRM so you don’t need to open
                  another app in your browser to check your payments.
                </motion.div>
              </motion.div>

              <motion.div
                className={`col-span-12  md:col-span-6 lg:col-span-6 flex justify-center`}
              >
                <motion.img src={Frame} />
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div className="flex mb-3 absolute bottom-0 left-8">
          <button
            onClick={prevStep}
            class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-2 rounded-full"
          >
            <img src={LeftIcon} />
          </button>
          <button
            onClick={nextStep}
            class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-2 rounded-full"
          >
            <img src={RightIcon} />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between md:hidden w-full h-[1px] bg-[#F2F4F7]">
        <div className={`h-[4px] w-[25%]  bg-[#7936F4]`}></div>
      </div>
      <div className="flex flex-col justify-start md:hidden relative h-auto bg-[#ffffff] mx-2">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            variants={xVariants}
            key={componentList[index]}
            animate="animate"
            initial="initial"
            exit="exit"
            alt="slides"
            custom={direction}
          >
            <motion.div className="my-1">
              <motion.img src={FeaturedIcon} />
            </motion.div>
            <motion.div className="text-[36px] font-fontBold text-[#1C2433] font-inter my-1">
              Collect payments in HubSpot without switching tabs
            </motion.div>
            <motion.div className="text-[16px] text-[#677289] my-1">
              Receive payments within HubSpot CRM so you don’t need to open
              another app in your browser to check your payments.
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div>
          <button
            onClick={prevStep}
            class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-2 rounded-full"
          >
            <img src={LeftIcon} />
          </button>
          <button
            onClick={nextStep}
            class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold py-2 px-2 rounded-full"
          >
            <img src={RightIcon} />
          </button>
        </div>
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            variants={xVariants}
            key={componentList[index]}
            animate="animate"
            initial="initial"
            exit="exit"
            alt="slides"
            custom={direction}
            src={Frame}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};
export default NewPaymentActivites;
