import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <motion.div className="flex justify-around p-4 md:h-screen md:bg-gradient-to-b from-indigo-500">
      <div className="flex text-4xl font-bold items-center">
        <img
          src="https://img.icons8.com/nolan/64/b.png"
          className="h-10 w-10"
        />
        <h1 className="text-gray-700 md:block hidden">
          <span className="text-indigo-600">Build</span>
          Estate
        </h1>
      </div>

      <div className="flex flex-col space-x-4 md:flex-row space-y-10">
        <Link href="">Home</Link>
        <Link href="">How It's Work</Link>
        <Link href="">Agent</Link>
        <Link href="">Sales</Link>
      </div>
    </motion.div>
  );
};

export default Header;
