$(document).ready(function(){
	
	$('#tweet-controls').hide();
	
	$('.tweet-compose').on('click', function(){
		$('#tweet-controls').show();
		$(this).css('height', '5em');
	});
	
	$('.tweet-compose').on('keyup keydown keypress', function(){
		var remaining = 140;
		var count = $('.tweet-compose').val().length;
		$('#char-count').text(remaining-count);
		
		if(count > 129){
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', 'black');
		}
		
		if(count > 140){
			$('#tweet-submit').prop('disabled', true);
		} else {
			$('#tweet-submit').prop('disabled', false);
		}
	});
	
	
	$('#tweet-submit').on('click', function(){
		$('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Blake H</strong><span class="username">@blakeh</span><p class="tweet-text">' + $('.tweet-compose').val() + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/vklimenko.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div></div></div>');
			
	});
	
	
	






});