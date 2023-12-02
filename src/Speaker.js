import { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar.js";
import GreetSpeaker from "./components/GreetSpeaker.js";
import rob from "./images/rob.jpeg";
import craig from "./images/craig.jpeg";
import matt from "./images/matt.jpeg";
import derek from "./images/derek.jpeg";
import brianna from "./images/brianna.jpeg";
import lea from "./images/lea.jpeg";
import dan from "./images/dan.webp";
import susie from "./images/susie.webp";
import john from "./images/john.jpeg";
import mathieu from "./images/mathieu.jpeg";
import katie from "./images/katie.jpeg";
import Profile from "./components/Profile.js";
const Speaker = () => {
  return (
    <>
      <NavBar />
      <div className="bg-black w-screen h-fit py-12 min-h-screen">
        <div className="top-24 relative bg-black h-fit w-fit py-12">
          <h1 className="relative text-white text-center py-8 text-4xl font-bold">
            Meet the Speakers
          </h1>
          <GreetSpeaker
            name="Rob Gorbet"
            imgsrc={rob}
            text="Rob is an associate professor in the department of Knowledge Integration at the University of Waterloo. He has a PhD in Electrical Engineering and his research interests include interfaces, interface design, interactive artworks, and human interaction in collaboration, teaching and learning. Rob will be giving a public lecture at C2C 2024.

"
          />
          <GreetSpeaker
            name="Craig Fortier"
            imgsrc={craig}
            style="h-80 w-72"
            duo={true}
            name2="Matt Borland"
            style2="h-64 w-48"
            imgsrc2={matt}
            text="
          Craig is an associate professor in the department of Social Development Studies at the University of Waterloo. Their research interests include settler colonialism, popular culture and radical change, trans-disciplinary social justice pedagogy, Indigenous and settler relationships, and much more. Matt is a lecturer in the Department of Systems Design Engineering at UW. His research interests include music technology, design methods and systems thinking. Together, they will be giving a public lecture.

"
          />
          <GreetSpeaker
            name="Derek Armitage"
            imgsrc={derek}
            text="Derek is a professor and associate director of graduate studies in the School of Environment, Resources and Sustainability (ERS) at the University of Waterloo. He studies the human dimensions of environmental change and emerging forms of environmental governance. He works on projects in Southeast Asia, the Canadian North and the Caribbean, with a particular focus on aquatic systems. His research support governance arrangements that facilitate opportunities for learning and collaboration among resource users, among many other outcomes. Derek will be running an environmental working group at the conference."
          />
          <GreetSpeaker
            name="Brianna Wiens"
            imgsrc={brianna}
            text="Brianna is an assistant professor in the English Language and Literature department at the University of Waterloo. Her research examines how people use media in critical and creative ways to foster community and speak back to power, and she explores how we build community through digital technology while negotiating its complex power dimensions. Brianna will be running a Gender and Social Justice working group at C2C 2024."
          />
          <GreetSpeaker
            name="Léa Rousseau"
            imgsrc={lea}
            style="h-60 w-60"
            text="Léa graduated from the University of Waterloo with a Bachelor of Knowledge Integration in 2023 and is now working as a Workshop Facilitator and Food Canada Sales Associate at Dempsey Corporation. She is running the Team Collaboration working group at C2C 2024, based on her fourth year KI thesis project. Léa is passionate about collaboration and loves to rock climb.
"
          />
          <GreetSpeaker
            name="Dan Beaver"
            imgsrc={dan}
            style="h-60 w-60"
            text="Hello, I'm Dan Beaver. I've had the privilege of managing the ENV Makerspace, located in the Faculty of Environment for the past nine years. I'm passionate about providing a nurturing environment where students can explore their ideas, develop practical skills, and bring their academic and research projects to life. I look forward to supporting C2C once again! 


"
          />
          <GreetSpeaker
            name="Susie Brown"
            imgsrc={susie}
            style="h-60 w-60"
            text="Let’s Talk Science is committed to preparing youth in Canada for future careers and citizenship demands in a rapidly changing world. In a world increasingly driven by innovation, the demand for people who can fill science, technology, engineering and mathematics (STEM) - related jobs - will only continue to increase but the reality is that most students in Canada disengage from STEM courses before graduating high school. Let's Talk Science will be running the Science Communication working groups at C2C!
"
          />
          <GreetSpeaker
            name="John Wager"
            imgsrc={john}
            styles="h-72 w-48"
            text="John will run a workshop at the conference that teaches the art of wood carving, with the final product being a wooden spoon. This session will cover respectful sourcing and selecting wood, splitting wood and axe work, slojd and hook knives technique and basic sharpening tools and techniques. 


"
          />
          <GreetSpeaker duo={true} />
          <h1 className="text-center text-white text-4xl font-bold tracking-wide">
            Knowledge Integration Panel
          </h1>
          <Profile
            name="Rob Gorbet"
            imgsrc={rob}
            styles="pt-6"
            ptext="Associate Professor"
          />
          <Profile
            name="Katie Plaisance"
            imgsrc={katie}
            styles="pt-6 h-72 w-48"
            ptext="Associate Professor and Chair"
          />

          <Profile
            name="Mathieu Feagan"
            imgsrc={mathieu}
            styles="pt-6 h-72 w-48"
            ptext="Assistant Professor"
          />
        </div>
      </div>
    </>
  );
};

export default Speaker;
