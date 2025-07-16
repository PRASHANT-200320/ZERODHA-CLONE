// TradeContext.js
import React, { useState, createContext } from "react";
import TradeActionWindow from "./TradeActionWindow";

const TradeContext = createContext({
  openTradeWindow: () => {},
  closeTradeWindow: () => {},
});

export const TradeContextProvider = ({ children }) => {
  const [isTradeWindowOpen, setIsTradeWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [tradeMode, setTradeMode] = useState("BUY");

  const openTradeWindow = (uid, mode = "BUY") => {
    setSelectedStockUID(uid);
    setTradeMode(mode);
    setIsTradeWindowOpen(true);
  };

  const closeTradeWindow = () => {
    setIsTradeWindowOpen(false);
    setSelectedStockUID("");
    setTradeMode("BUY");
  };

  return (
    <TradeContext.Provider value={{ openTradeWindow, closeTradeWindow }}>
      {children}
      {isTradeWindowOpen && (
        <TradeActionWindow uid={selectedStockUID} mode={tradeMode} />
      )}
    </TradeContext.Provider>
  );
};

export default TradeContext;
