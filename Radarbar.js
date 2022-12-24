var RadarBar = {
  draw: function (datvalue2, id, cfg, y, x, d, total) {
    let B = datvalue2.slice(); // clone

    B.sort((a, b) => {
      return b.data.value - a.data.value;
    });
    let C = B.slice();
    var d2 = C.map((d) => d.data.value);
    var maxValue = d3.max(d2, (d) => d);
    // console.log(d);
    var ars = [];
    d.forEach(function (y2, x2) {
      y2.forEach((k, i) => {
        if (k.area == "拿多少錢願意去") {
          ars.push(k.value);
        }
      });
    });
    const maxars = d3.max(ars, (dk) => dk);
    console.log(maxars);
    d3.select(id)
      .append("g")

      .selectAll("rect")
      .data(B)
      .enter()
      .append("rect")

      .attr("fill", (d, i) => {
        console.log(d);
        return cfg.color(d.data.idx);
      })
      .style("stroke", (d, i) => {
        return cfg.color(d.data.idx);
      })
      .style("stroke-width", "1px")
      .attr("width", 8)

      .attr("height", function (d) {
        return y(d.data.value);
      })

      .style("fill-opacity", 0.5)

      .attr("x", function (d, i) {
        console.log(x(x.invert(d.xy[0]) + 5 * i));
        return d.xy[0] + i * i * i - 3;
      })
      .attr("y", function (d) {
        var percent = 0;
        if (d.data.value != 0) {
          percent = (d.data.value / maxValue) * 100;
        } else {
          percent = d.data.value;
        }
        return height - y(percent);
      })

      .attr("height", function (d, i) {
        console.log(
          (cfg.h / 2) *
            (1 -
              (parseFloat(Math.max(d.data.value * 100, 0)) / cfg.maxValue) *
                cfg.factor *
                Math.cos((i * cfg.radians) / total))
        );

        var percent = 0;
        if (d.data.value != 0) {
          percent = (Math.floor(d.data.value) / maxValue) * 100;
        } else {
          percent = d.data.value;
        }
        console.log(percent);
        return y(percent);
      });
    d3.select("#main_rader")
      .selectAll("rect")
      .transition()
      .duration(1500)
      .sort(function (a, b) {
        return d3.descending(a.value, b.value);
      })
      .attr("transform", "translate(0,42)");

    // .attr("x", function (d, i) {
    //   console.log(d);
    //   //对排序之后的横坐标重排
    //   return d.xy[0] + i * i * (i / 1.3);
    // })
    // .attr("y", function (d) {
    //   var percent = 0;
    //   if (d.data.value != 0) {
    //     percent = (d.data.value / maxValue) * 100;
    //   } else {
    //     percent = d.data.value;
    //   }
    //   return height - y(percent);
    // });

    d3.select(id)
      .append("g")

      .selectAll("text")
      .data(B)
      .enter()
      .append("text")
      .attr("class", "labbe")
      .attr("x", function (d, i) {
        return d.xy[0] + i * i * i;
      })
      .attr("y", function (d) {
        // console.log(d);
        return height - y(d.data.value);
      })
      .text(function (d) {
        if (d.data.value == 0) {
          return null;
        }
        return d.data.value;
      })
      .style("font-family", "sans-serif")
      .style("font-size", "1 rem")
      .attr("text-anchor", "middle");

    d3.select("#main_rader")
      .selectAll(".labbe")
      .sort(function (a, b) {
        return d3.descending(a.value, b.value);
      })
      .transition()
      .duration(1000)
      .attr("transform", "translate(0,37)")
      .attr("x", function (d, i) {
        return d.xy[0] + i * i * i + 3;
      })
      .attr("y", function (d) {
        var percent = 0;
        if (d.data.value != 0) {
          percent = (d.data.value / maxValue) * 100;
        } else {
          percent = d.data.value;
        }

        // console.log(d.data.value);
        // console.log(d.data.value);
        // console.log(maxValue);
        // console.log((d.data.value / maxValue) * 100);
        return height - y(percent);
      })
      .text(function (d) {
        if (d.data.value == 0) {
          return null;
        }
        return d.data.value;
      });
  },
};
