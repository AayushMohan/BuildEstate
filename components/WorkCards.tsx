import React from "react";
import { motion } from "framer-motion";

type Props = {};

const WorkCards = (props: Props) => {
  return (
    <motion.div className="mt-14 -mx-14 flex justify-around">
      <div className="default-card">
        <div className=" bg-violet-200 rounded-full w-16 flex p-4 my-8">
          <img src="https://img.icons8.com/sf-regular-filled/48/4338ca/topic.png" />
        </div>
        <h1 className="text-2xl font-medium text-slate-500">Communication</h1>
        <p className="text-sm mx-12 text-center my-2 text-slate-500/80 font-medium">
          Single point of contact, in sync with the tools you use, We speak your
          language.
        </p>
      </div>

      <div className="default-card">
        <div className=" bg-violet-200 rounded-full w-16 flex p-4 my-8">
          <img src="https://img.icons8.com/sf-regular-filled/48/4338ca/keyhole-shield.png" />
        </div>
        <h1 className="text-2xl font-medium text-slate-500">Reliability</h1>
        <p className="text-sm mx-12 text-center my-2 text-slate-500/80 font-medium">
          We keep our promises, provide upfront timelines and bring
          predictability
        </p>
      </div>

      <div className="default-card">
        <div className=" bg-violet-200 rounded-full w-16 flex p-4 my-8">
          <img src="https://img.icons8.com/ios-filled/48/4338ca/fantasy.png" />
        </div>
        <h1 className="text-2xl font-medium text-slate-500">Quality First</h1>
        <p className="text-sm mx-12 text-center my-2 text-slate-500/80 font-medium">
          Quality First. All projects are backed by our fanatic support & 100%
          satisfaction guaranteed.
        </p>
      </div>

      <div className="default-card">
        <div className=" bg-violet-200 rounded-full w-16 flex p-4 my-8">
          <img src="https://img.icons8.com/material-rounded/48/4338ca/user-location.png" />
        </div>
        <h1 className="text-2xl font-medium text-slate-500">Families</h1>
        <p className="text-sm mx-12 text-center my-2 text-slate-500/80 font-medium">
          Rent a beautiful house for your family. Choose from flats in societies
          and invalid apartments
        </p>
      </div>
    </motion.div>
  );
};

export default WorkCards;
