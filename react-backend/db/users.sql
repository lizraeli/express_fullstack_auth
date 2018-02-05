DROP DATABASE IF EXISTS userlist;
CREATE DATABASE userlist;

\c userlist;

CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR,
  password_digest VARCHAR,
  hobbies TEXT
);

/* tyler, password: 123456 */

INSERT INTO users (username, password_digest, hobbies)
  VALUES ('Tyler', '$2a$10$brAZfSmByFeZmPZ/MH5zne9YDhugjW9CtsBGgXqGfix0g1tcooZWq', 'swimming')