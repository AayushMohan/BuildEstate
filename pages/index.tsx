import type { NextPage } from "next";
import Head from "next/head";
import Apartment from "../components/Apartment";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Houses from "../components/Houses";
import Work from "../components/Work";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Build Estate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section id="header">
        <Hero />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="houses">
        <Houses />
      </section>

      <section id="Apartment">
        <Apartment />
      </section>
    </div>
  );
};

export default Home;
