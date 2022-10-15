import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <motion.div className="flex flex-col h-screen">
      <div className="px-10  md:relative">
        <Image
          src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1481&q=80"
          className="rounded-[30px] blur-[2px] brightness-75"
          alt=""
          width={1400}
          height={500}
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="md:absolute z-50 text-slate-200 text-5xl text-center leading-tight font-semibold md:top-1/3 md:right-1/3">
          <h1>Let's find a home </h1>that's perfect for you
        </div>
        <p className="md:absolute text-gray-300 text-sm py-12 px-3 md:top-2/4 md:right-1/3">
          Search Confidently with your trusted source of homes of sale rent
        </p>

        <div className="absolute md:top-72 md:right-80 py-14 -px-20">
          <form action="" className="relative">
            <input
              type="search"
              placeholder="Enter an address, neighborhood, city, or ZIP code"
              className="w-[800px] items-center px-4 py-3.5 rounded-2xl focus:outline-none"
            />
            <button className="absolute text-gray-200 right-0 top-0 flex items-center my-1.5 mx-1 py- px-4 bg-indigo-600 rounded-2xl">
              <MagnifyingGlassIcon className="h-10 p-2" />
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <h2 className="text-gray-300 mt-8 font-bold text-center">
          Trusted by 20,000+ companies
        </h2>

        <div className="p-4 flex items-center justify-evenly">
          <img
            src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/272/Google_2015_logo-512.png"
            alt=""
            className="h-36"
          />
          <h2 className="text-4xl font-bold text-gray-800">Booking.com</h2>

          <div className="flex items-center justify-center space-x-2">
            <img
              src="https://cdn0.iconfinder.com/data/icons/logos-22/24/professional-tool-basecamp--tool-basecamp-professional-512.png"
              alt="BaseCamp"
              className="h-14"
            />
            <h2 className="text-3xl font-bold text-gray-800">BaseCamp</h2>
          </div>

          <img
            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png"
            alt=""
            className="h-36"
          />

          <img
            src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
            alt=""
            className="h-28 mt-3"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
