import logo from "./logo.svg";
import c2clogo from "./c2clogo.jpg";
import grouppic from "./grouppic.png";
import NavBar from "./components/NavBar.js";
import "./App.css";
import { useRef, useState, useEffect } from "react";
const App = () => {
  let timeouts = [];

  let startingref = useRef(null);
  let ref1 = useRef(null);
  let ref2 = useRef(null);

  const [appearMain, setAppearMain] = useState(false);
  timeouts.push(setTimeout(() => setAppearMain(true), 500));
  if (appearMain) {
    timeouts.push(
      setTimeout(() => {
        if (startingref.current) {
          startingref.current.className =
            "transition-all ease-in-out duration-1000 relative h-fit w-full top-80 opacity-100";
        }
      }, 150)
    );
    timeouts.push(
      setTimeout(() => {
        if (startingref.current) {
          startingref.current.className =
            "transition-all ease-in-out duration-1000 relative h-fit w-full top-40 opacity-100";
        }
      }, 1000)
    );
    timeouts.push(
      setTimeout(() => {
        if (ref1.current) {
          ref1.current.className =
            "relative top-44 transition duration-500 ease-in-out opacity-100";
        }
      }, 2500)
    );
    timeouts.push(
      setTimeout(() => {
        if (ref2.current) {
          ref2.current.className += " opacity-100";
        }
      }, 2500)
    );
  }
  useEffect(() => {
    return () => {
      for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
      }
    };
  });

  return (
    <>
      <NavBar />
      <div className="bg-black h-screen w-screen">
        <div
          ref={startingref}
          className=" transition-all ease-in-out duration-1000 relative h-fit w-full top-80 opacity-0"
        >
          <h1 className=" tracking-wide leading-normal text-5xl  text-[#C1FE76] font-SF text-center top-2/5">
            COMBINING
            <br /> 2
            <br />
            CULTURES
          </h1>
        </div>
        <div
          ref={ref1}
          className="relative top-44 transition duration-500 ease-in-out opacity-0"
        >
          <h1 className="tracking-wider text-center text-3xl font-SF font-bold text-white">
            Jan 12-14 2024
          </h1>
        </div>
        <img
          ref={ref2}
          className="absolute transition duration-500 bottom-0 opacity-0 "
          src={c2clogo}
        ></img>
      </div>
      <div className="h-[200vh] justify-around space-y-24 w-screen bg-black text-center">
        <h1 className="relative text-3xl font-bold text-center text-white">
          WHAT IS C2C?
        </h1>
        <img className="relative h-72 w-72 m-auto" src={grouppic}></img>
        <p className="relative text-white px-4">
          Combining Two Cultures (C2C) is a student-led conference that
          celebrates and supports interdisciplinary education among
          undergraduate students. C2C welcomes participants from across Canada
          and abroad to interact with a community of like-minded individuals.
          The 2024 conference will provide participants with exciting
          opportunities to network, collaborate, and explore the benefits and
          practical uses of their interdisciplinary degrees and experiences.
        </p>
        <h1 className="text-3xl text-white">Jack of All Trades</h1>
        <p className="text-white px-4">
          This year’s theme for C2C is “Jack of All Trades,” drawing from the
          full quotation, “A jack of all trades is a master of none, but
          oftentimes better than a master of one.” Having skills and knowledge
          from multiple fields of study and experiences sets up
          interdisciplinary students to be great problem-solvers, leaders, and
          collaborators. At C2C, we will leverage the strengths of
          interdisciplinary studies through our workshops, guest speakers, and
          networking events.
        </p>
        <h1 className="text-3xl px-4 font-bold text-white">
          REGISTRATIONS NOW OPEN!!
        </h1>
        <div className="h-16 align-middle flex items-center text-center justify-center rounded-md w-4/5 mx-auto bg-green-400">
          REGISTER NOW
        </div>
      </div>
    </>
  );
};

export default App;
