require("dotenv").config();

const port = process.env.SERVER_PORT || 3000;

const express = require("express");
const session = require("express-session");
const DB = require("./models").DB;

const userTypeRoutes = require("./routes/userType.routes");

const app = express();


// app.use(express.json());
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
// }));


app.use("/usertype", userTypeRoutes);


DB.sync({ alter: true }).then(() => 
{
  console.log("Database synced");
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
});
