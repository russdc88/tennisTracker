$(document).ready(function(){

var coach = {};

$('#signup').on('click', function handleFormSubmit(event){
	event.preventDefault();
	
	coach.firstName = $('#first-name').val().trim();
	
	coach.lastName = $('#last-name').val().trim();
	
	coach.userName = $('#user-name').val().trim();
	
	coach.password = $('#password').val().trim()
	
	coach.email = $('#email').val().trim()
	
	coach.phone = $('#phone').val().trim()

	console.log(coach)


	submitCoach(coach)
	
	
})

function submitCoach(Post) {
	$.post('/api/coach', Post, function(res){
		console.log(res)
	})
}

})