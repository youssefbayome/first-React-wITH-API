import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

export default function Home() {
  return (
    <>
      <div className="main-btn">
        <Link className="link-to" to="/nasaPhoto">
          See into the stars
        </Link>
      </div>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
    </>
  );
}
