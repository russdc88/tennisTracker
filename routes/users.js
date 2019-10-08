const db = require('../model/database')



module.exports = function(app){

	app.post("/api/data",db.createUser)
	app.get("/api/data", db.getUsers)
	app.post("/api/coach",db.createCoach)
	app.post("/api/login", db.verifyLogin),
	app.post("/api/signout", db.logOut)
}
