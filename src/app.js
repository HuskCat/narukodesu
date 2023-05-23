require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.port || 3000;
const ip = require("ip");
const auth = require("./routes/auth");
const session = require("express-session");
const passport = require("passport");
const discordStrategy = require("./strategies/discordstrategy");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dashboard", (req, res) => {
  res.json({ msg: "OK", status: 200 });
});

app.use(
  session({
    secret: "",
    cookie: { maxAge: 60000 * 60 * 24 },
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth);

app.listen(port, () => {
  console.log(`Server start on http://${ip.address()}:${port}`);
});
