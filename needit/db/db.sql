CREATE TABLE users (
  id        SERIAL PRIMARY KEY,
  username      VARCHAR(30) NOT NULL,
  email     VARCHAR(30) NOT NULL,
  password varchar(100) not null,
  picture bytea,
  address varchar(120),
  postcode  VARCHAR(12),
  phone int,
  bio   VARCHAR(800)
);

insert into users (username, email, password, address, postcode, phone, bio) values ('vgl-bwk', 'virgil@bowak.com', 'encypted', '92 Passeig de Gracia', '08008', 666555555, 'I am just an average everyday normalguy' );
insert into users (username, email, password, address, postcode, phone, bio) values ('lili81', 'liliana@ramirez.com', 'encypted', '92 Passeig de Sant Joan', '08009', 666989898, 'I am just an average everyday normalgal' );

CREATE TABLE listings (
  id        SERIAL PRIMARY KEY,
  user_id      int references users(id),
  title     VARCHAR(120) NOT NULL,
  itemsqty int,
  picture bytea,
  location varchar(120),
  postcode  VARCHAR(12),
  status int,
  description   VARCHAR(1200)
);

insert into listings (user_id, title, total_items, location, postcode, status, description) values (3, 'Couch bed', 1, 'Passeig de Gracia', '08008', 2, 'A regular couch that turns into a bed. One of the springs collapsed, and the bar in the centre is kind of uncomfortable on your back, but you are still getting more than you paid for' )