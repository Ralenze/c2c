import { useRef, useState, useEffect } from "react";
import { Routes, useNavigate } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
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
    " fixed z-[100] h-screen w-screen backdrop-blur-md transition-all ease-in-out duration-500 opacity-0 ";
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
        className="text-white fixed z-10 left-6 top-6 h-10 w-10"
      ></FontAwesomeIcon>
      <div
        ref={hamburgerOutcome}
        className={hamburgerOutcomeClass + "invisible"}
      >
        <FontAwesomeIcon
          icon={faXmark}
          onClick={outcomeToggle}
          className="fixed top-6 left-6 h-10 w-10 text-white "
        ></FontAwesomeIcon>
        <div className="fixed h-1/2 flex flex-col top-1/4 justify-around w-screen  ">
          <div
            onClick={mainPage}
            className="relative h-12 w-screen text-white text-3xl font-extrabold text-center"
          >
            {" "}
            HOME
          </div>
          <div
            onClick={aboutPage}
            className="relative h-12 w-screen text-white text-3xl font-extrabold text-center"
          >
            {" "}
            OUR TEAM
          </div>
          <div
            onClick={speakerPage}
            className="relative h-12 w-screen text-white text-3xl font-extrabold text-center"
          >
            {" "}
            SPEAKERS
          </div>
          <div
            onClick={eventPage}
            className="relative h-12 w-screen text-white text-3xl font-extrabold text-center"
          >
            {" "}
            SCHEDULE
          </div>
          <div
            onClick={contactPage}
            className="relative h-12 w-screen text-white text-3xl font-extrabold text-center"
          >
            {" "}
            CONTACT
          </div>
          <div
            onClick={faqPage}
            className="relative h-12 w-screen text-white text-3xl font-extrabold text-center"
          >
            {" "}
            FAQs
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
