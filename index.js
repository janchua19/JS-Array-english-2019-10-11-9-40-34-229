// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
Array.isArray(a); // result: false
Array.isArray(b); // result: true

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0; i < 5; i++)
{
	a[i] = a[i]*2;
}

var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
for (var i = 0; i < colors.length; i++)
{ console.log(colors[i] + " ") }
// case 2 output: 'Red+Green+White+Black'
for (var i = 0; i < colors.length; i++)
{ 
	console.log(colors[i]);
	if(i < colors.length - 1)
	{	console.log("+")	}
}
// case 3 output: 'Red,Green,White,Black'
for (var i = 0; i < colors.length; i++)
{ 
	console.log(colors[i]);
	if(i < colors.length - 1)
	{	console.log(",")	}
}


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(a.sort(function(a, b) {	return b - a;	}));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var s1 = 1;
var s2 = 0;
var freq;
for (var i=0; i<a.length; i++)
{
	s2=0;
	for (var j=i; j<a.length; j++)
	{
		if (a[i] == a[j])
		{	s2++;	}
		if (s1 < s2)
        {	s1 = s2;
			freq = a[i];}
        }
}
console.log(freq);
