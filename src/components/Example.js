import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./ContentPlaceholder";
import ChevronDown from "../assets/chevron-down.svg";
const Accordion = ({
  i,
  expanded,
  setExpanded,
  content,
  isDivider,
  dynamicIcons,
}) => {
  const isOpen = i === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.div
        initial={false}
        className="w-full h-5"
        //animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <div className="flex justify-between">
          <a href="#" className="-m-3 p-3 flex items-center rounded-md ">
            <span className="ml-3 text-normalGrey font-fontLight">{i}</span>
          </a>
          {!isOpen && (
            <img src={dynamicIcons ? dynamicIcons?.open : ChevronDown} />
          )}
          {isOpen && (
            <img src={dynamicIcons ? dynamicIcons?.close : ChevronDown} />
          )}
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="my-0 mx-4"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.section>
        )}
      </AnimatePresence>

      {isDivider && <div className="h-[1px] w-full bg-lightGrey2"></div>}
    </>
  );
};

export const Example = (props) => {
  const { accordionIds, isDivider, dynamicIcons } = { ...props };
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState(0);

  return accordionIds.map((item) => (
    <Accordion
      i={item?.title}
      dynamicIcons={dynamicIcons}
      isDivider={isDivider}
      expanded={expanded}
      setExpanded={setExpanded}
      content={item?.content}
    />
  ));
};
