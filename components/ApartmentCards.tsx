import Image from "next/image";
import React from "react";

type Props = {};

const ApartmentCards = (props: Props) => {
  return (
    <div>
      <div className="mt-14 space-x-10 flex justify-around relative">
        <div className="default-card rounded-xl">
          <div className="p-2 flex">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              width={400}
              height={350}
              objectFit="fill"
              className="rounded-xl"
            />
          </div>
          <div className="absolute bottom-0  mt-1 left-10">
            <h1 className="text-2xl font-medium text-slate-500 text-left">
              The Grand Estate
            </h1>
            <p className="my-2 text-slate-500/90 font-light text-left">
              Moscow, 121B
            </p>

            <span className="absolute -right-10 bottom-2 text-xl text-indigo-700">
              $521
            </span>
          </div>
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
            Rent a beautiful house for your family. Choose from flats in
            societies and invalid apartments
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCards;
