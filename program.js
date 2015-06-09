var result = new Number();
process.argv.forEach(function(el,index){
	if (index>1) {
		result += +el;
	}
});
console.log(result);
