const db = require('../model/database')



module.exports = function(app){

	app.post("/api/groundstrokes",db.addGroundstrokes)
	app.get("/api/data", db.getUsers)
	app.post("/api/coach",db.createCoach)
	app.post("/api/login", db.verifyLogin),
	app.post("/api/signout", db.logOut)
	app.post("/api/player",db.createPlayer)
	app.get('/api/getplayer',db.findPlayers)
}
