import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";

const FindLayout = ({ type }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [trivia, setTrivia] = useState(null);

  const getTrivia = async () => {
    const res = await fetch(
      `https://numbersapi.p.rapidapi.com/${value}/${type}?json=true&fragment=true`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.API_KEY,
          "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const handleClick = async () => {
    const trivia = await getTrivia();
    if (trivia.message) {
      return setError(true);
    }
    console.log(trivia);
    setTrivia(trivia);
    setError(false);
  };

  return (
    <>
      <main>
        <h1>Find {type} Fact</h1>
        <div className="search">
          <input
            placeholder={
              type == "year"
                ? "Enter Year.."
                : type == "date"
                ? "Enter Date.. ( format: Month/Day )"
                : "Enter number.."
            }
            className="text-field"
            type={type == "date" ? "text" : "number"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="button" onClick={() => handleClick()}>
            <SearchIcon style={{ fontSize: "1.5em" }} />
            SEARCH
          </button>
        </div>
        {trivia && <h2>{trivia.text}</h2>}
        {error && <h2>Not Found</h2>}
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
          margin-top: 1em;
          text-transform: capitalize;
        }
        h2 {
          text-align: center;
          font-family: "Montserrat", sans-serif;
          font-size: 1.6em;
          padding: 1.2em 2em 0;
          font-weight: 500;
          color: #fff;
        }
        button {
          padding: 0.4em 1.3em;
          margin-left: 1em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.2em;
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 0.9em;
          border: none;
          cursor: pointer;
        }
        button:hover {
          background: #ccc;
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

export default FindLayout;
