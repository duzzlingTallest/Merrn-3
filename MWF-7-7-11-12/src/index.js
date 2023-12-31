import "dotenv/config";
import express from "express";
import { Routes } from "./routers";
import cors from "cors";
import { dbConnection } from "./db";
import { AddAdmin, AddProductData } from "./db/addDefaultData";
import { updateOldUser, updateOldUser2 } from "./db/script";
import path from "path";
import GoogkleAuth from "./GoogleAuth/googleAuth";
import http from "http";

const app = express();
const server = http.createServer(app);

import { Server } from "socket.io";
import { cronJob } from "./functions/cronJob";
import { sendEmailTemp } from "./functions/emailService";
import passport from "passport";
import moment from "moment/moment";

const port = process.env.PORT || 3000;
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  }),
  (req, res) => {
    res.send("hello world");
  }
);
app.get("/", (req, res) => {
  res.send("login success....!");
});
app.get("/login", (req, res) => {
  res.send("login faild....!");
});

app.use(express.json());
app.use(cors());
app.use("/user", Routes.userRoute);
app.use("/product", Routes.productRoute);
app.use("/cart", Routes.cartRouter);
app.use("/wishlist", Routes.wishListRouter);
app.use("/order", Routes.orderRouter);
 
app.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  function (req, res) {
    console.log("req.user", req.user);
    // Successful authentication, redirect home.
    res.send("data found");
  }
);
const mno = "test2";
server.listen(port, () => {
  // updateOldUser();
  dbConnection();
  // cronJob();
  // sendEmailTemp();
  AddAdmin();
  AddProductData();
  console.log(`your server is running on http://localhost:${port}/`);
});

app.get("/msg", (req, res) => {
  const basePath = path.join(__dirname, "index.html");
  // console.log("basePath", basePath);
  res.sendFile(path.join(__dirname, "index.html"));
});

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("---User is online--->");
  socket.on("disconnect", () => {
    console.log("---User is offline--->");
  });
});
