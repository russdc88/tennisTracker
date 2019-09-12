require('dotenv').config()

const { Pool, Client } = require('pg')
const connectionString = 
const pool = new Pool({
  connectionString: connectionString,
})
pool.query('CREATE TABLE test(', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString: connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})