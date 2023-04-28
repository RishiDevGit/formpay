import React from "react";

import ArrowRight from "../assets/arrow-right.svg";

import { motion } from "framer-motion";
const FAQPlaceholder=()=>{
    return (
        <motion.div
        variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
        transition={{ duration: 0.2 }}
        className="content-placeholder"
      >
      <div className="flex text-lightBlack text-normalText p-4">Yes, you can. If you use different HubSpot accounts for payment-related activities, you can connect them with Formpay.
Here are the steps to do it...Read full answer</div>
    
      </motion.div>
    )
};
export default FAQPlaceholder;