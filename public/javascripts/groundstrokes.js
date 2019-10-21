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
		
		$(".forehand").click(function () {
			count1++
			$(".forehand").html(count1)
		})
		
		$(".backhand").click(function () {
			count2++
			$(".backhand").html(count2)
		})
		
		$(".addSide").click(function () {
			count3++
			$(".addSide").html(count3)
		})
		
		$(".deuceSide").click(function () {
			count4++
			$(".deuceSide").html(count4)
		})
		
		$(".middle").click(function () {
			count5++
			$(".middle").html(count5)
		})
		
		
		var backhandCount = $('.backhand');
		var forehandCount = $('.forehand');
		var addCount = $('.addSide');
		var deuceCount = $('.deuceSide');
		var middleCount = $('.middle');

		var submitData = $('#submit');

		var groundstrokes = {}
		
		$(submitData).on("click",function handleFormSubmit(event){
			event.preventDefault();
			
			groundstrokes.forehandValue = parseInt(forehandCount.html())
			groundstrokes.backhandValue = parseInt(backhandCount.html())
			groundstrokes.addValue = parseInt(addCount.html())
			groundstrokes.deuceValue = parseInt(deuceCount.html())
			groundstrokes.middleValue = parseInt(middleCount.html())

			groundstrokes.playerID = $('#tennis-player').children(":selected").data("player")
			

			console.log(groundstrokes)
			
			submitPost(groundstrokes)
		})
	}


	
	
	function submitPost(Post) {
		$.post("/api/groundstrokes", Post, function(res) {

			if (res.status == 200){
				$('#groundstrokeModal').modal('show')
			}
		
		});
		
	
  }
	
// 	$.get("/api/data",function(data){
// 		var forehandArray = []
// 		for(var i=0; i < data.length; i++){
// 			forehandArray.push(data[i].forehandcount)
// 			console.log(forehandArray)
// 			forehandPercentage = parseInt(data[i].forehandcount/(data[i].forehandcount + data[i].backhandcount)*100)
// 			backhandPercentage = parseInt(data[i].backhandcount/(data[i].forehandcount + data[i].backhandcount)*100)
// 			deucePercentage = parseInt(data[i].deucesidecount/(data[i].deucesidecount + data[i].addsidecount)*100)
// 			addPercentage = parseInt(data[i].addsidecount/(data[i].deucesidecount + data[i].addsidecount)*100)

// 			var row = $('<tr>');
// 			var rowHeader = $('<th>')
// 			rowHeader.attr("scope","row")
// 			rowHeader.text(i+1)
// 			var playerColumn = $('<td>').text(data[i].tennisplayer)
// 			forehandColumn = $('<td>').text(data[i].forehandcount + ' (' + forehandPercentage + '%)')
// 			backhandColumn = $('<td>').text(data[i].backhandcount + ' (' + backhandPercentage + '%)')
// 			deuceColumn = $('<td>').text(data[i].deucesidecount + ' (' + deucePercentage + '%)')
// 			addColumn = $('<td>').text(data[i].addsidecount + ' (' + addPercentage + '%)')


// 			$('#data-list').append(row)
// 			row.append(rowHeader)
// 			row.append(playerColumn)
// 			row.append(forehandColumn)
// 			row.append(backhandColumn)
// 			row.append(deuceColumn)
// 			row.append(addColumn)

// 		}
// 		console.log(ss.mean(forehandArray))

// 	})
	
})