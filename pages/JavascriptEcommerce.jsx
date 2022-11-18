import Head from "next/head";
import Image from "next/image";
import React from "react";
import NetFlix from "../public/assets/projects/netflix.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const JavascriptEcommerce = () => {
  return (
    <>
      <Head>
        <title>JavaScript Ecommerce Website</title>
        <meta name="description" content="JavascriptEcommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={NetFlix}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">JS Ecom</h2>
            <h3>React JS / Tailwind / Firebase</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>Project</p>
            <h2 className="mb-2">Overview</h2>
            <p>
              This app was built using{" "}
              <span className="font-semibold text-teal-500">React JS </span> and
              is hosted on{" "}
              <span className="font-semibold text-teal-500">Firebase</span>. It
              has used The Movie Database (TMDB) API to fetch Movie, series,
              Shows, Documentaries. It is Netflix UI with basic functionalities.
              Users can view trailers of the shows when clicking on the show
              which is fetched from youtube using 2{" "}
              <span className="font-semibold text-teal-500">
                React Libraries
              </span>
              . This app is build using
              <span className="font-semibold text-teal-500">
                {" "}
                HTML, CSS, Javascript, ReactJs, Firebase
              </span>
              . Currently this app is developing and adding SignUp, Login, And
              payment gateway using{" "}
              <span className="font-semibold text-teal-500"> 'Strip'</span>.
            </p>

            <a
              href="https://github.com/fireclint/property-finder"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://property-finder-development.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">Live</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Google API
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> 
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default JavascriptEcommerce;
