$(document).ready(function(){

$("#verifyLogin").on('click', function handleFormSubmit(event){
	event.preventDefault();

	Coach = {}

	Coach.username = $("#verifyUser").val().trim()

	Coach.password = $('#verifyPassword').val().trim()

	verify(Coach)



})

})

function verify(Post) {
	$.post('/api/login', Coach,
	function(res){
		console.log(res)
 
		if (res.redirect) {
			window.location.pathname = res.redirect; 
		}

		if (res.status == 400) {
			var message = $("#error-message").html ("Incorrect Username or password, please try again")
			message.css('color','white')
			
		}

	})
}