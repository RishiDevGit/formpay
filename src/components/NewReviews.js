import React, { useState } from "react";
import { formattedText } from "./helper";
import LeftIcon from "../assets/LeftIcon.svg";
import RightIcon from "../assets/RightArrow.svg";
import ImageCarousel from "../assets/Image.svg";
import StarIcon from "../assets/Star.svg";

import ActiveImage from "../assets/ActiveImage.svg";
import InActiveImage from "../assets/InActiveImage.svg";
import { AnimatePresence, motion } from "framer-motion";
const NewReviews = () => {
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
  const [componentList, setComponentList] = useState([1, 2, 3, 4, 5, 6]);

  const [index, setIndex] = useState(0);
  const nextStep = (specificIndex = -1) => {
    setDirection(1);
    if (specificIndex >= 0) setIndex(specificIndex);
    else {
      if (index === componentList.length - 1) setIndex(0);
      else setIndex(index + 1);
    }
  };
  const prevStep = (specificIndex = -1) => {
    setDirection(-1);
    if (specificIndex >= 0) setIndex(specificIndex);
    else {
      if (index === 0) setIndex(componentList.length - 1);
      else setIndex(index - 1);
    }
  };
  return (
    <div>
      {formattedText(
        "",
        "text-[#7936f4] font-fontBold leading-[24px] my-2 text-normalText",
        "Reviews"
      )}
      {formattedText(
        "",
        "text-darkerGrey text-[24px] md:text-[28px] my-2 lg:text-veryLargeText leading-[32px] md:leading-[34px] lg:leading-[44px] font-fontBold my-2",
        "What others say about Formpay?"
      )}
      <div className="flex grid grid-cols-12">
        <div className=" flex flex-col justify-between col-start-2 col-span-10 border-2 border-solid border-[#1C2736] rounded-[2rem] h-auto bg-[#1C2736] px-[3rem] xl:px-[7rem] py-[3rem]">
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
              <motion.div className="flex grid grid-cols-12">
                <motion.div className="col-span-12 md:col-span-4 lg:col-span-6">
                  <motion.img
                    src={ImageCarousel}
                    width="300px"
                    height="300px"
                  />
                </motion.div>
                <motion.div className="ml-0 sm:ml-6 lg:ml-0 col-span-12 md:col-span-8 lg:col-span-6">
                  <motion.div className="flex my-1">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <motion.img className="mx-1" src={StarIcon} />
                    ))}
                  </motion.div>
                  <motion.div className="text-[18px] md:text-[24px] leading-[24px] md:leading-[34px] font-fontMedium text-[#ffffff] text-inter mx-1 my-1">
                    Great product, Great customer Service, Couldn't ask for
                    anything better
                  </motion.div>
                  <motion.div className="text-[16px] font-fontLight text-inter text-[#ecedee] mx-1 my-1">
                    I have been searching for a while for a product that does
                    every thing this does, but not only that teh customer
                    service team is amazing and they listen o our needs as their
                    clients and are very helpful
                  </motion.div>
                  <motion.div className="text-[16px] text-[#ecedee] font-fontBold mx-1 my-2">
                    What problem are you trying to solve?
                    <br />
                    <motion.span className="font-fontLight">
                      Being able to have a direct payment gateway on a landing
                      page is amazing, without having the prospect navigating
                      away from the page.
                    </motion.span>
                  </motion.div>
                  <motion.div className="mx-1 my-2 font-fontMedium text-[18px] text-[#ffffff]">
                    — Brendan T<br />
                    <motion.span className="text-[16px] font-fontLight">
                      Photography
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="flex grid grid-cols-12 mt-4">
            <div className="col-span-6">
              <div style={{ display: "flex", gap: "10px" }}>
                {componentList.map((item, i) => (
                  <div
                    onClick={() => {
                      if (i > index) nextStep(i);
                      else if (i < index) prevStep(i);
                    }}
                  >
                    <img src={i === index ? ActiveImage : InActiveImage} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-6">
              <div style={{ display: "flex", justifyContent: "end" }}>
                <button
                  onClick={prevStep}
                  class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold px-2 rounded-full"
                >
                  <img src={LeftIcon} />
                </button>
                <button
                  onClick={nextStep}
                  class="bg-blue-500 hover:bg-blue-700 text-[#FFFFFF] font-bold px-2 rounded-full"
                >
                  <img src={RightIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewReviews;
