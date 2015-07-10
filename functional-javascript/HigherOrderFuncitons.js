function repeat(operation,num){
	for (var index = 0; index < num; index++) {
		operation();	
	}
}
module.exports = repeat;