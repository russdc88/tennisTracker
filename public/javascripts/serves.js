$(document).ready(function(){

	$.get('/api/getplayer', function (data){
		console.log(data)
		for(var i = 0; i < data.length;i++){
			var option = $('<option>')

			option.attr("data-player", data[i].id)

			option.text(data[i].player_first_name + " " + data[i].player_last_name)
			
			$('#tennis-player').append(option)
		}
		collectData()
	})


	function collectData() {

		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var count4 = 0;
		var count5 = 0;
		var count6 = 0;
		var count7 = 0;
		var count8 = 0;
		var count9 = 0;
		
var deuceWide = $('.deuce-wide')
var deuceMiddle = $('.deuce-middle')
var deuceTee = $('.deuce-tee')
var firstServe = $('.first-serve')
var secondServe = $('.second-serve')
var doubleFault = $('.double-fault')
var adWide = $('.add-wide')
var adMiddle = $('.ad-middle')
var adTee = $('.ad-tee')

var submitData = $('#submit')

deuceTee.click(function(){
	count1++
	deuceTee.html(count1)
})

firstServe.click(function(){
	count2++
	firstServe.html(count2)
})

deuceWide.click(function(){
	count3++
	deuceWide.html(count3)
})

deuceMiddle.click(function(){
	count4++
	deuceMiddle.html(count4)
})

secondServe.click(function(){
	count5++
	secondServe.html(count5)
})

doubleFault.click(function(){
	count6++
	doubleFault.html(count6)
})

adWide.click(function(){
	count7++
	adWide.html(count7)
})

adMiddle.click(function(){
	count8++
	adMiddle.html(count8)
})

adTee.click(function(){
	count9++
	adTee.html(count9)
})


 

		var serves = {}
		
		$(submitData).on("click",function handleFormSubmit(event){
			event.preventDefault();
			
			serves.deuce_tee = parseInt(deuceTee.html())

			serves.deuce_wide = parseInt(deuceWide.html())

			serves.deuce_middle = parseInt(deuceMiddle.html())

			serves.first_serve = parseInt(firstServe.html())

			serves.second_serve = parseInt(secondServe.html())

			serves.double_fault = parseInt(doubleFault.html())

			serves.ad_tee = parseInt(adTee.html())

			serves.ad_wide = parseInt(adWide.html())

			serves.ad_middle = parseInt(adMiddle.html())

			serves.playerID = $('#tennis-player').children(":selected").data("player")
			

			console.log(serves)
			
			submitPost(serves)
		})
	}


	
	
	function submitPost(Post) {
		$.post("/api/serves", Post, function(res) {

			if (res.status == 200){
				$('#serveModal').modal('show')
			}
		
		});
		
	
  }

})