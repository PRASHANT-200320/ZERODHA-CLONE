import React from "react";
import "./about.css";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5  border-top ">
        <h1 className=" text-center ">Pepole</h1>
      </div>
      <div
        className="row p-3   text-muted fs-6"
        style={{ lineHeight: "1.7", fontSize: "16px" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5 className="mt-5">Nithin Kamath</h5>
          <p className="text-gray">Founder, CEO</p>
        </div>
        <div className="col-6 p-3 first-col">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="https://nithinkamath.me/">Homepage</a> /{" "}
            <a href="https://tradingqna.com/u/nithin/summary">TradingQnA</a> /
            <a href="https://x.com/Nithin0dha">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
