$(document).ready(function(){
	jQuery('div.timeago').timeago();
	jQuery.timeago.settings.allowFuture = true;
	
	
	// var time = $('#timeTest').text(jQuery.timeago(new Date()));
	
	
	$('#tweet-controls').hide();
	$('.tweet-actions').hide();
	$('.stats').hide();
	$('.reply').hide();
	
	$('.tweet-compose').on('click', function(){
		$('#tweet-controls').show();
		$('.tweet-compose').css('height', '5em');
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
		
		$('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Blake H</strong><span class="username"> @blakeh</span><p class="tweet-text">' + $('.tweet-compose').val() + '</p><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/vklimenko.jpg" /></div></div><div class="timeTest  timeago time">' + new Date() + '</div></div></div></div>');
		
		$('.tweet-compose').val('');
		$('#tweet-controls').hide();
		$('.tweet-compose').css('height', '2.5em');
		var remaining = 140;
		var count = $('.tweet-compose').val().length;
		$('#char-count').text(remaining);
	});
	
	$('.tweet').on('mouseenter', function() {
		$('.tweet-actions',this).show();
	});
	
	$('.tweet').on('mouseleave', function() {
		$('.tweet-actions', this).hide();
	});
	

	var show = false;
	$('.tweet').on('click',function() {
		if(show === false){
			$('.stats', this).show();
			$('.reply', this).show();
			show = true;
		}
		else {
			$('.stats', this).hide();
			$('.reply', this).hide();
			show = false;
		}
	});
	
	
	
	
	






});