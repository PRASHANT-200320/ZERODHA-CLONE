import React from "react";
import "./Support.css";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="https://kite.zerodha.com/connect/login?api_key=supportportal&sess_id=OKI4Jyp4AGXD3VDs4LpNCg6YCqizUWR0">
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a <br />
            ticket
          </h1>
          <input placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..." />
          <br />
          <a href="http://localhost:3001/signup">Track account opening</a>
          <a href="https://kite.zerodha.com/connect/login?api_key=console&sess_id=0DarBKInweZv6KXAjm64iLGIatl13i8w">
            Track segment activation
          </a>
          <a href="https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co">
            Intraday margins
          </a>
          <br />
          <a href="https://kite.trade/docs/kite/">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="https://zerodha.com/marketintel/bulletin/419005/quarterly-settlement-of-funds-july-2025">
                Quarterly Settlement of Funds - July 2025
              </a>
            </li>
            <li>
              <a href="https://zerodha.com/marketintel/bulletin/418412/exclusion-of-fo-contracts-on-8-securities-from-august-29-2025">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
