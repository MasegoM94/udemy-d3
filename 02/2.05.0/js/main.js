/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

var svg = d3.select("#chart-area").append("svg")
				.attr("width", 500)
				.attr("height", 400);


svg.append("ellipse")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("rx", 70)
	.attr("ry",25)
	.attr("fill", "grey");

svg.append("ellipse")
	.attr("cx", 300)
	.attr("cy", 300)
	.attr("rx", 50)
	.attr("ry", 70)
	.attr("fill", "yellow");

svg.append("line")
	.attr("x1", 185)
	.attr("y1",5 )
	.attr("x2", 230)
	.attr("y2", 40)
	.attr("stroke", "blue")
	.attr("stroke-width", 5);	


//x1="185" y1="5" x2="230" y2="40" stroke="blue" stroke-width="5"


svg.append("rect")
	.attr("x", 0)
	.attr("y",0 )
	.attr("width", 50)
	.attr("height", 250)
	.attr("fill", "green");

//<rect x="0" y="0" width="50" height="50" fill="green"></rect>