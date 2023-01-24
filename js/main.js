var a=parseInt(prompt("enter the age of A"));
var b=parseInt(prompt("enter the age of B"));
var c=parseInt(prompt("enter the age of C"));

if(a<b){
	if(b<c){
		console.log("C is elder")
	}
	else{
		console.log("B is elder")
	}
}
else if(a<c){
	console.log("C is elder")
}
else{
	console.log("A is elder")
}
