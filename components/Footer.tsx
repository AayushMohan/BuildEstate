import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="h-80">
      <hr className="" />
      <div className="flex text-3xl space-x-4 font-bold items-center">
        <Image src={logo} className="" />
        <h1 className="text-gray-700">
          <span className="text-indigo-600">Build</span>
          Estate
        </h1>
      </div>
    </div>
  );
};

export default Footer;
