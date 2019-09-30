$(document).ready(function(){

	
	
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	
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

	
	var backhandCount = $('.backhand');
	var forehandCount = $('.forehand');
	var addCount = $('.addSide');
	var deuceCount = $('.deuceSide');
	var submitData = $('#submit');
	var tennisPlayer = $('#tennis-player')


	
	
	$(submitData).on("click",function handleFormSubmit(event){
		event.preventDefault();
		
		var forehandValue = parseInt(forehandCount.html())
		var backhandValue = parseInt(backhandCount.html())
		var addValue = parseInt(addCount.html())
		var deuceValue = parseInt(deuceCount.html())
		var player = tennisPlayer.val().trim()
		
		
		console.log(typeof(forehandValue))
		console.log(forehandValue,backhandValue,addValue,deuceValue,player)

		submitPost({forehandValue,backhandValue,addValue,deuceValue,player})
	})


	
	
	function submitPost(Post) {
		$.post("/api/data", Post, function(res) {
			console.log(Post)
			console.log(res)
		});
		
		forehandCount.html(0)
		backhandCount.html(0)
		addCount.html(0)
		deuceCount.html(0)
		tennisPlayer.val("")
		window.location.reload()
  }
	
	$.get("/api/data",function(data){
		var forehandArray = []
		for(var i=0; i < data.length; i++){
			forehandArray.push(data[i].forehandcount)
			console.log(forehandArray)
			forehandPercentage = parseInt(data[i].forehandcount/(data[i].forehandcount + data[i].backhandcount)*100)
			backhandPercentage = parseInt(data[i].backhandcount/(data[i].forehandcount + data[i].backhandcount)*100)
			deucePercentage = parseInt(data[i].deucesidecount/(data[i].deucesidecount + data[i].addsidecount)*100)
			addPercentage = parseInt(data[i].addsidecount/(data[i].deucesidecount + data[i].addsidecount)*100)

			var row = $('<tr>');
			var rowHeader = $('<th>')
			rowHeader.attr("scope","row")
			rowHeader.text(i+1)
			var playerColumn = $('<td>').text(data[i].tennisplayer)
			forehandColumn = $('<td>').text(data[i].forehandcount + ' (' + forehandPercentage + '%)')
			backhandColumn = $('<td>').text(data[i].backhandcount + ' (' + backhandPercentage + '%)')
			deuceColumn = $('<td>').text(data[i].deucesidecount + ' (' + deucePercentage + '%)')
			addColumn = $('<td>').text(data[i].addsidecount + ' (' + addPercentage + '%)')


			$('#data-list').append(row)
			row.append(rowHeader)
			row.append(playerColumn)
			row.append(forehandColumn)
			row.append(backhandColumn)
			row.append(deuceColumn)
			row.append(addColumn)

		}
		console.log(ss.mean(forehandArray))

	})
	
})