$(document).ready(function(){

var player = {}

$('#player-signup').on('click', function handleFormSubmit(event){

	event.preventDefault()

	var height = 12 * parseInt($('#height-feet').val().trim()) + parseInt($('#height-inches').val().trim())

	player.firstName = $('#player-first-name').val().trim()
	player.lastName = $('#player-last-name').val().trim()
	player.swingHand = $('#swinging-hand').val().trim()

	player.backHand = $('#backhand-preference').val().trim()

	player.height = height

	player.gender = $('#gender').val().trim()

	createPlayer(player)


})

function createPlayer (newplayer) {
	console.log(newplayer)

	$.post('/api/player',newplayer,function(res){
		console.log(res)
	})

}



})