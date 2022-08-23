const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

//conected to postgres
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "signupsystemdb",
  password: "barcelona",
  port: 5432,
});

app.use(express.urlencoded({ extended: false }));

//endpoint to home page
app.get("/", (req, res) => {
  res.send("hello");
});

//endpoint to users json
app.get("/home", (req, res) => {
  pool.query("SELECT * FROM signup", (error, response) => {
    if (error) {
      throw error;
    }
    res.status(200).json(response.rows);
  });
});

// POST endpoint for signup
app.post("/users", async (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userCity = req.body.city;
  const userCountry = req.body.country;
  const usernames = req.body.username;
  const userpassword = req.body.password;

  console.log(req.body);
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
