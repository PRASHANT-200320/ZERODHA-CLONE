import React from "react";
import "./Universe.css";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="p-5 text-center">The Zerodha Universe</h1>
        <p className="mb-5 center">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <a href="https://www.zerodhafundhouse.com/">
            <img
              src="media/images/zerodhafundhouse.png"
              className="img-fluid"
            />
            <p className="text-small text-muted ">
              Our asset management venture
              <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="https://sensibull.com/">
            <img src="media/images/sensibullLogo.svg" className="img-fluid" />
            <p className="text-small text-muted ">
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="https://www.tijorifinance.com/ideas-dashboard/">
            <img src="media/images/tijori.svg" className="img-fluid" />
            <p className="text-small text-muted">
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="https://www.streak.tech/home">
            <img src="media/images/streakLogo.png" className="img-fluid" />
            <p className="text-small text-muted">
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="https://smallcase.zerodha.com/">
            <img src="media/images/smallcaseLogo.png" className="img-fluid" />
            <p className="text-small text-muted">
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
          <a href="https://joinditto.in/">
            <img src="media/images/dittoLogo.png" className="img-fluid" />
            <p className="text-small text-muted">
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </a>
        </div>

        <a href="/signup">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup up for free
          </button>
        </a>
      </div>
    </div>
  );
}

export default Universe;
