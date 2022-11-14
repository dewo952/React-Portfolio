import Image from "next/image";

import HTML from "../public/assets/skills/html.png";
import CSS from "../public/assets/skills/css.png";
import JavaScript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Node from"../public/assets/skills/node.png";
import FireBase from "../public/assets/skills/firebase.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Mongo from "../public/assets/skills/mongo.png";
import MySql from "../public/assets/skills/mysql.png";
import Mocha from "../public/assets/skills/mocha.png";
import NextJs from "../public/assets/skills/nextjs.png";

const Skills = () => {
  return (
    <div id="skills" className=" w-full h-screen  ">
      {/* Container */}
      <div className="text-black max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-teal-600 ">
            Skills
          </p>
          <p className="py-4 text-xl ">
            {" "}
            These are the technologies I`ve worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="hover:scale-110 duration-500 ">
            <Image className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4 ">HTML</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image className="w-20 mx-auto " src={CSS} alt="Css icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className=" hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={Mongo} alt="Mongo icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image className="w-20 mx-auto" src={FireBase} alt="FireBase icon" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image className="w-16 mx-auto mt-2.5" src={Mocha} alt="Mocha/Chai icon" />
            <p className="my-4">Mocha/Chai</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image className="w-20 mx-auto mt-1.5" src={NextJs} alt="NextJs icon" />
            <p className="my-4">NEXTJs</p>
          </div>
          <div className="hover:scale-110 duration-500">
            <Image className="w-20 mx-auto mt-5" src={MySql} alt="MySQL icon" />
            <p className="my-4">MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
