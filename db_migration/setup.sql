CREATE TABLE users (
  id          int NOT NULL AUTO_INCREMENT,
  login       VARCHAR(30),
  password    VARCHAR(100),
  token       VARCHAR(100),
  user_role   VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE posts (
  user_id         int,
  id              int NOT NULL AUTO_INCREMENT,
  image           VARCHAR(100),
  description     VARCHAR(100),
  PRIMARY KEY (id)
);
