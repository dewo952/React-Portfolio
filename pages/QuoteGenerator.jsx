import Head from "next/head";
import Image from "next/image";

import React from "react";
import Quote from "../public/assets/projects/QuoteGenerator.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const QuoteGenerator = () => {
  return (
    <>
      <Head>
        <title>Quote Generator</title>
        <meta name="description" content="QuoteGenerator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={Quote}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Quote Generator</h2>
            <h3>Vanilla Javascript / CSS / HTML</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This app was built using Vanilla Javascript, HTML, CSS. Users are
              able to generate random Quotes and tweet it on their twitter
              handle. You will be able to share quote with your friends and
              community via Twitter which is integrated with the Twitter Rest
              API. This app is plain and simple to use. This app is build by
              integrating proxy server with an open API to fetch quotes for
              users.
            </p>
            <a
              href="https://github.com/dewo952/Quote-Generator"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://dewo952.github.io/Quote-Generator/"
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
                  <RiRadioButtonFill className="pr-1" /> HTML
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Vanilla Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Node Js
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

export default QuoteGenerator;
