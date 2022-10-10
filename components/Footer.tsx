import Image from "next/image";
import React from "react";
import logo from "../assets/logo.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="h-60 relative">
      <div className="border border-b-1" />
      <div className="flex text-3xl space-x-4 font-bold items-center p-10 mx-14">
        <Image src={logo} />
        <h1 className="text-gray-700">
          <span className="text-indigo-600">Build</span>
          Estate
        </h1>
        <p className="text-base font-normal w-[300px] p-6">
          The shortest distance between paradise and the place you call home.
        </p>
      </div>
      <div className="border border-b-1 w-[238px] rotate-90 absolute bottom-1/2 right-[600px] " />

      <div className="absolute right-1/3 top-4 flex mt-8 text-lg">
        <ul className="flex flex-col p-4 space-y-4">
          <li className="text-violet-600 cursor-pointer">Services</li>
          <li className="cursor-pointer">Email Marketing</li>
          <li className="cursor-pointer">Campaigns</li>
        </ul>
        <ul className="flex p-4 flex-col -right-40 absolute space-y-4">
          <li className="text-violet-600 cursor-pointer">About</li>
          <li className="cursor-pointer">Our Story</li>
          <li className="cursor-pointer">Benefits</li>
        </ul>
        <ul className="flex flex-col absolute p-4 -right-80 ">
          <li className="text-violet-600 cursor-pointer text-center">
            Follow Us
          </li>
          <li className="flex pt-4 space-x-4">
            <a href="#facebook">
              <img src="https://img.icons8.com/material-rounded/24/000000/facebook-f--v2.png" />
            </a>
            <a href="twitter">
              <img src="https://img.icons8.com/ios-glyphs/24/000000/twitter--v1.png" />
            </a>
            <a href="instagram">
              <img src="https://img.icons8.com/ios-glyphs/24/000000/instagram-new.png" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
