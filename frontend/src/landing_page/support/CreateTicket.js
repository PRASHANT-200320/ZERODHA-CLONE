import React from "react";
import "./Support.css";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 " style={{ color: "#666666" }}>
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-plus-circle mb-3" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="">Resident individual</a>
          <br />
          <a href="">Minor</a>
          <br />
          <a href="">Non Resident Indian (NRI)</a>
          <br />
          <a href="">Company, Partnership, HUF and LLP</a>
          <br />
          <a href="">Glossary</a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa-regular fa-user mb-3"></i> Your Zerodha Account
          </h4>
          <a href="">Your Profile</a>
          <br />
          <a href="">Account modification</a>
          <br />
          <a href="">
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <br />
          <a href="">Nomination</a>
          <br />
          <a href="">Transfer and conversion of securities</a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fas fa-chart-line mb-3"></i> Kite
          </h4>
          <a href="">IPO</a>
          <br />
          <a href="">Trading FAQs</a>
          <br />
          <a href="">Margin Trading Facility (MTF) and Margins</a>
          <br />
          <a href="">Charts and orders</a>
          <br />
          <a href="">Alerts and Nudges</a>
          <br />
          <a href="">General</a>
          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fas fa-piggy-bank mb-3"></i> Funds
          </h4>
          <a href="">Add money</a>
          <br />
          <a href="">Withdraw money</a>
          <br />
          <a href="">Add bank accounts</a>
          <br />
          <a href="">eMandates</a>

          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fas fa-warehouse mb-3"></i>
            Console
          </h4>
          <a href="">Portfolio</a>
          <br />
          <a href="">Corporate actions</a>
          <br />
          <a href="">Funds statement</a>
          <br />
          <a href="">Reports</a>
          <br />
          <a href="">Profile</a>
          <br />
          <a href="">Segments</a>

          <br />
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fas fa-hand-holding-usd mb-3"></i> Coin
          </h4>
          <a href="">Mutual funds</a>
          <br />
          <a href="">National Pension Scheme (NPS)</a>
          <br />
          <a href="">Fixed Deposit (FD)</a>
          <br />
          <a href="">Features on Coin</a>
          <br />
          <a href="">Payments and Orders</a>
          <br />
          <a href="">General</a>

          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
