var bookBuilder = function(
	var resultBook = {
		id:	1,
		author:	'Any Author',
		dateTime:  new DateTime()
	};

	this.build	=	function(){
		return	resultBook;
	};
	this.setAuthor	=	function(author){
		resultBook.author =	author;
		return this; //Make	the	function	fluent	so	that	calls	can	be	chained
	};

	this.setDateTime	=	function(dateTime){
		resultBook.dateTime	=	dateTime;
		return	this;
	};
);

/* 

	var	builtBook	=	bookBuilder.setAuthor('Tim	Chaplin')
	.setDateTime(new	Date())
	.build();
*/