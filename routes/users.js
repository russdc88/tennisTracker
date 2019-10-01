const db = require('../database')



module.exports = function(app){

	app.post("/api/data",db.createUser)
	app.get("/api/data",db.getUsers)
	app.post("/api/coach",db.createCoach)
}
