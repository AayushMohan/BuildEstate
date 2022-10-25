import Image from "next/image";
import React from "react";

type Props = {};

const Houses = (props: Props) => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <h1 className="text-4xl font-bold text-slate-500 text-center">
          Move to What Moves You
        </h1>
        <p className="text-md mx-12 text-center my-3 text-slate-500/60 font-medium">
          Keep calm & travel on
        </p>
      </div>
      <div className="flex justify-evenly">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            width={400}
            height={450}
            objectFit="cover"
            // objectPosition="center"
            priority
            className="rounded-2xl cards cursor-pointer"
          />

          <h2 className="text-center font-bold text-slate-500 m-4 text-xl">
            Enjoy the great cold
          </h2>
          <button className="border-2 hover:bg-indigo-500 hover:text-slate-100 cards p-3 mx-32 rounded-2xl">
            6,872 properties
          </button>
        </div>

        <div>
          <Image
            src="https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            width={400}
            height={450}
            objectFit="cover"
            objectPosition="center"
            priority
            className="rounded-2xl cards cursor-pointer"
          />

          <h2 className="text-center font-bold text-slate-500 m-4 text-xl">
            Pickup the earliest sunrise
          </h2>
          <button className="border-2 hover:bg-indigo-500 hover:text-slate-100 cards p-3 mx-32 rounded-2xl">
            6,872 properties
          </button>
        </div>

        <div>
          <Image
            src="https://images.unsplash.com/photo-1599777560450-e462cffc5368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            width={400}
            height={450}
            objectFit="cover"
            objectPosition="center"
            priority
            className="rounded-2xl cards cursor-pointer"
          />
          <h2 className="text-center font-bold text-slate-500 m-4 text-xl">
            Enjoy the amazing pool
          </h2>
          <button className="border-2 hover:bg-indigo-500 hover:text-slate-100 cards p-3 mx-32 rounded-2xl">
            6,872 properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Houses;
