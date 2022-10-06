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
        <Image
          src="https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
          width={300}
          height={500}
          objectFit="cover"
          objectPosition="center"
          priority
          className="rounded-2xl cards cursor-pointer"
        />
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
          width={300}
          height={500}
          objectFit="cover"
          objectPosition="center"
          priority
          className="rounded-2xl cards cursor-pointer"
        />
        <Image
          src="https://images.unsplash.com/photo-1599777560450-e462cffc5368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVybiUyMGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          width={300}
          height={500}
          objectFit="cover"
          objectPosition="center"
          priority
          className="rounded-2xl cards cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Houses;
