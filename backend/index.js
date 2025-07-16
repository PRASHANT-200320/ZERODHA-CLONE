require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const axios = require("axios");


const AuthRoute = require("./routes/AuthRoute");
const { userVerification } = require("./middlewares/AuthMiddleware");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrderModel } = require("./model/OrderModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();



// Middleware
app.use(
  cors({
    origin: [
      "https://your-frontend.vercel.app",
      "https://your-dashboard.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Auth Routes
app.use("/", AuthRoute);

// ----------------- Routes -----------------

// Get Holdings (Protected)
app.get("/allHoldings", userVerification, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({ userId: req.user.id });
    res.json(allHoldings);
  } catch (err) {
    console.error("Fetch error:", err);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch holdings" });
  }
});

// Get Positions (Protected)
app.get("/allPositions", userVerification, async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({ userId: req.user.id });
    res.json(allPositions);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch positions" });
  }
});

// Place Order (Buy/Sell)
app.post("/newOrder", userVerification, async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    const newOrder = new OrderModel({
      name,
      qty,
      price,
      mode,
      userId: req.user.id,
    });
    await newOrder.save();

    if (mode === "BUY") {
      const newHolding = new HoldingsModel({
        name,
        qty,
        avg: price,
        price,
        net: "0%",
        day: "0%",
        boughtAt: new Date(),
        userId: req.user.id,
      });
      await newHolding.save();
      return res
        .status(200)
        .json({ success: true, message: "Buy recorded successfully" });
    }

    if (mode === "SELL") {
      const holdings = await HoldingsModel.find({
        name,
        userId: req.user.id,
      }).sort({ boughtAt: 1 });
      const totalAvailable = holdings.reduce((sum, h) => sum + h.qty, 0);

      if (totalAvailable < qty) {
        return res
          .status(400)
          .json({ success: false, message: "Not enough quantity to sell" });
      }

      let remainingQty = qty;
      for (let holding of holdings) {
        if (remainingQty === 0) break;

        const sellQty = Math.min(holding.qty, remainingQty);
        holding.qty -= sellQty;
        remainingQty -= sellQty;

        if (holding.qty === 0) {
          await HoldingsModel.deleteOne({ _id: holding._id });
        } else {
          await holding.save();
        }
      }

      return res
        .status(200)
        .json({ success: true, message: "Sell executed successfully" });
    }

    return res
      .status(400)
      .json({ success: false, message: "Invalid trade mode" });
  } catch (error) {
    console.error("Order error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get current user info (Protected)
app.get("/get-user-id", userVerification, async (req, res) => {
  try {
    const UserModel = require("./model/UserModel");
    const user = await UserModel.findById(req.user.id);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    res.json({ id: user._id, email: user.email, fullName: user.fullName });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching user" });
  }
});

// Test Protected Route
app.get("/protected", userVerification, (req, res) => {
  res.json({ success: true, userId: req.user.id });
});

// ----------------- MongoDB & Server Start -----------------

mongoose
  .connect(uri)
  .then(() => {
    console.log(" MongoDB connected");
    app.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection failed:", err);
  });

// Global error handler
app.use((err, req, res, next) => {
  // console.error(" Global error:", err);
  res.status(500).json({ message: "Internal error" });
});




app.get("/logout", (req, res) => {
  res.clearCookie("token").json({ success: true, message: "Logged out" });
});


















// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

// const userId = "68712fd2cb7a1b9e6bb59d95";

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//        userId:"68712fd2cb7a1b9e6bb59d95",
//          boughtAt: new Date(),
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//       userId: "68712fd2cb7a1b9e6bb59d95", 
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });
