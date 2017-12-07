 // var heatmapSvg = d3.select("#heatmap"),
 //      margin = { top: 50, right: 0, bottom: 100, left: 30 },
 //      width = +heatmapSvg.attr("width") - margin.left - margin.right,
 //      height = +heatmapSvg.attr("height")- margin.top - margin.bottom,
 //      gridSize = Math.floor(width / 5),
 //      legendElementWidth = gridSize*2,
 //      buckets = 2,
 //      colors = [ "#982f00","#eb6224","#eb9824","#189f6c", "#205f98"], // alternatively colorbrewer.YlGnBu[9]
 //      locations = ["BOS", "LDN", "NYC"]
 var margin = { top: 50, right: 0, bottom: 100, left: 300 },
          width = 900 - margin.left - margin.right,
          height = 430 - margin.top - margin.bottom,
          gridSize = Math.floor(width / 12),
          legendElementWidth = gridSize * 1.5,
          legendElementHeight = gridSize * 0.5,
          buckets = 5,
          colors = [ "#982f00","#eb6224","#eb9824","#189f6c", "#205f98"], 
          // red -> blue: negative -> positive
          // alternatively colorbrewer.YlGnBu[9]
          //locations = ["New York City", "London", "Edinburg", "Boston", "Philadelphia"]
          locations = ["NYC", "LDN", "EDN", "BOS", "PHI"]

      var heatmapSvg = d3.select("#chart").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      var srcLabels = heatmapSvg.selectAll(".srcLabel")
            .data(locations)
            .enter()
            .append("text")
            .text(function(d) {return d;})
            .attr("x", function(d, i) {return i * gridSize;})
            .attr("y", 0)
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + gridSize / 2 + ", -6)")
            .attr("class", function(d, i) {return "srcLabel mono axis axis-workweek";});

      var tgtLabels = heatmapSvg.selectAll(".tgtLabel")
            .data(locations)
            .enter()
            .append("text")
            .text(function(d) {return d;})
            .attr("x", 0)
            .attr("y", function(d, i) {return i * gridSize;})
            .style("text-anchor", "middle")
            .attr("transform", "translate(-18, " + gridSize / 1.5 + ")")
            .attr("class", function(d, i) {return "tgtLabel mono axis axis-workweek";});


      var heatmapChart = function(tsvFile) {
        d3.tsv(tsvFile,
        function(d) {
          return {
            src: +d.src,
            tgt: +d.tgt,
            avg: +d.avg,
            var: +d.var
          };
        },
        function(error, data) {
          var colorScale = d3.scaleQuantile()
              .domain([-2, -1, 0, 1,  2])
              .range(colors);

          var cards = heatmapSvg.selectAll(".hour")
              .data(data, function(d) {return d.src+':'+d.tgt;});

          cards.append("title");

          cards.enter().append("rect")
              .attr("x", function(d) { 

                return (d.tgt - 1) * gridSize + 0.5 * gridSize - 0.8 * (.2 / (d.var+.01)) * gridSize * 0.5; })
              .attr("y", function(d) { return (d.src - 1) * gridSize + 0.5 * gridSize - 0.8 * (.2 / (d.var+.01)) * gridSize * 0.5; })
              .attr("rx", 4)
              .attr("ry", 4)
              .attr("class", "contents")
              .attr("width", function(d) { 
                if(d.var == 0){
                  return 0
                }else{
                  return  0.8 * (.2 / d.var ) * gridSize;
                };
              })
              .attr("height", function(d) { 
                if (d.var == 0){
                  return 0;
                }else{
                  return 0.8 * gridSize * (.2 / d.var);
                }
                })
              .style("fill", function(d) {
                return colorScale(d.avg);})
              .on("mouseover", function() {
                  d3.select(this).attr("stroke-width", '7').attr("stroke", 'black');
              }
             ).on("mouseout", function(){
                  d3.select(this).attr("stroke-width", '0').attr("stroke", 'white');

              }
                  
                );

          cards.enter().append("rect")
              .attr("x", function(d) { return (d.tgt - 1) * gridSize; })
              .attr("y", function(d) { return (d.src - 1) * gridSize; })
              .attr("rx", 0)
              .attr("ry", 0)
              .attr("class", "borders")
              .attr("width", gridSize )
              .attr("height", gridSize )
              .style("stroke", "gray")
              .attr("fill", function(d) { 
                  if(d.var == 0  && d.avg == 0){
                    return "gray";
                  }
                  else {
                    return "none";
                  }
              });
              
          cards.select("title").text(function(d) { return d.avg; });
          
          cards.exit().remove();



          var legend = heatmapSvg.selectAll(".legend")
              //.data(colorScale.quantiles(), function(d) { 
                .data(["Very negative","Somewhat negative","Neutral or Mixed","Somewhat positive","Very positive"], function(d) { 
                return d; });

          legend.enter().append("g")
              .attr("class", "legend");

          legend.enter().append("rect")
            //.attr("x", function(d, i) { return -20 + legendElementWidth * i; })
            .attr("x", 300)
            .attr("y", function(d, i) {return  legendElementHeight * i * 2;})
            .attr("width", legendElementWidth)
            .attr("height", gridSize / 2)
            .style("fill", function(d, i) { return colors[i]; });

          legend.enter().append("text")
            .attr("class", "mono")
            .style("font-size", "10pt")
            .style("fill", "black")
            .text(function(d) { return d; })
            //.attr("x",  function(d, i) { return legendElementWidth * i - 10; })
            .attr("x",  400)
            .attr("y", function(d, i) {return 20 + legendElementHeight * i * 2;});

          legend.exit().remove();

        });  
      };

      heatmapChart("pairwise.tsv");


function handleMouseOver(){
 // var mouse = d3.mouse(heatmapSvg.node()).map( function(d) {console.log(d); return parseInt(d); } );

  // tooltip.classed("hidden", false)
  //   .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
  //   .html(this.__data__.properties.name);
}