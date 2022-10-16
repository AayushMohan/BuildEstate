import Image from "next/image";
import React from "react";
import dotted from "../assets/dotted.svg";
import dots from "../assets/dots.svg";
import WorkCards from "./WorkCards";
import { motion } from "framer-motion";

type Props = {};

const Work = (props: Props) => {
  return (
    <motion.div className="h-screen">
      <hr className="pb-8" />
      <div className="bg-slate-100 h-[400px] relative  p-20 rounded-[30px] m-10 text-left">
        <div className="absolute -top-10 right-1/4">
          <Image src={dotted} height={80} width={80} />
        </div>
        <h2 className="text-indigo-600 font-medium text-md">EHM. SO?</h2>
        <h1 className="text-4xl pt-2 text-gray-600 font-bold">What we do</h1>
        <p className="text-md text-slate-400 px-1 pt-2">
          Full Service Agents, Modern Technologies
        </p>
        <button className="py-3 px-7 bg-violet-200/60 rounded-2xl text-indigo-600 absolute right-24 -my-20">
          See more
        </button>
        <div className="absolute right-14 top-32">
          <Image src={dots} width={80} height={80} />
        </div>
        <WorkCards />
      </div>
    </motion.div>
  );
};

export default Work;
