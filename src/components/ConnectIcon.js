import { useEffect, useState, useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ConnectIcon = (prop) => {
  return (
    <>
      <div className="py-16">
        <div className=" h-32 w-32 mx-auto flex justify-center text-white ">
          <FontAwesomeIcon
            icon={prop.icon}
            className="h-28 w-28 relative "
          ></FontAwesomeIcon>
        </div>
        <div className=" h-20 w-full mx-auto ">
          <h1 className="text-3xl font-bold text-center text-white">
            {prop.social ? prop.social : "dummy-text"}
          </h1>
          <h3 className="text-xl font-light text-center text-white lg:px-8">
            {prop.destination ? prop.destination : "dummy-link"}
          </h3>
        </div>
      </div>
    </>
  );
};
export default ConnectIcon;
