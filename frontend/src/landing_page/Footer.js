import React from "react";
import "./Footer.css";


function Footer() {
  return (
    <footer style={{ background: "#fbfbfb" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              className="mb-3"
              style={{ width: "50%" }}
            />
            <p className="copyright text-grey mb-1">
              &copy; 2010 - 2025, Zerodha Broking Ltd.
            </p>
            <p className="copyright text-grey mb-0">All rights reserved.</p>
            <ul className="social">
              <li>
                <a href="https://twitter.com/zerodhaonline">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://facebook.com/zerodha.social">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/zerodhaonline/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/zerodha">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <hr />
            <ul className="social">
              <li>
                <a href="https://www.youtube.com/@zerodhaonline">
                  {" "}
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
                  {" "}
                  <i className="fa-brands fa-square-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="https://t.me/zerodhain">
                  {" "}
                  <i className="fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col footer-links">
            <p className="nav-head">company</p>
            <a href="">About</a>
            <br />
            <a href="">Philosophy</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">dha Cares (CSR)</a>
            <br />
            <a href="">Zerodha.tech</a>
            <br />
            <a href="">Open source</a>
          </div>
          <div className="col footer-links">
            <p className="nav-head"> support</p>

            <a href="">Contact us </a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">How to file a complaint?</a>
            <br />
            <a href="">Status of your complaints</a>
            <br />
            <a href="">Bulletin</a>
            <br />
            <a href="">Circular</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">Downloads</a>
          </div>
          <div className="col footer-links">
            <p className="nav-head">Account</p>
            <a href="">Open demat account</a>
            <br />
            <a href="">Minor demat account</a> <br />
            <a href="">NRI demat account</a> <br />
            <a href="">Commodity</a> <br />
            <a href="">Dematerialisation</a> <br />
            <a href="">Fund transfer</a> <br />
            <a href="">MTF</a> <br />
            <a href="">Referral program</a>
          </div>
          <div className="col footer-links">
            <p className="nav-head">Quick links</p>
            <a href=""> Upcoming IPOs</a>
            <br />
            <a href=""> Brokerage charges</a>
            <br />
            <a href=""> Market holidays</a>
            <br />
            <a href=""> Economic calendar</a>
            <br />
            <a href=""> Calculators</a>
            <br />
            <a href=""> Markets</a>
            <br />
            <a href=""> Sectors</a>
          </div>
        </div>
        <div className="mt-5 text-muted smallprint" style={{ fontSize: "10.4px ", color:"#9b9b9b" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
      <div className="footer-graveyard-links text-center mb-3">
			<ul>
				<li>
					<a rel="nofollow" href="https://nseindia.com">NSE</a>
				</li>
				<li>
					<a rel="nofollow" href="https://www.bseindia.com/">BSE</a>
				</li>
				<li>
					<a rel="nofollow" href="https://www.mcxindia.com/">MCX</a>
				</li>
				<li>
					<a href="https://zerodha.com/terms-and-conditions/">Terms &amp; conditions</a>
				</li>
				<li>
					<a href="https://zerodha.com/policies-and-procedures/">Policies &amp; procedures</a>
				</li>
				<li>
					<a href="https://zerodha.com/privacy-policy/">Privacy policy</a>
				</li>
				<li>
					<a href="https://zerodha.com/disclosure/">Disclosure</a>
				</li>
				<li>
					<a href="https://zerodha.com/investor-attention/">For investor's attention</a>
				</li>
				<li>
					<a href="https://zerodha.com/tos/investor-charter/">Investor charter</a>
				</li>
			</ul>
		</div>
    </footer>
  );
}

export default Footer;
