$(document).ready(function(){

	function showModal() {
		$('#exampleModal').modal('show')
	}

var coach = {};

$('#signup').on('click', function handleFormSubmit(event){
	event.preventDefault();
	
	coach.firstName = $('#first-name').val().trim();
	
	coach.lastName = $('#last-name').val().trim();
	
	coach.userName = $('#user-name').val().trim();
	
	coach.password = $('#password').val().trim()
	
	coach.email = $('#email').val().trim()
	
	coach.phone = $('#phone').val().trim()

	


	submitCoach(coach)
	
	
})

function submitCoach(Post) {
	$.post('/api/coach', Post, function(res){
		if (res.status == 200){
			showModal()
		}
	})
}

})