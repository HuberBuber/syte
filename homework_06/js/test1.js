var a, b, c , s1, s2;

	a = prompt("please input value of a side", "");
	b = prompt("please input value of b side", "");
	c = prompt("please input value of c side", "");
 
if ((a <= 0) | (b <= 0) | (c <= 0)) {
	console.log('For data ' + a + ', ' + b + ', ' + c + ':' + ' Incorrect data');
} else if ((a == b) & (b == c) & (c == a)) {
	s1 = (a*a*Math.sqrt(3))/4;
	var f = s1.toFixed(2);
	console.log('For data ' + a + ', ' + b + ', ' + c + ':');
	console.log('"Type of triangle is equilateral triangle and square is "'  + f ); // equilateral triangle
} else if (a == c) {
	s2 = b*(Math.sqrt(a*a - (b*b/4)))/2;
	console.log('Type of triangle is isosceles triangle and square is ' + s2.toFixed(2)); // isosceles triangle
} else if (b == c) {
	s2 = a*(Math.sqrt(b*b - (a*a/4)))/2;
	console.log('Type of triangle is isosceles triangle and square is ' + s2.toFixed(2)); // isosceles triangle
} else if (a == b) {
	s2 = c*(Math.sqrt(a*a - (c*c/4)))/2;
	console.log('Type of triangle is isosceles triangle and square is ' + s2.toFixed(2)); // isosceles triangle
} else if (a*a == b*b + c*c){
	s2 = b*c/2;
	console.log('Type of triangle is right triangle and square is ' + s2.toFixed(2)); // right triangle
} else if (b*b == a*a + c*c){
	s2 = a*c/2;
	console.log('Type of triangle is right triangle and square is ' + s2.toFixed(2)); // right triangle
} else if (c*c == a*a + b*b){
	s2 = a*b/2;
	console.log('Type of triangle is right triangle and square is ' + s2.toFixed(2)); // right triangle
}



