import logo from "./logo.svg";
import c2clogo from "./c2clogo.jpg";
import grouppic from "./grouppic.png";
import NavBar from "./components/NavBar.js";
import "./App.css";
import kayvan from "./images/Kayvan.png";
import sarah from "./images/Sarah.png";
import rachel from "./images/Rachel.png";
import alana from "./images/Alana.png";
import arya from "./images/Arya.png";
import cadey from "./images/Cadey.png";
import cori from "./images/Cori.png";
import dalai from "./images/Dalai.png";
import graeme from "./images/Graeme.png";
import hannah from "./images/Hannah.png";
import jasmine from "./images/Jasmine.png";
import jordan from "./images/Jordan.png";
import katie from "./images/Katie.png";
import lauren from "./images/Lauren.png";
import marcus from "./images/Marcus.png";
import rowan from "./images/Rowan.png";
import siimar from "./images/Siimar.png";
import sophia from "./images/Sophia.png";
import vanessa from "./images/Vanessa.png";

import ScrollToButton from "./components/ScrollToButton.js";
import { useRef, useState, useEffect } from "react";
import Profile from "./components/Profile.js";
const About = () => {
  let coordinateRef = useRef(null);
  let leadershipRef = useRef(null);
  let communicationRef = useRef(null);
  let financeRef = useRef(null);
  let eventRef = useRef(null);
  const scrollToSection = (section) => {
    console.log("meow");
    console.log(section.current);
    if (section.current) {
      section.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <NavBar />
      <div className="bg-black h-screen w-screen flex flex-col justify-evenly">
        <h1 className="relative font-extrabold text-4xl top-12 text-white text-center">
          Meet Our Team.
          <p className=" text-white text-sm font-normal py-6 px-6 leading-loose text-center">
            Meet the C2C 2024 committee! They have been working hard to make
            this whole conference possible. All team members are University of
            Waterloo students who span various programs, faculties and years of
            study. With a diverse range of interests and skills, the team has
            worked together to bring this conference to life!
          </p>
        </h1>
        <div className="relative flex flex-col justify-center items-center ">
          <ScrollToButton
            text={"Coordinators"}
            onClick={() => {
              scrollToSection(coordinateRef);
            }}
          ></ScrollToButton>
          <ScrollToButton
            text={"Leadership"}
            onClick={() => {
              scrollToSection(leadershipRef);
            }}
          ></ScrollToButton>
          <ScrollToButton
            text={"Communications"}
            onClick={() => {
              scrollToSection(communicationRef);
            }}
          ></ScrollToButton>
          <ScrollToButton
            text={"Finance"}
            onClick={() => {
              scrollToSection(financeRef);
            }}
          ></ScrollToButton>
          <ScrollToButton
            text={"Events"}
            onClick={() => {
              scrollToSection(eventRef);
            }}
          >
            {" "}
          </ScrollToButton>
        </div>
      </div>

      <div className="bg-black ">
        <h1
          ref={coordinateRef}
          className="relative font-extrabold text-3xl py-8 text-center text-white"
        >
          {" "}
          Coordinators
        </h1>
        <div className="flex flex-col space-y-6">
          <Profile imgsrc={kayvan} name="Kayvan Yavari" ptext="he/him" />{" "}
          <Profile imgsrc={rachel} name="Rachel Deshpande" ptext="she/her" />
        </div>
        <h1
          ref={leadershipRef}
          className="relative font-extrabold text-3xl py-8 text-center text-white"
        >
          {" "}
          Leadership
        </h1>
        <div className="flex flex-col space-y-6">
          <Profile
            imgsrc={katie}
            name="Katie Burt"
            ptext="she/her"
            styles="h-[19.25rem] w-44"
          />{" "}
          <Profile imgsrc={arya} name="Arya Razmjoo" ptext="hi/him" />
          <Profile imgsrc={sophia} name="Sophia Armstrong" ptext="she/her" />
        </div>
        <h1
          ref={communicationRef}
          className="relative font-extrabold text-3xl py-8 text-center text-white"
        >
          {" "}
          Communications
        </h1>
        <div className="flex flex-col space-y-6">
          <Profile
            imgsrc={lauren}
            name="Lauren Rankin"
            ptext="she/her"
            styles="h-[18.75rem] w-[9.75rem]"
          />{" "}
          <Profile
            imgsrc={alana}
            name="Alana Matsuo"
            ptext="she/her"
            styles="h-64 w-72"
          />
          <Profile
            imgsrc={dalai}
            name="Dalai Setiawan"
            ptext="he/him"
            styles="h-72 w-64"
          />
          <Profile
            imgsrc={jasmine}
            name="Jasmine Kibati"
            ptext="she/her"
            styles="h-[19.5rem] w-72"
          />
          <Profile imgsrc={siimar} name="Siimar Leen Kaur" ptext="she/her" />
          <Profile
            imgsrc={sarah}
            name="Sarah O'Donnell"
            ptext="she/her"
            styles="h-48 w-48"
          />
        </div>

        <h1
          ref={financeRef}
          className="relative font-extrabold text-3xl py-8 text-center text-white"
        >
          {" "}
          Finance
        </h1>
        <div className="flex flex-col space-y-6">
          <Profile imgsrc={graeme} name="Graeme DePiero" ptext="he/him" />{" "}
          <Profile imgsrc={rowan} name="Rowan Chang" ptext="he/they" />
          <Profile
            imgsrc={jordan}
            name="Jordan Kalist"
            ptext=""
            styles="h-[18.75rem] w-[16.5rem]"
          />
        </div>
        <h1
          ref={eventRef}
          className="relative font-extrabold text-3xl py-8 text-center text-white"
        >
          {" "}
          Events
        </h1>
        <div className="flex flex-col space-y-6">
          <Profile imgsrc={marcus} name="Marcus Chan" ptext="he/him" />{" "}
          <Profile imgsrc={cadey} name="Cadey Chen" ptext="she/her" />
          <Profile imgsrc={jasmine} name="Jasmine Kibati" ptext="she/her" />
        </div>
      </div>
    </>
  );
};

export default About;
