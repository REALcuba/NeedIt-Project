CREATE DATABASE signupsystemdb;

CREATE TABLE signup (
  id        SERIAL PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  email     VARCHAR(100) UNIQUE NOT NULL,
  city      varchar(100) NOT NULL,
  country   varchar(100) NOT NULL,
  postcode  VARCHAR(12)  NOT NULL,
  username varchar(120) UNIQUE NOT NULL,
  password  varchar(50),

)

insert into signup (name, email, city, country, postcode, username, password) values ('Fatma', 'fatma@gmail.com', 'zagreb', 'croatia', '10000', 'jsjnjhshnon')