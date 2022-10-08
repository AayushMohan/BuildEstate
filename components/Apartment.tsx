import Image from "next/image";
import React from "react";
import dotted from "../assets/dotted.svg";
import ApartmentCards from "./ApartmentCards";

type Props = {};

const Apartments = (props: Props) => {
  return (
    <div className="h-screen">
      <div className="bg-slate-100 h-[600px] relative  p-20 rounded-[30px] m-10 text-left">
        <div className="absolute -top-10 right-1/4">
          <Image src={dotted} height={80} width={80} />
        </div>
        <h2 className="text-indigo-600 font-medium text-md">Come Now!</h2>
        <h1 className="text-4xl pt-2 text-gray-600 font-bold">
          Live Who You Are
        </h1>
        <p className="text-md text-slate-400 px-1 pt-2">
          Own the Home Meant for You.
        </p>
        <button className="py-3 px-7 bg-violet-200/60 rounded-2xl text-indigo-600 absolute right-24 -my-20">
          Recently Added
        </button>
        <button className="py-3 px-7 bg-violet-200/60 rounded-2xl text-indigo-600 absolute right-24 -my-20">
          See more
        </button>
        <div className="absolute -right-10 top-10">
          <Image src={dotted} width={80} height={80} />
        </div>
        <div>
          <ApartmentCards />
        </div>
      </div>
    </div>
  );
};

export default Apartments;
