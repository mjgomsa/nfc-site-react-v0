import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { purseData } from "../data/purseData.js";
import celineLogo from "../assets/images/celineLogo.png";
import logoSml from "../assets/images/logo-wht-2.png";
import applPay from "../assets/images/applPay.png";
import celineImg from "../assets/images/celine-img.png";
import logoImg from "../assets/images/Logo-wht.png";
import arrow from "../assets/images/downPurple.png";
import "../App.css";

export { CelineSucc };

function CelineSucc() {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };
  return (
    <div>
      <img className="logoimg" src={logoImg} alt="Logo" />
      <h2>
        Product is <span>AUTHENTIC</span>
      </h2>
      <div className="splinewrap">
        <Spline scene="https://prod.spline.design/ArSASTuBcyQr0wjY/scene.splinecode" />
      </div>
      <div className="detailsButton">
        <h3>{"View Details"}</h3>
        <img className="sml-img" src={arrow} alt="Logo"></img>
        <br></br>
      </div>
      <div className="space-small"></div>
      <div className="mainContainer">
        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          onClick={handleClick}
        >
          <div className="cardFront">
            <div className="cardHeader">
              <img className="productLogo" src={celineLogo} alt="Celine Logo" />
              <img className="antheaLogo" src={logoSml} alt="Anthea Logo" />
            </div>
            <div className="cardContent">
              <div className="cardRow">
                <h4>{"SNID"}</h4>
                <h5>{purseData.celine.snid}</h5>
              </div>
              <div className="cardRow">
                <h4>{"Creation"}</h4>
                <div className="cardColumn">
                  <h5>{purseData.celine.creation.company}</h5>
                  <h5>{purseData.celine.creation.place}</h5>
                  <h5>{purseData.celine.creation.collection}</h5>
                </div>
              </div>
              <div className="cardRow">
                <h4>{"Purchase"}</h4>
                <div className="cardColumn">
                  <h5>{purseData.celine.purchase.retailer}</h5>
                  <h5>{purseData.celine.purchase.date}</h5>
                  <h5>{purseData.celine.purchase.transaction}</h5>
                </div>
              </div>
              <div className="cardRow">
                <h4>{"Ownership"}</h4>
                <div className="cardColumn">
                  {purseData.celine.ownership.map((item, index) => (
                    <h5 key={index}>{item}</h5>
                  ))}
                </div>
              </div>
              <div className="cardRow">
                <h4>{"Ins. Policy"}</h4>
                {!purseData.celine.insurance.hasIns ? (
                  <h5>NOT INSURED</h5>
                ) : (
                  <div className="cardColumn">
                    <h5>{purseData.celine.insurance.insCompCode}</h5>
                    <h5>{purseData.celine.insurance.policyNum}</h5>
                    <h5>
                      {purseData.celine.insurance.effectiveDate +
                        "-" +
                        purseData.celine.insurance.expirationDate}
                    </h5>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="cardBack">
            <div className="cardHeader">
              <img className="productLogo" src={celineLogo} alt="Celine Logo" />
              <img className="antheaLogo" src={logoSml} alt="Anthea Logo" />
            </div>
            <img
              className="imgBackCard"
              src={celineImg}
              alt="Back of the card"
            />
            <h5 className="imgCaption">UV Skin By: Artist Name</h5>
          </div>
        </div>

        <img className="applPay sml-img" src={applPay} alt="Apple Pay icon" />
      </div>
      <div className="space-large"></div>
    </div>
  );
}
