

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'russ',
  host: 'localhost',
  database: 'tennis',
  password: '',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM test1 ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM test1 WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
	const { forehandCount, backhandCount } = request.body
	console.log(request.body)

  pool.query('INSERT INTO test1 (forehandCount, backhandCount) VALUES ($1, $2)', [request.body.forehandValue, request.body.backhandValue], (error, results) => {
    if (error) {
      throw error
		}
		console.log(results)
    response.status(201).send(`User added with ID: ${results}`)
  })
}


const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { forehandCount, backhandCount } = request.body

  pool.query(
    'UPDATE test1 SET forehandCount = $1, backhandCount = $2 WHERE id = $3',
    [forehand, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM test1 WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}