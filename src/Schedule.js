import NavBar from "./components/NavBar.js";
import { useState, useEffect, useRef } from "react";
import Event from "./components/Event.js";
import schedule from "./images/damnthisaW.webp";
const Schedule = () => {
  return (
    <>
      <NavBar />
      <div className={"bg-black w-screen min-h-screen justify-center"}>
        <img src={schedule} className="hidden lg:block scale-75" />
        <div className="lg:hidden">
          <h1
            className={
              " relative text-white text-4xl font-extrabold text-center pt-32 pb-12 px-12 leading-relaxed"
            }
          >
            For All interdisciplinary student
          </h1>
          <div className="text-center text-2xl py-6 text-white font-semibold">
            Friday
            <Event
              odd={true}
              time="7-9PM"
              desc="Speed Friending and Live Music"
            />
          </div>
          <div className="text-center py-6 text-2xl text-white font-semibold">
            Saturday
            <Event
              odd={true}
              time="8:00-9:00AM"
              desc="Registration and Breakfast"
            />
            <Event odd={false} time="9:00-10:00AM" desc="Welcome Ceremony" />
            <Event
              odd={true}
              time="10:00-11:00AM"
              desc="Interdisciplinary Research Panel"
            />
            <Event odd={false} time="11:30-5PM" desc={"Options"} />
            <Event
              odd={true}
              time="11:30-5PM"
              desc="Team Collaboration Workshop"
            />
            <Event
              odd={false}
              time="11:30-5PM"
              desc="Science Communication Workshop"
            />
            <Event
              odd={true}
              time="11:30-5PM"
              desc="Computer Science Workshop"
            />
            <Event
              odd={false}
              time="11:30-5PM"
              desc="Creativity and Design Workshop"
            />
            <div className="text-center py-6 text-2xl text-white font-semibold">
              OR{" "}
            </div>
            <Event
              odd={false}
              time="11:30-5PM"
              desc="Indigenous Spoon Carving Workshop"
            />
          </div>
          <div className="text-center py-6 text-2xl text-white font-semibold">
            Sunday
            <Event odd={true} time="8:30-9AM" desc="Breakfast" />
            <Event
              odd={false}
              time="9:00-10:00AM"
              desc="Knowledge Integration Faculty Panel"
            />
            <Event odd={true} time="10:30-2:30PM" desc="Environment Workshop" />
            <Event
              odd={false}
              time="10:30-2:30PM"
              desc="Gender and Social Justice Workshop"
            />
            <Event odd={true} time="10:30-2:30PM" desc="Naloxone Workshop" />
            <Event odd={false} time="12:30-1:30PM" desc="Lunch" />
            <Event odd={true} time="2:30-3:30PM" desc="Closing Remarks" />
          </div>
          <h1
            className={
              " relative text-white text-4xl font-extrabold text-center pt-32 pb-12 px-12 leading-relaxed"
            }
          >
            For All UWaterloo Students
          </h1>
          <div className="text-center py-6 text-2xl text-white font-semibold">
            Saturday
            <Event
              odd={false}
              time="2:30-3:30PM"
              desc="Interdisciplinarity in a Nutshell"
            />
            <Event
              odd={true}
              time="4:00-5:00PM"
              desc="Interdisciplinarity in Social Development"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Schedule;
