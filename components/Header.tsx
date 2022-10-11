import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { PlayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import logo from "../assets/logo.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <motion.div className="flex justify-around p-4 m-4 items-center">
      <div className="flex text-3xl space-x-4 font-bold items-center">
        <Image src={logo} className="" />
        <h1 className="text-gray-700">
          <span className="text-indigo-600">Build</span>
          Estate
        </h1>
      </div>

      {/* Need to Add Framer Motion */}
      <div className="flex space-x-8 text-gray-500">
        <Link href="">Home</Link>
        <Link href="">How It's Work</Link>
        <Link href="">Agent</Link>
        <Link href="">Sales</Link>
      </div>

      <div className="flex space-x-4">
        <button className="px-10 py-2 bg-slate-100 text-gray-500 rounded-xl relative">
          USD
          <PlayIcon className="rotate-90 h-3 w-3 absolute top-1/3 right-4" />
        </button>

        <button className="bg-indigo-600 text-gray-100 px-4 py-3 rounded-xl">
          Contact Us
        </button>
      </div>
    </motion.div>
  );
};

export default Header;
