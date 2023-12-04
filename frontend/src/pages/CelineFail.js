import React from "react";
import Spline from "@splinetool/react-spline";
import logoImg from "../assets/images/Logo-wht.png";
import backgroundGif from "../assets/images/glitch.gif";
import "../App.css";

export { CelineFail };

function CelineFail() {
  const backgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `url(${backgroundGif}) lightgray 50% `,
    mixBlendMode: "multiply",
    zIndex: 2,
  };

  const backgroundSolid = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(27, 26, 26, 0.8)",
    mixBlendMode: "plus-darker",
    zIndex: 2,
  };

  return (
    <div className={`is-dark`}>
      <img className="logoimg" src={logoImg} alt="Logo" />
      <h2 style={{ color: "white" }}>
        Product is <span>NOT AUTHENTIC</span>
      </h2>
      <div className="splinewrap">
        <Spline scene="https://prod.spline.design/ArSASTuBcyQr0wjY/scene.splinecode" />
      </div>
      <div style={backgroundSolid}></div>
      <div style={backgroundStyle}></div>
      <div className="detailsButton">
        <h3 style={{ color: "white" }}>
          {"For more information contact seller"}
        </h3>
      </div>
      <div className="space-small"></div>
    </div>
  );
}
