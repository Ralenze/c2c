import { useEffect, useState, useRef } from "react";
import Profile from "./Profile.js";

const GreetSpeaker = (props) => {
  const duo = props.duo;
  return (
    <>
      <div>
        <div className="flex justify-center">
          <Profile
            imgsrc={props.imgsrc}
            styles={"h-80 w-60 px-4 " + " " + props.style}
            name={props.name}
            ptext={props.title}
          ></Profile>
          {duo ? (
            <Profile
              imgsrc={props.imgsrc2}
              styles={"h-80 w-60 px-4 " + props.style2}
              name={props.name2}
              ptext={props.title2}
            ></Profile>
          ) : null}
        </div>
        <div className="text-white text-center px-6 py-12 font-light tracking-wide">
          {props.text}
        </div>
      </div>
    </>
  );
};
export default GreetSpeaker;
