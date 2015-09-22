describe('when using a to-do list', function(){
	//test scope -hold items on the controller
	var scope = {};
	beforeEach(function(){
		module('todo');

		//inject	–	access	angular	controller
		inject(function($controller){
			//$controller	–	initialize	controller	with	test	scope
			$controller('TodoController',{$scope:scope});
		});
	});

	
	//First test
	it('should define a	list object', function(){
		expect(scope.list).toBeDefined();
	});

	//Second test
	it('expect have test in list object', function(){
		expect(scope.list[0]).toEqual('test');
	});

	//Third test
	it('expect have execute in list object', function(){
		expect(scope.list[1]).toEqual('execute');
	});

	//Fourth test
	it('expect have refactor in list object', function(){
		expect(scope.list[2]).toEqual('refactor');
	});

	describe('', function(){
		beforeEach(function(){
			scope.add('repeat');
		});

		it('should add item to last item in list', function(){
			var lastIndexOfList = scope.list.length - 1;
			expect(scope.list[lastIndexOfList]).toEqual('repeat');
		});
	});


});