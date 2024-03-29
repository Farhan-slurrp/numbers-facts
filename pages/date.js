import Head from "next/head";
import FindLayout from "../components/FindByValue";

const DateFact = () => {
  return (
    <>
      <Head>
        <title>Just Facts - Trivia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FindLayout type="date" />
    </>
  );
};

export default DateFact;
