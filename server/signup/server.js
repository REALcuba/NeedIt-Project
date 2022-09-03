const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const flash = require("express-flash");
const passport = require("passport");

require('dotenv').config();

console.log(process.env) 
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: "secret",

    resave: false,

    saveUninitialized: false,
  })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

//conected to postgres
const pool = new Pool({
  user: "PGUSER",
  host: "PGHOST",
  database: "PGDATABASE",
  password: "PGPASSWORD",
  port: "PGPORT",
 DATABASE_URL:'http://${{ PGUSER }}:${{ PGPASSWORD }}@${{ PGHOST }}:${{ PGPORT }}/${{ PGDATABASE }}',

  ssl: true
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
  // hashedpassword
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userCity = req.body.city;
  const userCountry = req.body.country;
  const usernames = req.body.username;
  const userpassword = hashedPassword;

  //check the name if repated
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

//Login endpoint
app.post("/users/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check if the user exsit
  pool.query(
    "SELECT * FROM signup WHERE email = $1",
    [email],
    (err, results) => {
      if (err) {
        throw err;
      }
      console.log(results.rows);

      if (results.rows.lenght > 0) {
        const user = results.rows[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err;
          }

          if (isMatch) {
            res.send(null, user);
          } else {
            res.send(null, false, { message: "Password is incorect" });
          }
        });
      } else {
        res.send(null, false, { message: "Email is not registered" });
      }
    }
  );
});

//server port
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
