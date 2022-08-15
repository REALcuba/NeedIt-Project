const express = require("express");
const { Pool, Client } = require("pg");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());

//conected to postgres
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "signupsystemdb",
  password: "barcelona",
  port: 5432,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

//endpoint to home page
app.get("/", (req, res) => {
  res.render("index");
});

//endpoint to users json
app.get("/users", (req, res) => {
  pool.query("SELECT * FROM signup", (error, response) => {
    if (error) {
      throw error;
    }
    res.status(200).json(response.rows);
  });
});

//rendering register
app.get("/users/register", (req, res) => {
  res.render("register");
});

//rendering login
app.get("/users/login", (req, res) => {
  res.render("login");
});

//rendering dasboard
app.get("/users/dashboard", (req, res) => {
  res.render("dashboard", { user: "conor" });
});

// POST endpoint for signup
app.post("/users/register", (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userCity = req.body.city;
  const userCountry = req.body.country;
  const usernames = req.body.username;
  const userpassword = req.body.password;

  const checkName = "SELECT * FROM signup WHERE name = $1";
  const insertNewUsers =
    "INSERT INTO signup (name,email,city,country,username,password)  VALUES ($1,$2,$3,$4,$5,$6)";
  pool
    .query(checkName, [userName])
    .then((results) => {
      if (results.rows.length === 0) {
        pool
          .query(insertNewUsers, [
            userName,
            userEmail,
            userCity,
            userCountry,
            usernames,
            userpassword,
          ])
          .then(() => res.send("user created"))
          .catch((error) => console.log("Something is wrong " + error));
      } else {
        // Repeated name
        res.status(400).send(`user with name  ${userName} already exist`);
      }
    })
    .catch((error) => console.log("error validator user exsit" + error));
});

//server port
app.listen(PORT, () => {
  console.log(`server ruuning on port ${PORT}`);
});
