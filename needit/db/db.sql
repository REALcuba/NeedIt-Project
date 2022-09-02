
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
  title     VARCHAR(360) NOT NULL,
  itemsqty int,
  picture bytea,
  location varchar(120),
  postcode  VARCHAR(12),
  status int,
  description   VARCHAR(1200)
);

insert into listings (user_id, title, total_items, location, postcode, status, description) values (3, 'Couch bed', 1, 'Passeig de Gracia', '08008', 2, 'A regular couch that turns into a bed. One of the springs collapsed, and the bar in the centre is kind of uncomfortable on your back, but you are still getting more than you paid for' )

create table transactions (
id        SERIAL PRIMARY KEY,
listing_id int references listings(id),
publisher_id int references users(id),
receiver_id int references users(id),
exchange_date date
);

insert into transactions (listing_id, publisher_id, receiver_id, exchange_date) values (6, 2, 4, '2022/11/08');
insert into transactions (listing_id, publisher_id, receiver_id, exchange_date) values (3, 1, 5, '2022/11/08');

create table reviews (
id        SERIAL PRIMARY KEY,
listing_id int references listings(id),
publisher_id int references users(id),
receiver_id int references users(id),
message varchar(1200),
rating int )

insert into reviews (listing_id, publisher_id, receiver_id, message, rating) values (3, 1, 5, 'This couch looks really nice, but its killing my back', 3);