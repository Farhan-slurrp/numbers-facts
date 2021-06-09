import Head from "next/head";
import Card from "../components/Card";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import TodayIcon from "@material-ui/icons/Today";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";

export default function Home() {
  return (
    <>
      <Head>
        <title>Just Facts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Choose A Card..</h1>
        <div className="cards">
          <Card
            text="Trivia Fact"
            background="#039dfc"
            color="#111"
            icon={
              <QuestionAnswerIcon style={{ fontSize: "2em", color: "#111" }} />
            }
            route="trivia"
          />
          <Card
            text="Year Fact"
            background="#03b800"
            color="#eee"
            icon={
              <CalendarTodayIcon style={{ fontSize: "2em", color: "#eee" }} />
            }
            route="year"
          />
          <Card
            text="Math Fact"
            background="#f700ad"
            icon={
              <FormatListNumberedIcon
                style={{ fontSize: "2em", color: "#f7f300" }}
              />
            }
            color="#f7f300"
            route="math"
          />
          <Card
            text="Date Fact"
            background="#e7f700"
            color="#004af7"
            icon={<TodayIcon style={{ fontSize: "2em", color: "#004af7" }} />}
            route="date"
          />
        </div>
      </main>

      <style jsx>{`
        main {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        h1 {
          text-align: center;
          font-family: "Montserrat", sans-serif;
          font-size: 2.3em;
          font-weight: 600;
          color: #ee7aff;
        }
        .cards {
          display: flex;
          padding: 2em;
          justify-content: center;
          gap: 2.4em;
          flex-wrap: wrap;
        }
        @media only screen and (min-width: 988px) {
          .cards {
            padding-left: 7em;
            padding-right: 7em;
          }
        }
        @media only screen and (min-width: 1121px) {
          .cards {
            padding-left: 10em;
            padding-right: 10em;
          }
        }
        @media only screen and (min-width: 1241px) {
          .cards {
            padding-left: 20em;
            padding-right: 20em;
          }
        }
      `}</style>
    </>
  );
}
