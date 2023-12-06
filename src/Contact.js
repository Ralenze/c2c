import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar.js";
import ConnectIcon from "./components/ConnectIcon.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wesefsponsor from "./images/wesefsponsor.png";
import canadasponsor from "./images/canadasponsor.png";
import wusasponsor from "./images/wusasponsor.png";
import mariposasponsor from "./images/toinvertmariposa.png";
import uwresearchsponsor from "./images/uwresearch.png";
import uwdkisponsor from "./images/uwdki.png";
import sevenshoressponsor from "./images/sevenshoressponsor.png";
import logo from "./images/logo.png";

library.add(fas, faTwitter, faFontAwesome, faLinkedin, faInstagram, faEnvelope);

const Contact = () => {
  const contMessage = useRef(null);
  useEffect(() => {
    contMessage.current.className += "";
  });
  return (
    <>
      <NavBar />

      <div className="bg-black w-screen h-[275vh] lg:h-fit min-h-fit">
        <img src={logo} className="relative scale-50 mx-auto z-10" />
        <div className="flex flex-col relative bg-black w-screen h-screen ">
          <div ref={contMessage} className="relative mx-auto h-24 w-4/5">
            <h1 className="text-4xl text-center leading-relaxed font-extrabold text-white">
              Contact
            </h1>
            <h3 className="text-2xl text-white text-center ">
              {" "}
              Feel free to contact us with any questions
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-center py-12">
            <ConnectIcon
              icon={faInstagram}
              social="Instagram"
              destination="@combining2cultures"
            />
            <ConnectIcon
              icon={faEnvelope}
              social="Email"
              destination="combining.two.cultures@gmail.com"
            />
            <ConnectIcon
              icon={faLinkedin}
              social="Linkedin"
              destination="Combining2Cultures"
            />
          </div>
          <h1 className="text-center text-white text-4xl font-extrabold">
            Our Sponsors
          </h1>
          <div className="bg-black flex flex-col lg:flex-row flex-wrap lg:space-x-8 w-full justify-center py-6">
            <img src={wesefsponsor} className="h-40 w-40  max-sm:m-auto "></img>
            <img
              src={canadasponsor}
              className="self-center h-2/5 w-4/5 lg:h-[3.75rem] lg:w-[13.75rem] "
            ></img>
            <img src={wusasponsor} className="h-40 w-40 self-center"></img>
            <img
              src={mariposasponsor}
              className="bg-white rounded-full h-52 w-40 self-center"
            ></img>
            <img
              src={uwresearchsponsor}
              className="h-[9.75rem] w-52 self-center pt-4"
            ></img>
            <img
              src={uwdkisponsor}
              className="w-4/5 self-center pt-6 lg:h-[7.5rem] lg:w-[30rem]"
            ></img>
            <img src={sevenshoressponsor} className="pt-6"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
