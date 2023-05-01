import React from "react";
const Stats = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="mt-[3rem]">
      <div className="text-center text-[#1c2433] text-[24px] md:text-[36px] leading-[32px] md:leading-[44px] text-fontBold my-4">
        We don’t just promise. We deliver.
      </div>
      <div className="text-center text-[#677289] text-fontLight text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] my-4">
        And the numbers prove it.
      </div>
      <div className="flex py-3 flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center">
        {arr.map((item) => (
          <div className="flex m-2 justify-center">
            <div className="hidden lg:flex h-[9rem] w-[2px] bg-[#7936f4] mr-6"></div>
            <div className="max-w-[170px] break-all text-[48px] sm:text-[38px] lg:text-[48px] leading-[60px] sm:leading-[50px] lg:leading-[60px] text-[#7936f4] text-fontBold text-center lg:text-left">
              7+
              <br />
              <div className="max-w-[170px] break-all text-[18px] sm:text-[16px] lg:text-[18px] leading-[28px] sm:leading-[22px] lg:leading-[28px] text-[#677289] text-inter">
                Gateways integrated (more to come)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Stats;
