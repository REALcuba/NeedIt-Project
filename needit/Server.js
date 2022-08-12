const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "needIt",
  password: "",
  port: 5432,
});

app.use(bodyParser.json());

app.get("/users", function (req, res) {
  pool.query("SELECT * FROM users", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/users/:username", function (req, res) {
  const userName = req.params.username;

  pool
    .query(`SELECT * FROM users WHERE users.username=$1`, [userName])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/listings", function (req, res) {
  pool.query("SELECT * FROM listings", (error, result) => {
    res.json(result.rows);
  });
});

app.get("/listings/:listingId", function (req, res) {
  const listingId = req.params.listingId;

  pool
    .query(`SELECT * FROM listings WHERE listings.id=$1`, [listingId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/listings/:category", function (req, res) {
  const category = req.params.category;

  pool
    .query(`SELECT * FROM listings WHERE listings.category=$1`, [category])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

/* missing endpoints (without chat)
listings/:category
listings/:title(includes method, turn to lowercase)
listings/:postcode
listings/:date (I'll modify the DB to add this row)
transactions
transactions/:id
transactions/:publisher_Id
transactions/:receiver_Id
transactions/:date
reviews/:id
reviews/:publisher_id
reviews/:receiver_id
reviews/receiver_id/:rating
*/

app.listen(port, () => {
  console.log(`needIt app listening on port ${port}`);
});
