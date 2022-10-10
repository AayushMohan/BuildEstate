import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="h-60 relative">
      <div className="border border-b-1" />
      <div className="flex text-3xl space-x-4 font-bold items-center p-10 mx-14">
        <Image src={logo} className="" />
        <h1 className="text-gray-700">
          <span className="text-indigo-600">Build</span>
          Estate
        </h1>
        <p className="text-base font-normal w-[300px] p-6">
          The shortest distance between paradise and the place you call home.
        </p>
      </div>
      <div className="border border-b-1 w-[238px] rotate-90 absolute bottom-1/2 right-[600px] " />

      <div></div>
    </div>
  );
};

export default Footer;
