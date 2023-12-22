import { useState, useRef, useEffect } from "react";
import NavBar from "./components/NavBar";
import Foldable from "./components/Foldable";
import logo from "./images/logo.png";
const FAQ = () => {
  return (
    <>
      <NavBar />
      <div className="bg-black h-fit min-h-screen w-screen">
        <img src={logo} className="scale-50 absolute mx-auto lg:hidden" />
        <h1 className="hidden lg:block sticky text-6xl text-center top-1/4 text-white ">
          FAQ
        </h1>
        <div className="space-y-12 top-1/3 bg-black absolute h-fit w-screen overflow-scroll lg:top-1/2 last:pb-24">
          <Foldable
            title="What is the Combining Two Cultures conference?"
            text="Combining Two Cultures is a conference that celebrates interdisciplinary 
            education among undergraduate students. It serves as a platform for participants
             from Canada and abroad to explore and discuss the benefits and applications of 
             interdisciplinary degrees and experiences."
          />
          <Foldable
            title="What schools and programs are involved?"
            text="Students from interdisciplinary programs across Canada and the United States 
          are welcome to attend. "
          />
          <Foldable
            title="What can participants expect at the conference?"
            text="Attendees can look forward to workshops, keynote speeches, networking events, 
          and collaborative sessions that harness the strengths of interdisciplinary studies. 
          C2C is a fantastic opportunity to connect with like-minded individuals and explore 
          the practical applications of interdisciplinary education."
          />
          <Foldable
            title="What comes with the purchase of a ticket?"
            text="Your ticket grants you access to exclusive lectures, workshops and professor panels.
          You will have the opportunity to network with other interdisciplinary students. PLUS, five 
          meals will be provided, where these costs are already factored into your ticket price. "
          />
          <Foldable
            title="When and where is the conference taking place?"
            text="The conference will be held from Friday, January 12, 2024, to Sunday, January 14, 2024, 
          at the University of Waterloo. More specific details about the location will be provided at 
          the event."
          />
          <Foldable
            title="Who should attend C2C?"
            text="C2C is most relevant for undergraduate students interested in interdisciplinary studies, 
          professionals keen on leveraging multiple disciplines in their work, educators, and anyone 
          curious about the benefits of a diverse educational experience."
          />
          <Foldable
            title="How do you register?"
            text="Click the button below to register! Tickets are only $20 (including tax)!"
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
