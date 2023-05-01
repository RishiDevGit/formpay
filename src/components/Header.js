import React from "react";

import FormPaySvg from "../assets/Logo.svg";
import MenuIcon from "../assets/menu.svg";
import { Example } from "./Example";
import MobileNavList from "./MobileNavList";
import NavList from "./NavList";
const Header = () => {
  const [options, setOptions] = React.useState([
    { title: "Home", id: "home" },
    { title: "Who can use?", id: "use" },
    {
      title: "Resources",
      id: "resources",
      childNodes: [
        { title: "Child text 1", id: "resources-1" },
        { title: "Child text 2", id: "resources-2" },
      ],
    },
    {
      title: "Company",
      id: "company",
      childNodes: [
        { title: "Child text 1", id: "company-1" },
        { title: "Child text 2", id: "company-2" },
      ],
    },
    { title: "Pricing", id: "pricing" },
  ]);
  const [open, setOpen] = React.useState(false);
  const [currentActiveItem, setCurrentActiveItem] = React.useState({
    itemId: "home",
    isOpen: false,
  });

  return (
    <>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
            <div className="flex">
              <div className="flex justify-start">
                <a href="#">
                  <img src={FormPaySvg} />
                </a>
              </div>

              <nav className="hidden lg:flex space-x-10 ml-8">
                <NavList
                  options={options}
                  currentActiveItem={currentActiveItem}
                  setCurrentActiveItem={setCurrentActiveItem}
                />
              </nav>
            </div>
            <div className={`${open ? "hidden" : ""} flex lg:hidden`}>
              <div className="hidden md:flex">
                <button class="hover:bg-gray-100 text-formPay100 text-smallText font-medium py-2 px-4 mr-6">
                  Log in
                </button>
                <button class="mr-6 bg-formPay100 border border-solid border-formPay100 shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-[8px] text-smallText text-white font-medium py-2 px-4">
                  Sign up
                </button>
              </div>
              <button
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center"
                onClick={() => setOpen(!open)}
              >
                {/* Heroicon name: outline/menu */}
                <img src={MenuIcon} />
              </button>
            </div>
            <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
              <button class="hover:bg-gray-100 text-lightGrey text-smallText font-medium py-2 px-4 mr-6">
                Log in
              </button>
              <button class="bg-purpleLight hover:bg-gray-100 text-smallText text-purpleDark font-medium py-2 px-4">
                Sign up
              </button>
            </div>
          </div>
        </div>

        <MobileNavList
          options={options}
          open={open}
          setOpen={setOpen}
          currentActiveItem={currentActiveItem}
          setCurrentActiveItem={setCurrentActiveItem}
        />
      </div>
    </>
  );
};
export default Header;
