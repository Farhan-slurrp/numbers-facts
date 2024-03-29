import Head from "next/head";
import { useState } from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Button from "@material-ui/core/Button";

const API_URL =
  "https://numbersapi.p.rapidapi.com/random/trivia?json=true&fragment=true&max=20&min=10";

const getRandomFact = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
    },
  });

  const data = await response.json();

  return data;
};

export const getServerSideProps = async () => {
  const data = await getRandomFact(API_URL);

  return {
    props: { data },
  };
};

const RandomTrivia = ({ data }) => {
  const [fact, setFact] = useState(data);

  const handleClick = async () => {
    const response = await fetch(
      "https://numbersapi.p.rapidapi.com/random/trivia?json=true&fragment=true&max=20&min=10",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        },
      }
    );

    const data = await response.json();
    setFact(data);
  };

  return (
    <>
      <Head>
        <title>Just Facts - Trivia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Did You Know?</h1>
        <FormatQuoteIcon
          style={{ color: "#fff", fontSize: "3em", marginTop: ".6em" }}
        />
        <h2>
          {fact.number} is {fact.text}.
        </h2>
        <FormatQuoteIcon style={{ color: "#fff", fontSize: "3em" }} />
        <Button
          variant="contained"
          style={{
            marginTop: "2em",
            fontFamily: "Montserrat",
            fontWeight: 700,
          }}
          onClick={() => handleClick()}
        >
          NEW FACT
        </Button>
      </main>

      <style jsx>{`
        main {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        h1 {
          text-align: center;
          font-family: "Montserrat", sans-serif;
          font-size: 2.3em;
          font-weight: 600;
          color: #ee7aff;
        }
        h2 {
          text-align: center;
          font-family: "Montserrat", sans-serif;
          font-size: 1.6em;
          padding: 0 2em;
          font-weight: 500;
          color: #fff;
        }
        .cards {
          display: flex;
          padding: 2em;
          justify-content: center;
          gap: 2.4em;
          flex-wrap: wrap;
        }
        @media only screen and (min-width: 988px) {
          h2 {
            padding-left: 7em;
            padding-right: 7em;
          }
        }
        @media only screen and (min-width: 1121px) {
          h2 {
            padding-left: 10em;
            padding-right: 10em;
          }
        }
        @media only screen and (min-width: 1241px) {
          h2 {
            padding-left: 16em;
            padding-right: 16em;
          }
        }
      `}</style>
    </>
  );
};

export default RandomTrivia;
