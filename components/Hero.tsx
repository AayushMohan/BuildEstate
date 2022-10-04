import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex">
      <div className="p-10 md:relative">
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
        <div className="md:absolute z-50 text-slate-200 text-5xl font-medium md:top-1/3 md:right-1/3">
          <h1>Let's Find a house </h1>that's perfect for you
          <p>Search Confidently</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
