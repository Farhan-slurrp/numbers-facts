import React from "react";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Link href="/">
          <nav position="static">
            <ContactSupportIcon style={{ color: "white", fontSize: "2em" }} />
            <h6 className="title">Numbers Facts</h6>
          </nav>
        </Link>
        {children}
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: 7vmax auto;
        }
        nav {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0.4em 2em;
          cursor: pointer;
        }
        .title {
          color: white;
          font-size: 1.5em;
          font-family: "Helvetica Neue", "Arial", "sans-serif",
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          font-weight: 500;
          margin-left: 0.2em;
        }
      `}</style>
    </>
  );
}
