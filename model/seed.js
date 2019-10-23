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

pool.query("CREATE TABLE groundstrokes(id SERIAL PRIMARY KEY, player_id INT REFERENCES tennis_player(id), forehand_count INT NOT NULL, backhand_count INT NOT NULL, add_count INT NOT NULL, middle_count INT NOT NULL, deuce_count INT NOT NULL, created_date DATE NOT NULL DEFAULT CURRENT_DATE)", (err, res) => {
	console.log(err,res);
	pool.end();

})

pool.query("CREATE TABLE serves(id SERIAL PRIMARY KEY, player_id INT REFERENCES tennis_player(id), deuce_wide_count INT NOT NULL, deuce_middle_count INT NOT NULL, deuce_tee_count INT NOT NULL, first_serve_count INT NOT NULL, second_serve_count INT NOT NULL, double_fault_count INT NOT NULL, ad_wide_count INT NOT NULL, ad_middle_count INT NOT NULL, ad_tee_count INT NOT NULL, created_date DATE NOT NULL DEFAULT CURRENT_DATE)", (err, res) => {
	console.log(err,res);
	pool.end();

})

