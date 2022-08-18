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
  let query = "SELECT * FROM listings";
  if (req.query.title)
    query = query + " " + `WHERE listings.title='${req.query.title}'`;
  if (req.query.category)
    query = query + " " + `WHERE listings.category='${req.query.category}'`;
  if (req.query.postcode)
    query = query + " " + `WHERE listings.postcode='${req.query.postcode}'`;
  console.log(query);
  pool.query(query, (error, result) => {
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

app.get("/listings/category/:category", function (req, res) {
  const category = req.params.category;

  pool
    .query(`SELECT * FROM listings WHERE listings.category=$1`, [category])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/transactions", function (req, res) {
  let query = "SELECT * FROM transactions";
  if (req.query.publisher_id)
    query =
      query +
      " " +
      `WHERE transactions.publisher_id='${req.query.publisher_id}'`;
  if (req.query.receiver_id)
    query =
      query + " " + `WHERE transactions.receiver_id='${req.query.receiver_id}'`;
  if (req.query.exchange_date)
    query =
      query +
      " " +
      `WHERE transactions.exchange_date='${req.query.exchange_date}'`;
  pool.query(query, (error, result) => {
    res.json(result.rows);
  });
});

app.get("/transactions/:transactionId", function (req, res) {
  const transactionId = req.params.transactionId;

  pool
    .query(`SELECT * FROM transactions WHERE transactions.id=$1`, [
      transactionId,
    ])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/reviews/:reviewId", function (req, res) {
  const reviewId = req.params.reviewId;

  pool
    .query(`SELECT * FROM reviews WHERE reviews.id=$1`, [reviewId])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/reviews/publisher_id/:publisher_id", function (req, res) {
  const publisher_id = req.params.publisher_id;

  pool
    .query(`SELECT * FROM reviews WHERE reviews.publisher_id=$1`, [
      publisher_id,
    ])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

app.get("/reviews/receiver_id/:receiver_id", function (req, res) {
  const receiver_id = req.params.receiver_id;

  pool
    .query(`SELECT * FROM reviews WHERE reviews.receiver_id=$1`, [receiver_id])
    .then((result) => res.json(result.rows))
    .catch((e) => console.error(e));
});

/* missing endpoints (without chat)
listings/title/:title(includes method, turn to lowercase)
listings/:date (I'll modify the DB to add this row)
reviews/:id
reviews/:publisher_id
reviews/:receiver_id
reviews/receiver_id/:rating
*/

app.listen(port, () => {
  console.log(`needIt app listening on port ${port}`);
});
