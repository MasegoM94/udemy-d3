/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

    d3.json("data/buildings.json").then(function(data){
    console.log(data); /* reading in data and looking at the data in the console*/

    data.forEach(function(d) {
        d.height = +d.height;
    });

    var rects = svg.selectAll("rect")
            .data(data)
        .enter().append("rect")
            .attr("y", 0)
            .attr("x", function(d, i){
                return (i * 60);
            })
            .attr("width", 40)
            .attr("height", function(d){
                return d.height;
            })
            .attr("fill", function(d) {
                return "grey";
            });

})