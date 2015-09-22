var calculator = {
	multiply : function(a, b){
		return a * b;
	}
};

function multipleTest1(){
	//Test
	var result = calculator.multiply(3,3);
	//Asert result is expected
	if(result == 9){
		console.log("Test Passed");
	}else{
		console.log("Test Failed");
	}
}

multipleTest1();