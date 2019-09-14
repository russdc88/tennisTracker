$(document).ready(function(){

	
	
	var count1 = 0;
	var count2 = 0;
	
	$(".forehand").click(function () {
		count1++
		$(".forehand").html(count1)
	})
	
	$(".backhand").click(function () {
		count2++
		$(".backhand").html(count2)
	})
	
	var backhandCount = $('.backhand');
	var forehandCount = $('.forehand');
	var submitData = $('#submit');


	
	
	$(submitData).on("click",function handleFormSubmit(event){
		event.preventDefault();
		
		var forehandValue = parseInt(forehandCount.html())
		
		var backhandValue = parseInt(backhandCount.html())
		console.log(typeof(forehandValue))
		console.log(forehandValue)

		submitPost({forehandValue,backhandValue})
	})


	
	
	function submitPost(Post) {
		$.post("/api/data", Post, function(res) {
			console.log(Post)
			console.log(res)
    });
  }
	
	
	
})