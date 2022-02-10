import Layout from "@/components/organisms/layout";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.css";
import Hero from "@/components/organisms/hero";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextal - Next Starter Template</title>
        <meta
          name="description"
          content="NextJs starter template using TypeScript and Tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
    </>
  );
};

export default Home;
