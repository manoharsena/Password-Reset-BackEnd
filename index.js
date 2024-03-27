import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./Routers/user.router.js";
import connectDB from "./Database/dbConfig.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send(`<h1 style=text-align:center>Welcome to Password Reset Backend</h1>
  <h3 style=text-align:center><u>Base URL:</u> https://password-reset-backend-16ua.onrender.com/</h3>
  <ul>
  <li>
  <h5>POST: Use the endpoint to <mark>/api/user/register</mark> To create a new user</h5>
  </li>
  <li>
  <h5>POST: Use the endpoint to <mark>/api/user/login</mark> To login in to user dashboard</h5>
  </li>
  <li>
  <h5>POST: Change the endpoint to <mark>/api/user/forgotPassword</mark> To request password reset link to your mail Id</h5>
  </li>
  <li>
  <h5>PUT: Change the endpoint to <mark>/api/user/resetPassword</mark> To reset password for a user</h5>
  </li>
  <li>
  <h5>GET: Change the endpoint to <mark>/api/user/list-all-users</mark>To show all users</h5>
  </li>
  </ul>
  `);
});

app.listen(port, () => {
  console.log(`App is listening to the port - `, port);
});
