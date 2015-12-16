var counter = 0;
var GEN_TEXT = "Number of times you've clicked 'generate': ";

$(document).ready(function() {
	init();
	enable();

});

function init(){
	var $el = $('.container');
	$el.append("<button class='gen-button'>Generate Row</button>");
	$el.append("<h4 class='gen-text'>" + GEN_TEXT + "</h4>");
}

function enable(){
	$('.container').on('click', '.gen-button', appendDOM);
	$('.container').on('click', '.del-button', delRow);
	$('.container').on('click', '.chg-button', chgRow);

}

function appendDOM(){
	incrGen();
	$('.container').append("<div class='button-box'></div>");
	var $el = $('.container').children().last();
	$el.append("<button class='del-button'>Delete</button>");
	$el.append("<button class='chg-button'>Change</button>");
}

function incrGen(){
	counter++;
	$('.gen-text').text(GEN_TEXT + counter);
}

function delRow(){
	$(this).parent().remove();
}

function chgRow(){
	$(this).parent().toggleClass('highlight');
}