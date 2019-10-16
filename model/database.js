require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'russ',
  host: 'localhost',
  database: 'tennis',
  password: process.env.password,
  port: 5431,
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
	const { forehandCount, backhandCount, addCount, deuceCount, player } = request.body
	var newPlayer = request.body
	console.log(request.body)

  pool.query('INSERT INTO test1 (forehandCount, backhandCount, addSideCount, deuceSideCount,tennisplayer) VALUES ($1, $2, $3, $4, $5)', [newPlayer.forehandValue, newPlayer.backhandValue, newPlayer.addValue, newPlayer.deuceValue, newPlayer.player], (error, results) => {
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



const createCoach = (request, response) => {

	var newCoach = request.body
	console.log(request.body)

  pool.query('INSERT INTO coaches (first_name, last_name, user_name, password, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6)', [newCoach.firstName, newCoach.lastName, newCoach.userName, newCoach.password, newCoach.email,newCoach.phone], (error, results) => {
    if (error) {
      throw error
		}
		console.log(results)
    response.status(201).send(`User added with ID: ${results}`)
	})
}

const createPlayer = (req, res) => {

	var newPlayer = req.body
	newPlayer.coach_id = req.session.user.id
	console.log(newPlayer)

  pool.query('INSERT INTO tennis_player (coach_id, player_first_name,player_last_name, hand_preference, backhand_preference, height, gender) VALUES ($1, $2, $3, $4, $5, $6, $7)', [newPlayer.coach_id,newPlayer.firstName, newPlayer.lastName, newPlayer.swingHand, newPlayer.backHand, newPlayer.height, newPlayer.gender], (error, results) => {
    if (error) {
      throw error
		}
		console.log(results)
    res.status(201).send(`Player added with ID: ${res}`)
	})
}

const verifyLogin = (req, res) => {

	console.log(req.body)


	pool.query('SELECT * FROM coaches WHERE user_name = $1 AND password = $2', [req.body.username, req.body.password], (error, results) => {
		if (error) {
			throw error
		}
		if (results) {

			console.log(results)
			

			req.session.authenticated = true;
			req.session.user = results.rows[0];
			console.log(req.session)


			res.send({status:200, redirect: '/main'}); 
		}

		
	})
}

const logOut = (req, res) => {

	console.log(req.session.user)

	pool.query('SELECT * FROM coaches WHERE id = $1',[req.session.user.id], (error, results)=> {
		if (error) {
			throw error
		}
		if(results){
			console.log (results)

			req.session.authenticated = false;
			res.send({status:200, redirect: '/'})
		}
	})
}


const findPlayers = (req, res) => {
  pool.query('SELECT * FROM tennis_player WHERE coach_id = $1',[req.session.user.id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}




module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
	deleteUser,
	createCoach,
	createPlayer,
	verifyLogin,
	logOut,
	findPlayers,
}