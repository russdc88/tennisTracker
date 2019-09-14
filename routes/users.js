const db = require('../database')



module.exports = function(app){

	app.post("/api/data",db.createUser)
}
