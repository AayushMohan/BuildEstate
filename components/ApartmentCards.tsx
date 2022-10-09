import Image from "next/image";
import React from "react";

type Props = {};

const ApartmentCards = (props: Props) => {
  return (
    <div>
      <div className="mt-14 space-x-6 flex justify-around relative">
        <div className="default-card rounded-xl relative">
          <div className="p-2 flex">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              width={400}
              height={350}
              objectFit="fill"
              className="rounded-xl"
            />
          </div>
          <div className="absolute bottom-0  mt-1 left-5">
            <h1 className="text-2xl font-medium text-slate-500 text-left">
              The Grand Estate
            </h1>
            <p className="my-2 text-slate-500/90 font-light text-left">
              Moscow, 121B
            </p>

            <span className="absolute -right-16 bottom-2 text-xl text-indigo-700">
              $521
            </span>
          </div>
        </div>

        <div className="default-card rounded-xl relative">
          <div className="p-2 flex">
            <Image
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              width={400}
              height={350}
              objectFit="fill"
              className="rounded-xl"
            />
          </div>
          <div className="absolute bottom-0 left-6">
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

        <div className="default-card rounded-xl relative">
          <div className="p-2 flex">
            <Image
              src="https://images.unsplash.com/photo-1631456754232-1a3278e76deb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
              width={400}
              height={350}
              objectFit="fill"
              className="rounded-xl"
            />
          </div>
          <div className="absolute bottom-0 left-6">
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

        <div className="default-card rounded-xl relative">
          <div className="p-2 flex">
            <Image
              src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              width={400}
              height={350}
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div className="absolute bottom-0 left-6">
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
      </div>
    </div>
  );
};

export default ApartmentCards;
