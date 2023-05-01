import * as React from "react";
import { motion } from "framer-motion";
import { mix } from "@popmotion/popcorn";

import ArrowRight from "../assets/arrow-right.svg";
import NavImg from "../assets/NavImg.svg";
import List from "../assets/list.svg";
const randomInt = (min, max) => Math.round(mix(min, max, Math.random()));
const generateParagraphLength = () => randomInt(5, 20);
const generateWordLength = () => randomInt(20, 100);

// Randomly generate some paragraphs of word lengths
const paragraphs = [...Array(3)].map(() => {
  return [...Array(generateParagraphLength())].map(generateWordLength);
});

export const Word = ({ width }) => <div className="word" style={{ width }} />;

const Paragraph = ({ words }) => (
  <div className="paragraph">
    {words.map((width) => (
      <Word width={width} />
    ))}
  </div>
);

export const ContentPlaceholder = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.2 }}
  >
    {[1, 2, 3, 4, 5].map((item) => (
      <div className="flex">
        <div>
          <img src={List} />{" "}
        </div>
        <div className="ml-2 text-4 font-fontMedium">Blog</div>
      </div>
    ))}
    <div className="flex my-2 justify-center">
      <div>
        <img src={NavImg} />
      </div>
      <div className="flex flex-col w-72 ml-3">
        <div className="text-4 text-[#1c2433] font-fontMedium">
          Auto-layout explained
        </div>
        <div className="text-4 text-[#677289] font-fontLight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="text-4 text-[#7936f4] flex">
          Read Post <img src={ArrowRight} />
        </div>
      </div>
    </div>
  </motion.div>
);
