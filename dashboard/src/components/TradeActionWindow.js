import React, { useState, useContext } from "react";
import axios from "axios";
import TradeContext from "./TradeContext";
import "./TradeActionWindow.css";

const TradeActionWindow = ({ uid, mode }) => {
  const { closeTradeWindow } = useContext(TradeContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleTradeClick = async () => {
    console.log(" Trade triggered:", uid, mode, stockQuantity, stockPrice);
    if (stockQuantity < 1 || stockPrice <= 0) {
      alert("Please enter valid quantity and price");
      return;
    }
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/newOrder`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: mode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },

          withCredentials: true,
        }
      );
      alert("Trade placed successfully");
    } catch (err) {
      console.error(" Trade error:", err);
      alert("Trade failed");
    }
    closeTradeWindow();
  };

  return (
    <div className="container" id="trade-window">
      <div className="header">
        <h3>
          Trade {uid}
          <button
            onClick={closeTradeWindow}
            style={{
              float: "right",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </h3>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={handleTradeClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>
          <button className="btn btn-grey" onClick={closeTradeWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeActionWindow;
