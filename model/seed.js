require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'russ',
  host: 'localhost',
  database: 'tennis',
  password: process.env.password,
  port: 5431,
})

pool.query("CREATE TABLE tennis_player(id SERIAL PRIMARY KEY,coach_id INT REFERENCES coaches(id), player_first_name VARCHAR(20) NOT NULL, player_last_name VARCHAR(20) NOT NULL, hand_preference VARCHAR(20) NOT NULL,backhand_preference VARCHAR(20) NOT NULL, height SMALLINT NOT NULL, gender VARCHAR(10) NOT NULL, created_date DATE NOT NULL DEFAULT CURRENT_DATE)", (err, res) => {
	console.log(err, res);
	pool.end();

});

