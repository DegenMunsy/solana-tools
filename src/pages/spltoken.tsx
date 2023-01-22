import type { NextPage } from "next";
import Head from "next/head";
import { SPLTokenView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div className=" flex flex-col h-screen justify-between">
      <Head>
        <title>DOJO MINT</title>
        <meta name="description" content="Solana tools to help you in the solana ecosystem" />
      </Head>
      <SPLTokenView />
    </div>
  );
};

export default Home;