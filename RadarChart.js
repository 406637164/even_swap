var width = 400,
  height = 400;

// Config for the Radar chart
var config = {
  w: width,
  h: height,
  maxValue: 100,
  levels: 5,
  ExtraWidthX: 300,
};

//Call function to draw the Radar chart

var RadarChart = {
  draw: function (id, d, options) {
    var cfg = {
      radius: 5,
      w: 350,
      h: 350,
      factor: 1,
      factorLegend: 0.85,
      levels: 3,
      maxValue: 0,
      radians: 2 * Math.PI,
      opacityArea: 0.5,
      ToRight: 5,
      TranslateX: 80,
      TranslateY: 80,
      ExtraWidthX: 100,
      ExtraWidthY: 100,
      color: d3.scale
        .ordinal()
        .range([
          "#1f77b4",
          "#ff7f0e",
          "#2ca02c",
          "#d62728",
          "#9467bd",
          "#8c564b",
          "#e377c2",
          "#7f7f7f",
          "#bcbd22",
          "#17becf",
        ]),
      colors: [
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#8c564b",
        "#e377c2",
        "#7f7f7f",
        "#bcbd22",
        "#17becf",
      ],
    };
    // console.log(cfg.color(0));
    // console.log(cfg.color(1));
    // console.log(cfg.color(2));
    // console.log(cfg.color(3));
    // console.log(cfg.color(4));

    let datas = d.map((dd, ii) => {
      return dd.filter((dk, di) => dk.even != 1);

      // dd.filter(function (obj) {
      //   console.log(obj.even);
      //   return obj.even != 1;
      // });
    });

    if ("undefined" !== typeof options) {
      for (var i in options) {
        if ("undefined" !== typeof options[i]) {
          cfg[i] = options[i];
        }
      }
    }

    cfg.maxValue = 100;

    var allAxis = datas[0].map(function (i, j) {
      return i.area;
    });
    var total = allAxis.length;
    var radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);
    var Format = d3.format("%");
    d3.select(id).select("svg").remove();

    var g = d3
      .select(id)
      .append("svg")
      .attr("width", cfg.w + cfg.ExtraWidthX)
      .attr("height", cfg.h + cfg.ExtraWidthY)
      .append("g")
      .attr("id", "main_rader")
      .attr(
        "transform",
        "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")"
      );

    var tooltip;

    //Circular segments

    series = 0;

    var axis = g
      .selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");

    axis
      .append("line")
      .attr("x1", cfg.w / 2)
      .attr("y1", cfg.h / 2)
      .attr("x2", function (d, i) {
        return (
          (cfg.w / 2) * (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
        );
      })
      .attr("y2", function (d, i) {
        return (
          (cfg.h / 2) * (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
        );
      })
      .attr("class", "line")

      .style("stroke-width", "1px");

    axis
      .append("text")
      .attr("class", "legend")
      .text(function (d) {
        return d;
      })
      .style("font-family", "sans-serif")
      .style("font-size", "1.3rem")
      .attr("text-anchor", "middle")
      .attr("dy", "0.9em")
      .attr("transform", function (d, i) {
        return "translate(0, -30)";
      })
      .attr("x", function (d, i) {
        return (
          (cfg.w / 2) *
            (1 - cfg.factorLegend * Math.sin((i * cfg.radians) / total)) -
          60 * Math.sin((i * cfg.radians) / total)
        );
      })
      .attr("y", function (d, i) {
        return (
          (cfg.h / 2) * (1 - Math.cos((i * cfg.radians) / total)) -
          20 * Math.cos((i * cfg.radians) / total)
        );
      });
    var xScale = d3.scale.linear().domain([0, width]).range([0, width]);
    var d2 = datas;

    var ar = [];
    console.log(datas);
    datas.forEach((qd, a) => {
      ar.push(d3.max(qd, (q) => q.value));
    });

    var yScale = d3.scale.linear().domain([0, 100]).range([0, height]);
    var newArr = [];
    var rectvalue = d.map(function (d2, i2) {
      // d2
      //   .map((d3, dii) => d3)
      //   .filter((d4, d4i) => {
      //     return d4.area == "拿多少錢願意去";
      //   })[0]

      return d2
        .map((d3, dii) => d3)
        .filter((d4, d4i) => {
          return d4.area == "拿多少錢願意去";
        })[0];
    });
    // rectvalue.sort(function (x, y) {
    //   return d3.ascending(x.value, y.value);
    // });

    rectvalue = rectvalue.map((d, i) => {
      console.log(i);
      d.idx = i;

      return d;
    });
    let p2 = [...rectvalue];
    const rectvalue2 = p2
      .sort((a, b) => {
        return b.value - a.value;
      })
      .map((dkk, di) => {
        dkk.inxbig = di;
        return dkk;
      });

    console.log(rectvalue);
    // rectvalue.map((d,i)=>d.)

    var datvalue2 = [];
    datas.forEach(function (y, x) {
      dataValues = [];

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
      g.selectAll(".nodes").data(y, function (j, i) {
        if (j.area == "拿多少錢願意去") {
          let per = 0;
          if (j.value == 0) {
            per = j.value;
          } else {
            per = j.value / maxars;
          }
          // console.log(per*100);
          dataValues.push([
            (cfg.w / 2) *
              (1 -
                (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                  cfg.factor *
                  Math.sin((i * cfg.radians) / total)) -
              30 / (j.inxbig + 1 * i + 1),

            (cfg.h / 2) *
              (1 -
                (parseFloat(Math.max(per * 100, 0)) / cfg.maxValue) *
                  cfg.factor *
                  Math.cos((i * cfg.radians) / total)),
          ]);

          return (
            (cfg.w / 2) *
              (1 -
                (Math.max(j.value, 0) / cfg.maxValue) *
                  cfg.factor *
                  Math.sin((i * cfg.radians) / total)) -
            30 / (j.inxbig + 1 * i + 1)
          );
        }
        dataValues.push([
          (cfg.w / 2) *
            (1 -
              (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                cfg.factor *
                Math.sin((i * cfg.radians) / total)),
          (cfg.h / 2) *
            (1 -
              (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                cfg.factor *
                Math.cos((i * cfg.radians) / total)),
        ]);
        return (
          (cfg.w / 2) *
          (1 -
            (Math.max(j.value, 0) / cfg.maxValue) *
              cfg.factor *
              Math.sin((i * cfg.radians) / total))
        );
      });
      //Text indicating at what % each level is
      // for (var j = 0; j < cfg.levels; j++) {
      //   var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
      //   g.selectAll(".levels")
      //     .data([1]) //dummy data
      //     .enter()
      //     .append("svg:text")
      //     .attr("x", function (d) {
      //       return levelFactor * (1 - cfg.factor * Math.sin(0));
      //     })
      //     .attr("y", function (d) {
      //       return levelFactor * (1 - cfg.factor * Math.cos(0));
      //     })
      //     .attr("class", "legend")
      //     .style("font-family", "sans-serif")
      //     .style("font-size", "1rem")
      //     .attr(
      //       "transform",
      //       "translate(" +
      //         (cfg.w / 2 - levelFactor + cfg.ToRight) +
      //         ", " +
      //         (cfg.h / 2 - levelFactor) +
      //         ")"
      //     )
      //     .attr("fill", "block")
      //     .text(((j + 1) * 100) / cfg.levels);
      // }

      // dataValues.push(dataValues[0]);
      initPolygon();

      drawPoly();

      function initPolygon() {
        g.selectAll(".area")
          .data([dataValues])
          .enter()
          .append("polygon")
          .attr("class", "radar-chart-serie" + series)
          .style("stroke-width", "4px")
          .style("stroke", function (j, i) {
            console.log(cfg.color(datas[series][0].cor));
            // return cfg.color(series);
            console.log(datas[series]);
            console.log(datas[series][0].cor);
            // return cfg.color(d[series][0].cor);
            return cfg.colors[d[series][0].cor];
          })
          .attr("points", function (d) {
            var str = "";
            for (var pti = 0; pti < d.length; pti++) {
              str = str + d[pti][0] + "," + d[pti][1] + " ";
            }
            return str;
          })
          .style("fill", function (j, i) {
            // console.log(d[series]);
            // console.log(d[series][0]);
            // console.log(cfg.color(d[series][0].cor));
            // console.log(cfg.color(d[series][0].cor));
            // console.log(cfg.color(0));
            // console.log(cfg.color(1));
            // console.log(cfg.color(2));
            // console.log(cfg.color(3));
            // console.log(cfg.color(4));
            // console.log(cfg.color(d[series][0].cor));
            // return cfg.color(series);
            // return cfg.color(d[series][0].cor);
            return cfg.colors[datas[series][0].cor];
          })
          .style("fill-opacity", cfg.opacityArea)
          .on("mouseover", function (d) {
            z = "polygon." + d3.select(this).attr("class");
            g.selectAll("polygon").transition(200).style("fill-opacity", 0.1);
            g.selectAll(z).transition(200).style("fill-opacity", 0.7);
          })
          .on("mouseout", function () {
            g.selectAll("polygon")
              .transition(200)
              .style("fill-opacity", cfg.opacityArea);
          });
        series++;
      }
    });
    series = 0;
    function drawPoly() {
      g.selectAll("area").attr("points", function (de) {
        var str = "";
        for (var pti = 0; pti < de.length; pti++) {
          str = str + de[pti][0] + "," + de[pti][1] + " ";
        }
        return str;
      });
    }

    var tooltip = d3.select("body").append("div").attr("class", "toolTip");
    reCalculatePoints();
    RadarBar.draw(datvalue2, "#main_rader", cfg, yScale, xScale, datas, total);
    function reCalculatePoints() {
      d.forEach(function (y, x) {
        var ars = [];
        d.forEach(function (y2, x2) {
          y2.forEach((k, i) => {
            if (k.area == "拿多少錢願意去") {
              ars.push(
                (cfg.h / 2) *
                  (1 -
                    (parseFloat(Math.max(k.value, 0)) / cfg.maxValue) *
                      cfg.factor *
                      Math.cos((i * cfg.radians) / total))
              );
            }
          });
        });
        const maxars = d3.max(ars, (dk) => dk);

        g.selectAll(".nodes")
          .data(y)
          .enter()
          .append("svg:circle")
          .attr("class", "radar-chart-serie" + series)
          .attr("r", cfg.radius)
          .attr("alt", function (j) {
            return Math.max(j.value, 0);
          })
          .attr("cx", function (j, i) {
            if (j.area == "拿多少錢願意去") {
              var newxy = {};

              newxy.xy = [
                (cfg.w / 2) *
                  (1 -
                    (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                      cfg.factor *
                      Math.sin((i * cfg.radians) / total)) -
                  30 / (j.inxbig + 2 * i + 1),
                (cfg.h / 2) *
                  (1 -
                    (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                      cfg.factor *
                      Math.cos((i * cfg.radians) / total)),
              ];
              newxy.data = j;
              datvalue2.push(newxy);
              console.log();

              dataValues.push([
                (cfg.w / 2) *
                  (1 -
                    (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                      cfg.factor *
                      Math.sin((i * cfg.radians) / total)) -
                  30 / (j.inxbig + 1 * i + 1),
                yScale(
                  (cfg.h / 2) *
                    (1 -
                      (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                        cfg.factor *
                        Math.cos((i * cfg.radians) / total))
                ),
              ]);
              return (
                (cfg.w / 2) *
                  (1 -
                    (Math.max(j.value, 0) / cfg.maxValue) *
                      cfg.factor *
                      Math.sin((i * cfg.radians) / total)) -
                30 / (j.inxbig + 1 * i + 1)
              );
            }
            dataValues.push([
              (cfg.w / 2) *
                (1 -
                  (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                    cfg.factor *
                    Math.sin((i * cfg.radians) / total)),
              (cfg.h / 2) *
                (1 -
                  (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
                    cfg.factor *
                    Math.cos((i * cfg.radians) / total)),
            ]);
            return (
              (cfg.w / 2) *
              (1 -
                (Math.max(j.value, 0) / cfg.maxValue) *
                  cfg.factor *
                  Math.sin((i * cfg.radians) / total))
            );
          })
          .attr("cy", function (j, i) {
            return (
              (cfg.h / 2) *
              (1 -
                (Math.max(j.value, 0) / cfg.maxValue) *
                  cfg.factor *
                  Math.cos((i * cfg.radians) / total))
            );
          })
          .attr("data-id", function (j) {
            return j.area;
          })
          .style("fill", "#fff")
          // .style("stroke-width", "1px")
          .style("stroke", "transparent")
          .style("fill-opacity", 0)
          .on("mouseover", function (d) {
            if (d.area == "拿多少錢願意去") {
              tooltip
                .style("left", d3.event.pageX - 40 + "px")
                .style("top", d3.event.pageY - 80 + "px")
                .style("display", "inline-block")
                .html(
                  d.case +
                    "<br><span>" +
                    d.area +
                    "<span>" +
                    d.value +
                    "</span>"
                );
            } else {
              tooltip
                .style("left", d3.event.pageX - 40 + "px")
                .style("top", d3.event.pageY - 80 + "px")
                .style("display", "inline-block")
                .html(
                  d.case +
                    "<br><span>" +
                    d.area +
                    "<span>" +
                    d.level +
                    "</span>"
                );
            }
          })
          .on("mouseout", function (d) {
            tooltip.style("display", "none");
          });

        series++;
      });
    }
    console.log(datvalue2);
    for (var j = 0; j < cfg.levels; j++) {
      var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
      g.selectAll(".levels")
        .data(allAxis)
        .enter()
        .append("svg:line")
        .attr("x1", function (d, i) {
          return (
            levelFactor * (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
          );
        })
        .attr("y1", function (d, i) {
          return (
            levelFactor * (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
          );
        })
        .attr("x2", function (d, i) {
          return (
            levelFactor *
            (1 - cfg.factor * Math.sin(((i + 1) * cfg.radians) / total))
          );
        })
        .attr("y2", function (d, i) {
          return (
            levelFactor *
            (1 - cfg.factor * Math.cos(((i + 1) * cfg.radians) / total))
          );
        })
        .attr("class", "line")
        .style("stroke", "grey")
        .style("stroke-opacity", "0.75")
        .style("stroke-width", "0.3px")
        .attr(
          "transform",
          "translate(" +
            (cfg.w / 2 - levelFactor) +
            ", " +
            (cfg.h / 2 - levelFactor) +
            ")"
        );
    }
    console.log(datvalue2);
  },
};
