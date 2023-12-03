import { useRef, useState, useEffect } from "react";
import { Routes, useNavigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
  const navbarclass =
    "relative h-12 w-screen lg:w-[20%] cursor-pointer transition duration-200 hover:text-[#4FEFFD]";
  const navigate = useNavigate();
  const mainPage = () => {
    navigate("/");
  };
  const aboutPage = () => {
    navigate("/about");
  };
  const navigator = (location) => {
    navigate(location);
  };
  const speakerPage = () => {
    navigate("/speaker");
  };
  const eventPage = () => {
    navigate("/schedule");
  };
  const faqPage = () => {
    navigate("/faq");
  };
  const contactPage = () => {
    navigate("/contact");
  };
  let hamburgerNav = useRef(null);
  let hamburgerOutcome = useRef(null);
  let currentlyOn = false;
  let hamburgerOutcomeClass =
    " fixed z-[100] lg:bg-black lg:border-b lg:border-b-white h-screen w-screen lg:h-24 lg:top-0 backdrop-blur-md lg:backdrop-blur-none transition-all ease-in-out duration-500  ";
  const outcomeToggle = () => {
    if (currentlyOn) {
      hamburgerOutcome.current.classList =
        hamburgerOutcomeClass + "opacity-0 invisible";
      currentlyOn = false;
    } else {
      console.log("meoww?");
      hamburgerOutcome.current.classList =
        hamburgerOutcomeClass + "opacity-100 visible";
      currentlyOn = true;
    }
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faBars}
        ref={hamburgerNav}
        onClick={outcomeToggle}
        className="text-white fixed z-10 left-6 top-6 h-10 w-10 lg:hidden "
      ></FontAwesomeIcon>
      <div
        ref={hamburgerOutcome}
        className={hamburgerOutcomeClass + "max-sm:invisible max-sm:opacity-0 "}
      >
        <FontAwesomeIcon
          icon={faXmark}
          onClick={outcomeToggle}
          className="fixed top-6 left-6 h-10 w-10 text-white lg:hidden "
        ></FontAwesomeIcon>
        <div className="lg:bg-black fixed h-1/2 lg:h-1/2 flex flex-col lg:flex-row top-1/4 lg:space-x-12 justify-around w-screen lg:w-2/3 lg:right-0 text-3xl lg:font-light text-white font-extrabold text-center lg:text-justify ">
          <div
            onClick={mainPage}
            className="relative h-12 w-screen lg:w-[20%] cursor-pointer transition duration-200 hover:text-[#4FEFFD]"
          >
            {" "}
            HOME
          </div>
          <div onClick={aboutPage} className={navbarclass}>
            {" "}
            ABOUT
          </div>
          <div onClick={speakerPage} className={navbarclass}>
            {" "}
            SPEAKERS
          </div>
          <div onClick={eventPage} className={navbarclass}>
            {" "}
            SCHEDULE
          </div>
          <div onClick={contactPage} className={navbarclass}>
            {" "}
            CONTACT
          </div>
          <div onClick={faqPage} className={navbarclass}>
            {" "}
            FAQs
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
