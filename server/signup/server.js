const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const generateJWT = require("./generateJWT");
const authenticate = require("./authenticate");

require("dotenv").config();

console.log(process.env);
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(cors()); // enable CORS

//conected to postgres
const pool = new Pool({
  user: "realcuba",
  host: "frankfurt-postgres.render.com",
  database: "needit",
  password: "Pi60WLDNGirv0prz2r6QEhroGG2YiTsH",
  port: 5432,
  ssl: true,
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
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // requstting data
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

          .then(() => res.send({ message: "user created" }))
          .catch((error) => console.log("Something is wrong " + error));
      } else {
        // Repeated name
        res.status(400).send(`user with name  ${userName} already exist`);
      }
    })
    .catch((error) => console.log("error validator user exit" + error));
});

//Login endpoint
app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await pool
      .query(`SELECT * FROM signup WHERE email ='${email}'`)
      .then((result) => result.rows)
      .catch((e) => e);

    console.log(user);
    if (user.length === 0) {
      return res
        .status(401)
        .json({ error: "Invalid Credential", isAuthenticated: false });
    }

    const isValidPassword = await bcrypt.compare(password, user[0].password);

    if (!isValidPassword) {
      return res
        .status(401)
        .json({ error: "Email or Password incorrect", isAuthenticated: false });
    }
    console.log(user[0].id);
    const jwtToken = generateJWT(user[0].id);

    return res
      .status(200)
      .send({
        message: " You are logged in!",
        jwtToken,
        isAuthenticated: true,
      });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

// user authorization
app.post("/auth", authenticate, (req, res) => {
  try {
    res
      .status(200)
      .send({ message: " You are logged in!", isAuthenticated: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message, isAuthenticated: false });
  }
});

//server port
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
