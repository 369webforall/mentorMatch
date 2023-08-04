DROP TABLE IF EXISTS Users CASCADE;
CREATE TABLE Users (
  userID SERIAL PRIMARY KEY,
  First_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  mentor_id INT,
  mentee_id INT,
  sub VARCHAR(255)
);

DROP TABLE IF EXISTS Mentor_exp CASCADE;
CREATE TABLE Mentor_exp (
  mentor_exp SERIAL PRIMARY KEY,
  mentor_id INT NOT NULL,
  skillset VARCHAR(50),
  years_of_exp INT,
  exp_description VARCHAR(255),
  FOREIGN KEY (mentor_id) REFERENCES Users (userID)
);

DROP TABLE IF EXISTS Mentees_interest CASCADE;
CREATE TABLE Mentees_interest (
  mentee_interest SERIAL PRIMARY KEY,
  mentees_id INT NOT NULL,
  name_of_subject VARCHAR(50),
  subject_description VARCHAR(255),
  FOREIGN KEY (mentees_id) REFERENCES Users (userID)
);

DROP TABLE IF EXISTS Mentor CASCADE;
CREATE TABLE Mentor (
  mentor_id SERIAL PRIMARY KEY,
  mentor_exp INT NOT NULL,
  profile_description VARCHAR(255),
  FOREIGN KEY (mentor_exp) REFERENCES Mentor_exp (mentor_exp)
);

DROP TABLE IF EXISTS Mentees CASCADE;
CREATE TABLE Mentees (
  mentee_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  mentee_interested INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES Users (userID),
  FOREIGN KEY (mentee_interested) REFERENCES Mentees_interest (mentee_interest)
);

DROP TABLE IF EXISTS Connections CASCADE;
CREATE TABLE Connections (
  connection_id SERIAL PRIMARY KEY,
  mentor_id INT NOT NULL,
  mentee_id INT NOT NULL,
  FOREIGN KEY (mentor_id) REFERENCES Mentor (mentor_id),
  FOREIGN KEY (mentee_id) REFERENCES Mentees (mentee_id)
);
