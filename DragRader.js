// var DragRadarChart = {
//   draw: function (id, d, options) {
//     var cfg = {
//       radius: 5,
//       w: 100,
//       h: 100,
//       factor: 1,
//       factorLegend: 0.85,
//       levels: 3,
//       maxValue: 0,
//       radians: 2 * Math.PI,
//       opacityArea: 0.5,
//       ToRight: 5,
//       TranslateX: 80,
//       TranslateY: 50,
//       ExtraWidthX: 0,
//       ExtraWidthY: 100,
//       color: d3.scale
//         .ordinal()

//         .range(["#ffd700", "#CA0D59", "rgb(26, 0, 128)", "rgb(155, 234, 71)"]),
//     };

//     if ("undefined" !== typeof options) {
//       for (var i in options) {
//         if ("undefined" !== typeof options[i]) {
//           cfg[i] = options[i];
//         }
//       }
//     }

//     cfg.maxValue = 100;

//     var allAxis = d[0].map(function (i, j) {
//       return i.area;
//     });
//     var total = allAxis.length;
//     var radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);
//     var Format = d3.format("%");
//     d3.select(id).select("svg").remove();

//     var g = d3
//       .select(id)
//       .append("svg")y
//       .attr("width", cfg.w + cfg.ExtraWidthX - 150)
//       .attr("height", cfg.h + cfg.ExtraWidthY)
//       .append("g")
//       .attr(
//         "transform",
//         "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")"
//       );

//     var tooltip;

//     //Circular segments

//     function drawFrame() {
//       for (var j = 0; j < cfg.levels; j++) {
//         var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
//         g.selectAll(".levels")
//           .data(allAxis)
//           .enter()
//           .append("svg:line")
//           .attr("x1", function (d, i) {
//             return (
//               levelFactor *
//               (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
//             );
//           })
//           .attr("y1", function (d, i) {
//             return (
//               levelFactor *
//               (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
//             );
//           })
//           .attr("x2", function (d, i) {
//             return (
//               levelFactor *
//               (1 - cfg.factor * Math.sin(((i + 1) * cfg.radians) / total))
//             );
//           })
//           .attr("y2", function (d, i) {
//             return (
//               levelFactor *
//               (1 - cfg.factor * Math.cos(((i + 1) * cfg.radians) / total))
//             );
//           })
//           .attr("class", "line")
//           .style("stroke", "grey")
//           .style("stroke-opacity", "0.75")
//           .style("stroke-width", "0.3px")
//           .attr(
//             "transform",
//             "translate(" +
//               (cfg.w / 2 - levelFactor) +
//               ", " +
//               (cfg.h / 2 - levelFactor) +
//               ")"
//           );
//       }
//     }
//     function drawFrame() {
//       for (var j = 0; j < cfg.levels; j++) {
//         var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
//         g.selectAll(".levels")
//           .data(allAxis)
//           .enter()
//           .append("svg:line")
//           .attr("x1", function (d, i) {
//             return (
//               levelFactor *
//               (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
//             );
//           })
//           .attr("y1", function (d, i) {
//             return (
//               levelFactor *
//               (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
//             );
//           })
//           .attr("x2", function (d, i) {
//             return (
//               levelFactor *
//               (1 - cfg.factor * Math.sin(((i + 1) * cfg.radians) / total))
//             );
//           })
//           .attr("y2", function (d, i) {
//             return (
//               levelFactor *
//               (1 - cfg.factor * Math.cos(((i + 1) * cfg.radians) / total))
//             );
//           })
//           .attr("class", "line")
//           .style("stroke", "grey")
//           .style("stroke-opacity", "0.75")
//           .style("stroke-width", "0.3px")
//           .attr(
//             "transform",
//             "translate(" +
//               (cfg.w / 2 - levelFactor) +
//               ", " +
//               (cfg.h / 2 - levelFactor) +
//               ")"
//           );
//       }
//     }

//     //Text indicating at what % each level is
//     var maxAxisValues = []; // 儲存該坐標軸的最大 x, y
//     function drawAxis() {
//       for (var j = 0; j < cfg.levels; j++) {
//         var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
//         g.selectAll(".levels")
//           .data([1]) //dummy data
//           .enter()
//           .append("svg:text")
//           .attr("x", function (d) {
//             return levelFactor * (1 - cfg.factor * Math.sin(0));
//           })
//           .attr("y", function (d) {
//             return levelFactor * (1 - cfg.factor * Math.cos(0));
//           })
//           .attr("class", "legend")
//           .style("font-family", "sans-serif")
//           .style("font-size", "1rem")
//           .attr(
//             "transform",
//             "translate(" +
//               (cfg.w / 2 - levelFactor + cfg.ToRight) +
//               ", " +
//               (cfg.h / 2 - levelFactor) +
//               ")"
//           )
//           .attr("fill", "block")
//           .text(((j + 1) * 100) / cfg.levels);
//       }

//       var axis = g
//         .selectAll(".axis")
//         .data(allAxis)
//         .enter()
//         .append("g")
//         .attr("class", "axis");

//       axis
//         .append("line")
//         .attr("x1", cfg.w / 2)
//         .attr("y1", cfg.h / 2)
//         .attr("x2", function (d, i) {
//           maxAxisValues[i] = {
//             x:
//               (cfg.w / 2) *
//               (1 - cfg.factor * Math.sin((i * cfg.radians) / total)),
//             y: 0,
//           };
//           return maxAxisValues[i].x;
//           //   return (
//           //     (cfg.w / 2) * (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
//           //   );
//         })
//         .attr("y2", function (d, i) {
//           maxAxisValues[i].y =
//             (cfg.h / 2) *
//             (1 - cfg.factor * Math.cos((i * cfg.radians) / total));
//           return maxAxisValues[i].y;
//           //   return (
//           //     (cfg.h / 2) * (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
//           //   );
//         })
//         .attr("class", "line")
//         .style("stroke", "")
//         .style("stroke-width", "1px");

//       axis
//         .append("text")
//         .attr("class", "legend")
//         .text(function (d) {
//           return d;
//         })
//         .style("font-family", "sans-serif")
//         .style("font-size", "1rem")
//         .attr("text-anchor", "middle")
//         .attr("dy", "0.9em")
//         .attr("transform", function (d, i) {
//           return "translate(0, -10)";
//         })
//         .attr("x", function (d, i) {
//           return (
//             (cfg.w / 2) *
//               (1 - cfg.factorLegend * Math.sin((i * cfg.radians) / total)) -
//             60 * Math.sin((i * cfg.radians) / total)
//           );
//         })
//         .attr("y", function (d, i) {
//           return (
//             (cfg.h / 2) * (1 - Math.cos((i * cfg.radians) / total)) -
//             20 * Math.cos((i * cfg.radians) / total)
//           );
//         });
//     }
//     drawFrame();
//     // var maxAxisValues = []; // 儲存該坐標軸的最大 x, y
//     drawAxis();

//     d.forEach(function (y, x) {
//       dataValues = [];

//       function reCalculatePoints() {
//         g.selectAll(".nodes").data(y, function (j, i) {
//           dataValues.push([
//             (cfg.w / 2) *
//               (1 -
//                 (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
//                   cfg.factor *
//                   Math.sin((i * cfg.radians) / total)),
//             (cfg.h / 2) *
//               (1 -
//                 (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
//                   cfg.factor *
//                   Math.cos((i * cfg.radians) / total)),
//           ]);
//         });
//       }
//       reCalculatePoints();

//       dataValues.push(dataValues[0]);
//       function initPolygon() {
//         return g
//           .selectAll(".area")
//           .data([dataValues])
//           .enter()
//           .append("polygon")
//           .attr("class", "radar-chart-serie" + series)
//           .style("stroke-width", "2px")
//           .style("stroke", cfg.color(series))
//           .attr("points", function (d) {
//             var str = "";
//             for (var pti = 0; pti < d.length; pti++) {
//               str = str + d[pti][0] + "," + d[pti][1] + " ";
//             }
//             return str;
//           })
//           .style("fill", function (j, i) {
//             return cfg.color(series);
//           })
//           .style("fill-opacity", cfg.opacityArea)
//           .on("mouseover", function (d) {
//             z = "polygon." + d3.select(this).attr("class");
//             g.selectAll("polygon").transition(200).style("fill-opacity", 0.1);
//             g.selectAll(z).transition(200).style("fill-opacity", 0.7);
//           })
//           .on("mouseout", function () {
//             g.selectAll("polygon")
//               .transition(200)
//               .style("fill-opacity", cfg.opacityArea);
//           });
//         series++;
//       }
//       var areagg = initPolygon();

//       drawPoly();
//       function drawPoly() {
//         areagg.attr("points", function (d) {
//           var str = "";
//           for (var pti = 0; pti < d.length; pti++) {
//             str = str + d[pti][0] + "," + d[pti][1] + " ";
//           }
//           return str;
//         });
//       }

//       series++;
//     });

//     series = 0;
//     drawnode();

//     series = 0;

//     var tooltip = d3.select("body").append("div").attr("class", "toolTip");

//     function drawnode() {
//       d.forEach(function (y, x) {
//         g.selectAll(".nodes")
//           .data(y)
//           .enter()
//           .append("svg:circle")
//           .attr("class", "radar-chart-serie" + series)
//           .attr("r", cfg.radius)
//           .attr("alt", function (j) {
//             return Math.max(j.value, 0);
//           })
//           .attr("cx", function (j, i) {
//             dataValues.push([
//               (cfg.w / 2) *
//                 (1 -
//                   (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
//                     cfg.factor *
//                     Math.sin((i * cfg.radians) / total)),
//               (cfg.h / 2) *
//                 (1 -
//                   (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
//                     cfg.factor *
//                     Math.cos((i * cfg.radians) / total)),
//             ]);
//             return (
//               (cfg.w / 2) *
//               (1 -
//                 (Math.max(j.value, 0) / cfg.maxValue) *
//                   cfg.factor *
//                   Math.sin((i * cfg.radians) / total))
//             );
//           })
//           .attr("cy", function (j, i) {
//             return (
//               (cfg.h / 2) *
//               (1 -
//                 (Math.max(j.value, 0) / cfg.maxValue) *
//                   cfg.factor *
//                   Math.cos((i * cfg.radians) / total))
//             );
//           })
//           .attr("data-id", function (j) {
//             return j.area;
//           })
//           .style("fill", "#fff")
//           .style("stroke-width", "2px")
//           .style("stroke", cfg.color(series))
//           .style("fill-opacity", 0.9)
//           .on("mouseover", function (d) {
//             console.log(d.area);
//             tooltip
//               .style("left", d3.event.pageX - 40 + "px")
//               .style("top", d3.event.pageY - 80 + "px")
//               .style("display", "inline-block")
//               .html(
//                 d.case + "<br><span>" + d.area + "<span>" + d.value + "</span>"
//               );
//           })
//           .on("mouseout", function (d) {
//             tooltip.style("display", "none");
//           })
//           .call(d3.behavior.drag().on("drag", move));
//         function reCalculatePoints() {
//           g.selectAll(".nodes").data(y, function (j, i) {
//             dataValues.push([
//               (cfg.w / 2) *
//                 (1 -
//                   (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
//                     cfg.factor *
//                     Math.sin((i * cfg.radians) / total)),
//               (cfg.h / 2) *
//                 (1 -
//                   (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) *
//                     cfg.factor *
//                     Math.cos((i * cfg.radians) / total)),
//             ]);
//           });
//         }
//         function initPolygon() {
//           return g
//             .selectAll("area")
//             .data([dataValues])
//             .enter()
//             .append("polygon")
//             .attr("class", "radar-chart-serie0")
//             .style("stroke-width", "2px")
//             .style("stroke", cfg.color)
//             .on("mouseover", function (d) {
//               z = "polygon." + d3.select(this).attr("class");
//               g.selectAll("polygon").transition(200).style("fill-opacity", 0.1);
//               g.selectAll(z).transition(200).style("fill-opacity", 0.7);
//             })
//             .on("mouseout", function () {
//               g.selectAll("polygon")
//                 .transition(200)
//                 .style("fill-opacity", cfg.opacityArea);
//             })
//             .style("fill", function (j, i) {
//               return cfg.color;
//             })
//             .style("fill-opacity", cfg.opacityArea);
//         }

//         function move(dobj, i) {
//           this.parentNode.appendChild(this);
//           var dragTarget = d3.select(this);

//           var oldData = dragTarget.data()[0];
//           console.log(oldData);
//           // 進行座標位移歸零，以方便計算斜率
//           var oldX = parseFloat(dragTarget.attr("cx")) - 300;
//           var oldY = 300 - parseFloat(dragTarget.attr("cy"));
//           var newY = 0,
//             newX = 0,
//             newValue = 0;

//           var maxX = maxAxisValues[i].x - 300;
//           var maxY = 300 - maxAxisValues[i].y;

//           // 斜率為無限大的特殊情況
//           if (oldX == 0) {
//             newY = oldY - d3.event.dy;
//             // 檢查是否超過範圍
//             if (Math.abs(newY) > Math.abs(maxY)) {
//               newY = maxY;
//             }
//             newValue = (newY / oldY) * oldData.value;
//           } else {
//             var slope = oldY / oldX; // 斜率
//             newX = d3.event.dx + parseFloat(dragTarget.attr("cx")) - 300;
//             // 檢查是否超過範圍
//             if (Math.abs(newX) > Math.abs(maxX)) {
//               newX = maxX;
//             }
//             newY = newX * slope;

//             var ratio = newX / oldX; // 利用相似三角形等比的概念計算新的值
//             newValue = ratio * oldData.value;
//           }

//           // 重新設定點的座標
//           dragTarget
//             .attr("cx", function () {
//               return newX + 300;
//             })
//             .attr("cy", function () {
//               return 300 - newY;
//             });
//           // 重新設定點的值
//           console.log(oldData);
//           oldData.value = newValue;
//           // 重新計算多邊形的轉折點
//           reCalculatePoints();
//           // 重畫多邊形
//           //   drawPoly();
//         }
//         // .call(
//         //   d3
//         //     .drag()
//         //     .on("start", dragstarted)
//         //     .on("drag", dragged)
//         //     .on("end", dragended)
//         // );

//         series++;
//       });
//     }
//   },
// };
// var d = [
//   { axis: "strength", value: 13, order: 0 },
//   { axis: "intelligence", value: 1, order: 1 },
//   { axis: "charisma", value: 8, order: 2 },
//   { axis: "dexterity", value: 4, order: 3 },
//   { axis: "luck", value: 10, order: 4 },
//   { axis: "azole", value: 10, order: 5 },
// ];
var DragRadarChart = {
  draw: function (id, d, options, rgb, dat) {
    var cfg = {
      radius: 8, // 點的半徑
      w: 330,
      h: 130,
      factor: 1, // 框的縮放比例
      factorLegend: 0.85,
      levels: 4, // 幾層框
      maxValue: 100,
      ToRight: 5,
      TranslateX: 150,
      TranslateY: 40,
      ExtraWidthX: 30,
      ExtraWidthY: 70,
      radians: 2 * Math.PI,
      opacityArea: 0.5,
      color: d3.rgb(rgb),
    };
    if ("undefined" !== typeof options) {
      for (var i in options) {
        if ("undefined" !== typeof options[i]) {
          cfg[i] = options[i];
        }
      }
    }

    cfg.maxValue = Math.max(
      cfg.maxValue,
      d3.max(
        d.map(function (o) {
          return o.value;
        })
      )
    );
    var allAxis = d.map(function (i, j) {
      return i.area;
    });
    var total = allAxis.length;
    var radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);

    // 初始化畫布
    d3.select(id).select("svg").remove();
    var g = d3
      .select(id)
      .append("svg")
      .attr("width", cfg.w + cfg.ExtraWidthX)
      .attr("height", cfg.h + cfg.ExtraWidthY)
      .append("g")
      .attr(
        "transform",
        "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")"
      );
    var tooltip;

    var maxAxisValues = [];
    drawFrame();
    // 儲存該坐標軸的最大 x, y

    drawAxis();
    console.log(maxAxisValues);
    var dataValues = [];
    reCalculatePoints();

    var areagg = initPolygon();
    drawPoly();

    drawnode();

    // 框
    console.log(dat);
    console.log(maxAxisValues);
    function drawFrame() {
      for (var j = 0; j < cfg.levels; j++) {
        var levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
        var axis = g
          .selectAll(".axis")
          .data(allAxis)
          .enter()
          .append("g")
          .attr("class", "axis");
        axis
          .append("text")
          .attr("class", "legend")
          .text(function (d) {
            return d;
          })
          .style("font-family", "sans-serif")
          .style("font-size", "1rem")
          .attr("text-anchor", "middle")
          .attr("dx", "-2px")
          .attr("dy", "1.9em")
          .attr("transform", function (d, i) {
            return "translate(-3, -30)";
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
        axis
          .append("line")
          .attr("x1", cfg.w / 2)
          .attr("y1", cfg.h / 2)
          .attr("x2", function (j, i) {
            maxAxisValues[i] = {
              x:
                (cfg.w / 2) *
                (1 - cfg.factor * Math.sin((i * cfg.radians) / total)),
              y: 0,
            };
            return maxAxisValues[i].x;
          })
          .attr("y2", function (j, i) {
            maxAxisValues[i].y =
              (cfg.h / 2) *
              (1 - cfg.factor * Math.cos((i * cfg.radians) / total));
            return maxAxisValues[i].y;
          })
          .attr("class", "line")
          .style("stroke", "grey")
          .style("stroke-width", "1px");

        g.selectAll(".levels")
          .data(allAxis)
          .enter()
          .append("svg:line")
          .attr("x1", function (d, i) {
            return (
              levelFactor *
              (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
            );
          })
          .attr("y1", function (d, i) {
            return (
              levelFactor *
              (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
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
          .style("stroke-width", "0.5px")
          .attr(
            "transform",
            "translate(" +
              (cfg.w / 2 - levelFactor) +
              ", " +
              (cfg.h / 2 - levelFactor) +
              ")"
          );
      }
    }

    // 坐標軸
    function drawAxis() {
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
        .attr("x2", function (j, i) {
          maxAxisValues[i] = {
            x:
              (cfg.w / 2) *
              (1 - cfg.factor * Math.sin((i * cfg.radians) / total)),
            y: 0,
          };
          return maxAxisValues[i].x;
        })
        .attr("y2", function (j, i) {
          maxAxisValues[i].y =
            (cfg.h / 2) *
            (1 - cfg.factor * Math.cos((i * cfg.radians) / total));
          return maxAxisValues[i].y;
        })
        .attr("class", "line")
        .style("stroke", "grey")
        .style("stroke-width", "1px");

      axis
        .append("text")
        .attr("class", "legend")
        .text(function (d) {
          return d;
        })
        .style("font-family", "sans-serif")
        .style("font-size", "10px")
        .attr("transform", function (d, i) {
          return "translate(0, -10)";
        })
        .attr("x", function (d, i) {
          return (
            (cfg.w / 2) *
              (1 - cfg.factorLegend * Math.sin((i * cfg.radians) / total)) -
            20 * Math.sin((i * cfg.radians) / total)
          );
        })
        .attr("y", function (d, i) {
          return (
            (cfg.h / 2) * (1 - Math.cos((i * cfg.radians) / total)) +
            20 * Math.cos((i * cfg.radians) / total)
          );
        });
    }
    console.log(maxAxisValues);
    // 根據輸入的資料計算多邊形要畫的點
    function reCalculatePoints() {
      g.selectAll(".nodes").data(d, function (j, i) {
        let value = j.area === "拿多少錢願意去" ? dat : j.value;
        dataValues[i] = [
          (cfg.w / 2) *
            (1 -
              (parseFloat(Math.max(value, 0)) / cfg.maxValue) *
                cfg.factor *
                Math.sin((i * cfg.radians) / total)),
          (cfg.h / 2) *
            (1 -
              (parseFloat(Math.max(value, 0)) / cfg.maxValue) *
                cfg.factor *
                Math.cos((i * cfg.radians) / total)),
        ];
      });
      dataValues[d[0].length] = dataValues[0];
    }

    // 初始化多邊形
    function initPolygon() {
      return g
        .selectAll("area")
        .data([dataValues])
        .enter()
        .append("polygon")
        .attr("class", "radar-chart-serie0")
        .style("stroke-width", "2px")
        .style("stroke", cfg.color)
        .on("mouseover", function (d) {
          z = "polygon." + d3.select(this).attr("class");
          g.selectAll("polygon").transition(200).style("fill-opacity", 0.1);
          g.selectAll(z).transition(200).style("fill-opacity", 0.7);
        })
        .on("mouseout", function () {
          g.selectAll("polygon")
            .transition(200)
            .style("fill-opacity", cfg.opacityArea);
        })
        .style("fill", function (j, i) {
          // return cfg.color(d[series][0].cor);
          return cfg.color;
        })
        .style("fill-opacity", cfg.opacityArea);
    }

    // 畫多邊形
    function drawPoly() {
      areagg.attr("points", function (de) {
        var str = "";
        for (var pti = 0; pti < de.length; pti++) {
          str = str + de[pti][0] + "," + de[pti][1] + " ";
        }
        return str;
      });
    }
    var sum = 0;

    // 畫點
    console.log(maxAxisValues);
    var tooltip = d3.select("body").append("div").attr("class", "toolTip");
    var tooltip3 = d3.select(id).append("div").attr("class", "toolTip3");
    console.log(id);
    function drawnode() {
      g.selectAll(".nodes")
        .data(d)
        .enter()
        .append("svg:circle")
        .attr("class", "radar-chart-serie0")
        .attr("r", cfg.radius)
        .attr("alt", function (j) {
          return Math.max(j.value, 0);
        })
        .attr("cx", function (j, i) {
          console.log(j);

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
          return j.axis;
        })
        // .style("fill", cfg.color)
        .style("fill", (d, i) => {
          if (d.area == "拿多少錢願意去") {
            return "transparent";
          }
          return "#fff";
        })
        .style("stroke-width", "2px")
        .style("stroke", (d, i) => {
          if (d.area == "拿多少錢願意去") {
            return "transparent";
          }
          return cfg.color;
        })
        .style("fill-opacity", 0.9)
        .on("mouseover", function (d) {
          // console.log();
          console.log(d);
          console.log(d);
          // tooltip2.style("display", "none");

          console.log($(".toolTip2"));
          var newd = 0;
          newd = d.value;
          if (d.value < 0) {
            newd = 0;
          }
          console.log(d);
          //   .html(d.area + "<span>" + d.value + "</span>");
          newX = parseFloat(d3.select(this).attr("cx")) - 10;
          newY = parseFloat(d3.select(this).attr("cy")) - 5;
          if (d.area == "拿多少錢願意去") {
            tooltip
              .style("left", d3.event.pageX + 20 + "px")
              .style("top", d3.event.pageY - 40 + "px")
              .style("display", "inline-block")
              .html(
                d.case + "<br><span>" + d.area + "<span>" + d.value + "</span>"
              );
          } else {
            tooltip
              .style("left", d3.event.pageX + 20 + "px")
              .style("top", d3.event.pageY - 40 + "px")
              .style("display", "inline-block")
              .html(
                d.case + "<br><span>" + d.area + "<span>" + d.level + "</span>"
              );
          }

          console.log(tooltip);
        })

        .call(
          d3.behavior
            .drag()
            .on("drag", move)
            .on("dragend", function (d, i) {
              // if (d.level == "C") {
              //   d.value = 10;
              // }
              let toolTip2 = d3
                .select("body")
                .append("div")
                .attr("class", "toolTip2");
              tooltip.style("display", "none");
              // tooltip.style("display", "block");
              // console.log(d);
              var newd = 0;
              newd = d.value;
              if (d.value < 0) {
                newd = 0;
              }

              //////
              const halfW = cfg.w / 2;
              const halfH = cfg.h / 2;

              // this.parentNode.appendChild(this);

              // d3.select(this).data()[0].level=="B"
              const minValue = MyChart.data
                .map((dd, ii) => dd.filter((dk, di) => dk.even != 1))
                .map((subArray) => subArray[i])
                .reduce((prev, curr) => {
                  return prev.value < curr.value ? prev : curr;
                }).value;
              var dragTarget = d3.select(this);
              if (d3.select(this).data()[0].level == "B") {
                d3.select(this).data()[0].value = 60;
              } else if (d3.select(this).data()[0].level == "A") {
                d3.select(this).data()[0].value = 90;
              } else if (d3.select(this).data()[0].level == "C") {
                d3.select(this).data()[0].value = 10;
              }

              if (d3.select(this).data()[0].level == "好") {
                d3.select(this).data()[0].value = 90;
              } else if (d3.select(this).data()[0].level == "差") {
                d3.select(this).data()[0].value = 10;
              }
              let old = dragTarget.data()[0];
              console.log(old);
              console.log(dragTarget.data()[0]);
              console.log(MyChart.data);
              console.log(i);
              console.log(d);

              console.log(minValue);
              console.log(d3.select(this).data());
              console.log(MyChart.datas);
              // Cardview.draw(MyChart.data);
              // MyChart.repaint(MyChart.data);
              // MyChart.repaint();

              // let _min0 = { x: halfW, y: halfH };
              // let _max0 = maxAxisValues[i];
              // console.log(i);

              // let newY0 = 0,
              //   newX0 = 0,
              //   newValue0 = 0;
              // let dragx1 = d3.event.sourceEvent.originalTarget.cx.animVal.value;

              // let dragy1 = d3.event.sourceEvent.originalTarget.cy.animVal.value;

              // let _a0 = { x: dragx1 - _min0.x, y: dragy1 - _min0.y };
              // let _b0 = { x: _max0.x - _min0.x, y: _max0.y - _min0.y };

              // let ratio =
              //   (_a0.x * _b0.x + _a0.y * _b0.y) /
              //   (_b0.x * _b0.x + _b0.y * _b0.y);

              // ratio = Math.min(Math.max(ratio, 0), 1);

              // newX0 = ratio * (_max0.x - _min0.x) + halfW;
              // console.log(newX0);
              // newY0 = ratio * (_max0.y - _min0.y) + halfH;
              // newValue0 = ratio * cfg.maxValue;

              // dragTarget
              //   .attr("cx", function () {
              //     return newX0;
              //   })
              //   .attr("cy", function () {
              //     return newY0;
              //   });

              // 重新設定點的值
              // old.value = newValue0;
              // console.log(oldData.value);
              // 重新計算多邊形的轉折點
              // reCalculatePoints();
              // 重畫多邊形
              // drawPoly();
              // MyChart.repaint(MyChart.data);
              // console.log(MyChart.data);
              // console.log(newY0);
              /////
              //   .html(d.area + "<span>" + d.value + "</span>");
              // console.log(d3.event.sourceEvent.x);
              console.log($(".toolTip2"));

              newX = parseFloat(d3.select(this).attr("cx")) - 10;
              newY = parseFloat(d3.select(this).attr("cy")) - 5;
              toolTip2
                .style("left", d3.event.sourceEvent.x + 40 + "px")
                .style("top", d3.event.sourceEvent.y + "px")
                .style("display", "inline-block")
                .html(
                  d.case +
                    "<button  class='close'></button><br><span>" +
                    d.area +
                    "<span>分數  " +
                    d.level +
                    "</span><br><span>拿多少錢願意去<br><input type='text' class='textbox'><span>    <button class='swapbtn'>SWAP</button>"
                );
              // MyChart.data.forEach((array) => {
              //   array.forEach((object) => {
              //     if (object.level === 0) {
              //       return;
              //     } else if (object.level === "A") {
              //       object.value = 90;
              //     } else if (object.level === "B") {
              //       object.value = 60;
              //     } else if (object.level === "C") {
              //       object.value = 10;
              //     } else if (object.level === "好") {
              //       object.value = 90;
              //     } else if (object.level === "差") {
              //       object.value = 50;
              //     }
              //   });
              // });
              MyChart.data2 = JSON.parse(JSON.stringify(MyChart.data));
              MyChart.repaint(MyChart.data);
              Cardview.draw(MyChart.data);
              $("#htable").prevAll().remove();
              let rows = [...$(".main-table>tr")].map((r, i) => {
                return [...r.children].filter((ff, fi) => fi > 1);
                // console.log();
              });
              console.log(rows);
              //處理even
              rows.forEach((r2, ri) => {
                r2.forEach((rc, ri) => {
                  if (MyChart.evenvalue.includes(ri)) {
                    console.log(rc);
                    // console.log($(rc));
                    if (rc.tagName == "TH") {
                      rc.classList.add("deleven");
                    } else if (rc.tagName == "TD") {
                      rc.classList.add("even");
                    }
                  }
                });
              });

              //處理domanate
              let rows2 = [...$(".main-table>.row_tab")];
              // let rows2 = [...$(".main-table>tr")].filter((ff, fa) => fa > 0);
              rows2.forEach((vv, v2) => {
                if (MyChart.dominatevalue.includes(v2)) {
                  console.log(vv.classList);
                  vv.classList = "row_tab2";
                }
              });
              // console.log(MyChart.dominatevalue);
              // $("#carView>.hidecard").hide();
              // console.log($("#carView>.hidecard"));

              [...$(".card")].forEach((card, cardi) => {
                if (MyChart.dominatevalue.includes(cardi)) {
                  // console.log($(card)[0].innerHTML);
                  // if (redominate.includes(cardi)) {
                  //   MyChart.reycle2.push($(card)[0].innerHTML);
                  // }

                  console.log(card.classList.add("hidecard"));
                  $(card).hide();
                }
              });

              console.log($(".hidecard"));
              console.log(MyChart.reycle2);

              MyChart.reycle2.forEach((rec, rei) => {
                rec = `<div class='card r1 hidecard'>${rec}</div>`;
                // [...[...$("#carView")][0]]
                $("#re")[0].innerHTML += rec;
                // console.log();
                // console.log();
                console.log(rec);
              });

              let rectext = [...$("#re>.hidecard>.card-title")].map(
                (k, p) => k.innerText
              );
              let rows3 = [...$(".main-table>tr")].filter((ff, f2) => f2 > 0);
              console.log(rows3);
              [...$("#carView>.r1>.card-title")].forEach((r2, ri) => {
                console.log(r2.innerText);
                console.log(ri);
                if (rectext.includes(r2.innerText)) {
                  $(r2.parentNode).hide();
                  rows3[ri].classList = "row_tab2";
                  // console.log(r2);
                }
              });
              let allpolygon = [...d3.select("#chart").selectAll("polygon")[0]];
              allpolygon.forEach((al, ai) => {
                if (MyChart.dominatevalue.includes(ai)) {
                  $(al).hide();
                }
              });
              $(".swapbtn").on("click", function (c, u) {
                // $(".textbox")
                // console.log(d.case);

                console.log($(".textbox"));
                const inputs = $(".textbox")[$(".textbox").length - 1].value;
                const revisedata = window.MyChart.data;
                // console.log(d.case);
                var newa = [];
                // 建立新array 修改過的資料丟到array
                console.log(window.MyChart);
                console.log(revisedata);
                console.log(d);
                revisedata.forEach((k, j) => {
                  console.log(k[0].case.trim() == d.case.trim());

                  // const a = k.filter((kp) => kp.case == d.case);
                  if (k[0].case.trim() == d.case.trim()) {
                    newa.push(k);
                    console.log(inputs);
                  }
                });
                // console.log(newa);
                // 將犧牲價值丟給該array
                console.log(newa);

                const mydata = MyChart.data;
                // var ars = [];
                console.log(mydata.length);
                mydata.forEach((k, j) => {
                  var dat = {};
                  dat.case = k[0].case;
                  dat.arr = [];
                  if (mydata.length > MyChart.arr.length) {
                    MyChart.arr.push(dat);
                  }
                });
                var arss = [];
                var arss = MyChart.arr;

                arss.forEach((datas, datasi) => {
                  if (datas.case == d.case) {
                    datas.arr.push(parseInt(inputs));
                    // datas.arr.push(datas.case == d.case);
                  }
                  // console.log(datas);
                });

                console.log(arss);
                arss = arss.filter((kd, ki) => kd.case == d.case);
                // console.log(arss);
                var scrifiValue = arss[0].arr.reduce((a, b) => a + b, 0);
                if (newa.length != 0) {
                  newa[0].filter((p) => p.area == "拿多少錢願意去")[0].value =
                    parseInt(scrifiValue);
                }

                $(".toolTip2").hide();
                if ($(".textbox").length > 1) {
                  $(".textbox")[0].remove();
                }

                console.log(MyChart.data);

                const values = MyChart.data.map((subarray) => {
                  return subarray.map((item) => item.value);
                });
                // console.log(values);
                function removeSmallerArray(a) {
                  for (let i = 0; i < a.length; i++) {
                    for (let j = 0; j < a.length; j++) {
                      if (
                        i !== j &&
                        a[i].every((x) => a[j].some((y) => x < y))
                      ) {
                        a.splice(i, 1);
                        return i;
                      }
                    }
                  }
                  return -1;
                }

                console.log(removeSmallerArray(values));

                // MyChart.data.forEach((array) => {
                //   array.forEach((object) => {
                //     if (object.level === 0) {
                //       return;
                //     } else if (object.level === "A") {
                //       object.value = 90;
                //     } else if (object.level === "B") {
                //       object.value = 60;
                //     } else if (object.level === "C") {
                //       object.value = 10;
                //     } else if (object.level === "好") {
                //       object.value = 90;
                //     } else if (object.level === "差") {
                //       object.value = 50;
                //     }
                //   });
                // });

                MyChart.data2 = JSON.parse(JSON.stringify(MyChart.data));
                // MyChart.data = JSON.parse(JSON.stringify(newdata2));

                /////
                let main_table = $(".main-table");

                console.log(MyChart.data);

                let data2 = MyChart.dominant.map((dc) => dc[0]);
                let data3 = MyChart.dominant.map((dc) => dc);
                let ar = [];
                data3.forEach((ds, di) => {
                  ds.forEach((cds, cdi) => {
                    ar.push(cds);
                  });
                });
                data3 = ar;
                console.log(data3);
                if (
                  $(".main-table")[0].children[0].classList[0] == "row_tab2"
                ) {
                  $(".main-table")[0].children[0].remove();
                }

                console.log($(".main-table")[0].children);
                console.log(data2);
                let domanates = [...$("#htable>th")]
                  .filter((f, ii) => ii != 0)
                  .map((c, ci) => c.textContent);

                console.log(domanates);

                console.log(data3);
                var ark = [];
                data3.forEach((da, di) => {
                  var ar6 = da.map((das, dai) => das.area);

                  var difference = ar6.filter(
                    (x) => domanates.indexOf(x) === -1
                  );
                  var differenceIndex = ar6
                    .map((val, i) => (domanates.indexOf(val) === -1 ? i : ""))
                    .filter(String);
                  // ark.push([...differenceIndex]);
                  console.log(differenceIndex);
                  da.forEach((f, fi) => {
                    differenceIndex.forEach((ff, fia) => {
                      if (fi == ff) {
                        da.splice(ff, 1);
                      }
                    });
                  });
                });

                // data3.forEach((d, i) => {
                //   const trow = main_table.append(
                //     `<tr class='row_tab2'> <th><del>${d[0].case}</del></th> </tr>`
                //   );
                //   if (
                //     $(".main-table")[0].children[0].classList[0] == "row_tab2"
                //   ) {
                //     $(".main-table")[0].children[0].remove();
                //   }

                //   // console.log(d);
                //   d.forEach((d2, i2) => {
                //     let data4 = data3[i][i2];
                //     let orgdata = data3[i][i2].orgdata;
                //     let s = "";
                //     console.log(i);
                //     var arr = [0, 2, 2, 2, 2];
                //     console.log(d);
                //     let largeValue = "";
                //     console.log(trow);
                //     let smallValue = Math.floor(d2.value);
                //     // console.log(MyChart.data.length);
                //     // console.log(i2);

                //     function translateval(datas, i2, category) {
                //       const levelMap = {
                //         0: Math.floor(datas),
                //         1: datas > 50 ? "好" : "差",
                //         2: datas < 33 ? "C" : datas <= 66 ? "B" : "A",
                //       };

                //       const level = levelMap[category];
                //       console.log(i2);
                //       console.log(category);
                //       console.log(data4);
                //       // console
                //       // data4[i2].level = level;
                //       return level;
                //     }

                //     // console.log(i);
                //     // console.log(i2);
                //     function display(val, i2, type) {
                //       console.log(type);
                //       let res = translateval(val, i, i2);
                //       return `${res}`;
                //     }
                //     largeValue = display(d2.value, arr[i2]);
                //     console.log(largeValue);
                //     $(".row_tab2")[
                //       i
                //     ].innerHTML += `<td class="rowtd"><div class="desc">
                //       <span>${s} ${largeValue}</span>
                //     </div><div class="txt">
                //     <span>${orgdata}</span>
                //   </div></td>`;
                //   });
                // });
                // console.log(
                //   [...$(".main-table>tr")[0].children]
                //     .filter((m, i) => i > 1)
                //     .map((dd, ii) => dd.children[0].innerText)
                // );

                let ak = [...$(".main-table>tr")]
                  .filter((m, i) => i > 0)
                  .map((dc, di) => {
                    return [...dc.children]
                      .filter((cc, ci) => ci > 1)
                      .map((dd, cc) => {
                        var ars = dd.children[0].innerText.split(" ");
                        var ars2 = ars[ars.length - 1];
                        console.log(ars2);
                        return ars2;
                      });
                  });
                let ak2 = [...$(".main-table>.row_tab")]
                  // .filter((m, i) => i > 0)
                  .map((dc, di) => {
                    return [...dc.children]
                      .filter((cc, ci) => ci > 1)
                      .map((dd, cc) => {
                        var ars = dd.children[0].innerText.split(" ");
                        var ars2 = ars[ars.length - 1];
                        console.log(ars2);
                        return ars2;
                      });
                  });
                console.log(ak);
                function findMatchingValues(arr) {
                  const indices = [];
                  for (let i = 0; i < arr[0].length; i++) {
                    let match = true;
                    for (let j = 0; j < arr.length; j++) {
                      if (arr[j][i] !== arr[0][i]) {
                        match = false;
                        break;
                      }
                    }
                    if (match) {
                      // if (i != 0) {
                      indices.push(i);
                      // }
                    }
                  }
                  return indices;
                }

                let index = findMatchingValues(ak);
                // index = [...ak, ...ak2];
                console.log(ak2);
                let index2 = findMatchingValues(ak2);
                console.log(index2);
                let index3 = [...index, ...index2];
                index3 = [...new Set(index3)];
                console.log(index3);
                // let r3 = [...$(".main-table>tr")].map((dc, di) => {
                //   return [...dc.children].map((dd, cc) => dd);
                // });

                const a3 = [...index3];
                console.log(a3);
                a3.forEach((b3, bi) => {
                  MyChart.data.forEach((cpd, cpi) => {
                    cpd[b3 + 1].even = 1;
                    // cpd[b3 + 1]
                    console.log(cpd);
                    console.log(b3);
                    console.log(cpd[b3 + 1]);

                    MyChart.even2.push(b3 + 1);
                  });
                  MyChart.data2.forEach((cpd, cpi) => {
                    cpd[b3 + 1].even = 1;
                    console.log(cpd[b3 + 1]);
                  });
                });
                let datas = MyChart.data.map((dd, ii) => {
                  return dd.filter((dk, di) => dk.even != 1);
                });
                // even 之後的data
                console.log(datas);
                const values2 = datas.map((subarray) => {
                  return subarray.map((item) => item.value);
                });
                console.log(values2);
                // function removeSmallerArray2(a) {
                //   let arr = [];
                //   for (let i = 0; i < a.length; i++) {
                //     for (let j = 0; j < a.length; j++) {
                //       if (
                //         i !== j &&
                //         a[i].every((x) => a[j].some((y) => x < y))
                //       ) {
                //         // a.splice(i, 1);
                //         arr.push(i);
                //       }
                //     }
                //   }

                //   return [...new Set(arr)];
                // }
                // even 的
                console.log(index);

                //dominate 的
                function removeSmallerArray3(da) {
                  const indices = [];
                  for (let i = 0; i < da.length; i++) {
                    let isSmaller = true;
                    for (let j = 0; j < da[i].length; j++) {
                      if (da[i][j] >= Math.max(...da.map((a) => a[j]))) {
                        isSmaller = false;
                        break;
                      }
                    }
                    if (isSmaller) {
                      indices.push(i);
                    }
                  }

                  return indices;
                }
                console.log(removeSmallerArray3(values2));
                let dom = removeSmallerArray3(values2);

                const values3 = datas.map((subarray) => {
                  return subarray
                    .map((item) => {
                      if (item.area == "拿多少錢願意去") {
                        return item.value;
                      }
                    })
                    .filter((ff, fi) => ff != undefined);
                });

                // function smallerArray3(a) {
                //   let arr = [];
                //   for (let i = 0; i < a.length; i++) {
                //     for (let j = 0; j < a.length; j++) {
                //       if (
                //         i !== j &&
                //         a[i].every((x) => a[j].some((y) => x < y))
                //       ) {
                //         // a.splice(i, 1);
                //         arr.push(i);
                //       }
                //     }
                //   }

                //   return [...new Set(arr)];
                // }
                // let doms = biggerllerArray2(values2);
                // let doms = smallerArray3(values3);
                // console.log(smallerArray3(values3));
                // console.log(doms);
                console.log(dom);
                // dom = doms;
                // dom = dom.filter(function (value) {
                //   return !doms.includes(value);
                // });

                // dom = dom.filter(function (value) {
                //   return doms.includes(value);
                // });

                console.log(values3);
                let redominate = MyChart.dominatevalue;

                // 2次dominate之前
                // console.log($("#carView>.hidecard"));

                MyChart.dominatevalue = dom;
                console.log(MyChart.dominatevalue);

                MyChart.evenvalue = index3;
                console.log(dom);
                [...$(".card")].forEach((card, cardi) => {
                  if (MyChart.dominatevalue.includes(cardi)) {
                    // console.log($(card)[0].innerHTML);
                    if (card.style.display != "none") {
                      MyChart.reycle2.push($(card)[0].innerHTML);
                    }
                  }
                });
                console.log(MyChart.data);
                console.log(MyChart.dominatevalue);
                MyChart.data.forEach((m0, mi) => {
                  if (!MyChart.dominatevalue.includes(mi)) {
                    console.log(m0);
                    m0.forEach((ma, md) => {
                      // console.log(ma);
                      if (ma.even != 1) {
                        // ma = MyChart.data3[mi][md];
                        // console.log
                        // console.log(ma);
                        // console.log(MyChart.data3[mi][md]);
                        // MyChart.data[mi][md] = MyChart.data3[mi][md];
                        // MyChart.data[mi][md] = MyChart.data3[mi][md];
                        // MyChart.data2[mi][md] = MyChart.data3[mi][md];
                        // MyChart.data2[mi][md] = MyChart.data3[mi][md];
                      }
                    });
                    // console.log(MyChart.data3[mi]);
                  }
                });
                console.log(MyChart.data);
                // MyChart.data2 = JSON.parse(JSON.stringify(MyChart.data));
                MyChart.repaint(MyChart.data);

                $("#htable").prevAll().remove();
                // RadarChart.draw(MyChart.data);
                // RadarChart.draw("#chart", MyChart.data, config);
                Cardview.draw(MyChart.data);
                [...$(".card")].forEach((card, cardi) => {
                  // console.log(redominate.includes(cardi));
                  if (redominate.includes(cardi)) {
                    // $([...$(".card")][cardi]).hide();
                  }
                });
                let rows = [...$(".main-table>tr")].map((r, i) => {
                  return [...r.children].filter((ff, fi) => fi > 1);
                  // console.log();
                });
                console.log(rows);
                //處理even
                rows.forEach((r2, ri) => {
                  r2.forEach((rc, ri) => {
                    if (MyChart.evenvalue.includes(ri)) {
                      console.log(rc);
                      // console.log($(rc));
                      if (rc.tagName == "TH") {
                        rc.classList.add("deleven");
                      } else if (rc.tagName == "TD") {
                        rc.classList.add("even");
                      }
                    }
                  });
                });

                //處理domanate
                let rows2 = [...$(".main-table>.row_tab")];
                // let rows2 = [...$(".main-table>tr")].filter((ff, fa) => fa > 0);
                rows2.forEach((vv, v2) => {
                  if (MyChart.dominatevalue.includes(v2)) {
                    console.log(vv.classList);
                    vv.classList = "row_tab2";
                  }
                });
                // console.log(MyChart.dominatevalue);
                // $("#carView>.hidecard").hide();
                // console.log($("#carView>.hidecard"));
                console.log(redominate);
                [...$(".card")].forEach((card, cardi) => {
                  if (MyChart.dominatevalue.includes(cardi)) {
                    // console.log($(card)[0].innerHTML);
                    // if (redominate.includes(cardi)) {
                    //   MyChart.reycle2.push($(card)[0].innerHTML);
                    // }

                    console.log(card.classList.add("hidecard"));
                    $(card).hide();
                  }
                });
                console.log($(".hidecard"));
                console.log(MyChart.reycle2);
                console.log(redominate);
                MyChart.reycle2.forEach((rec, rei) => {
                  rec = `<div class='card r1 hidecard'>${rec}</div>`;
                  // [...[...$("#carView")][0]]
                  $("#re")[0].innerHTML += rec;
                  // console.log();
                  // console.log();
                  console.log(rec);
                });

                let rectext = [...$("#re>.hidecard>.card-title")].map(
                  (k, p) => k.innerText
                );
                let rows3 = [...$(".main-table>tr")].filter((ff, f2) => f2 > 0);
                console.log(rows3);
                [...$("#carView>.r1>.card-title")].forEach((r2, ri) => {
                  console.log(r2.innerText);
                  console.log(ri);
                  if (rectext.includes(r2.innerText)) {
                    $(r2.parentNode).hide();
                    rows3[ri].classList = "row_tab2";
                    if (!MyChart.dominatevalue.includes(ri)) {
                      MyChart.dominatevalue.push(ri);
                    }

                    // console.log(r2);
                  }
                });
                let allpolygon = [
                  ...d3.select("#chart").selectAll("polygon")[0],
                ];
                console.log(MyChart.dominatevalue);
                allpolygon.forEach((al, ai) => {
                  if (MyChart.dominatevalue.includes(ai)) {
                    $(al).hide();
                  }
                });
                console.log();

                // console.log(MyChart.reycle2);
                // MyChart.recycle += `<div class='card r1 cover'>${
                //   $(".r1")[ori].innerHTML
                // }</div>`;
                // console.log();
              });
              $(".close").on("click", function (c, u) {
                console.log($(".toolTip2"));
                $(".toolTip2").style("display", "none");
                // tooltip2.style("display", "none");
              });
              // console.log(tooltip2);
            })
        )
        .on("mouseout", function () {
          tooltip.style("display", "none");
        }); // for drag & drop

      console.log(maxAxisValues);
    }

    function move(dobj, i) {
      if (dobj.area == "拿多少錢願意去") {
        this.on("mousedown.drag", null);
      }
      // const halfW = cfg.w / 2;
      // const halfH = cfg.h / 2;

      // this.parentNode.appendChild(this);
      // console.log(d3.select(this));
      // var dragTarget = d3.select(this);

      // var oldData = dragTarget.data()[0];
      // // 進行座標位移歸零，以方便計算斜率

      // var oldX = parseFloat(dragTarget.attr("cx")) - halfW;
      // var oldY = halfH - parseFloat(dragTarget.attr("cy"));
      // var newY = 0,
      //   newX = 0,
      //   newValue = 0;
      // var maxX = maxAxisValues[i].x - halfW;
      // var maxY = halfH - maxAxisValues[i].y;

      // // 斜率為無限大的特殊情況
      // if (oldX == 0) {
      //   newY = oldY - d3.event.dy;
      //   // 檢查是否超過範圍
      //   if (Math.abs(newY) > Math.abs(maxY)) {
      //     newY = maxY;
      //   }

      //   if (false && oldY == 0) {
      //     // TODO: Need to fix the problem when oldX and oldY are both zeroes.
      //   } else {
      //     newValue = (newY / oldY) * oldData.value;
      //   }
      // } else {
      //   var slope = oldY / oldX; // 斜率

      //   newX = d3.event.dx + parseFloat(dragTarget.attr("cx")) - halfW;
      //   // 檢查是否超過範圍

      //   if (Math.abs(newX) > Math.abs(maxX)) {
      //     newX = maxX;
      //   }

      //   newY = newX * slope;

      //   var ratio = newX / oldX; // 利用相似三角形等比的概念計算新的值
      //   newValue = ratio * oldData.value;

      //   ///        newValue = Math.max(newValue, 0);
      // }

      // //console.log("=>", oldX, oldY, newX, newY, oldData.value);

      // // 重新設定點的座標
      // dragTarget
      //   .attr("cx", function () {
      //     return newX + halfW;
      //   })
      //   .attr("cy", function () {
      //     return halfH - newY;
      //   });
      // // 重新設定點的值

      // oldData.value = newValue;

      // reCalculatePoints();
      // // 重畫多邊形
      // drawPoly();

      const halfW = cfg.w / 2;
      const halfH = cfg.h / 2;

      this.parentNode.appendChild(this);
      var dragTarget = d3.select(this);

      // Location of the min and max points of the current axis
      let _min = { x: halfW, y: halfH };
      let _max = maxAxisValues[i];
      console.log(dragTarget.data()[0]);

      var oldData = dragTarget.data()[0];
      console.log(oldData);

      var newY = 0,
        newX = 0,
        newValue = 0;

      // Project vector _a onto vector _b
      // _a is a vector from center of the graph (origin) to the current mouse position
      // _b is a vector that represents the current axis (from min to max points along the axis)
      // See: https://en.wikipedia.org/wiki/Vector_projection for more info

      let _a = { x: d3.event.x - _min.x, y: d3.event.y - _min.y };
      let _b = { x: _max.x - _min.x, y: _max.y - _min.y };

      let ratio = (_a.x * _b.x + _a.y * _b.y) / (_b.x * _b.x + _b.y * _b.y);

      ratio = Math.min(Math.max(ratio, 0), 1);

      newX = ratio * (_max.x - _min.x) + halfW;
      newY = ratio * (_max.y - _min.y) + halfH;
      newValue = ratio * cfg.maxValue;

      dragTarget
        .attr("cx", function () {
          return newX;
        })
        .attr("cy", function () {
          return newY;
        });

      // 重新設定點的值
      oldData.value = newValue;
      // 重新計算多邊形的轉折點
      reCalculatePoints();
      // 重畫多邊形
      drawPoly();

      // MyChart.repaint(MyChart.data);
      // RadarChart.draw(MyChart.data);
      // RadarChart.draw("#chart", MyChart.data, config);
      // Cardview.draw(MyChart.data);

      MyChart.repaint(MyChart.data);
      $("#htable").prevAll().remove();
      let rows = [...$(".main-table>tr")].map((r, i) => {
        return [...r.children].filter((ff, fi) => fi > 1);
        // console.log();
      });
      console.log(rows);
      $("#carView>.hidecard").hide();
      rows.forEach((r2, ri) => {
        r2.forEach((rc, ri) => {
          if (MyChart.evenvalue.includes(ri)) {
            console.log(rc);
            // console.log($(rc));
            if (rc.tagName == "TH") {
              rc.classList.add("deleven");
            } else if (rc.tagName == "TD") {
              rc.classList.add("even");
            }
          }
        });
      });
      let rows2 = [...$(".main-table>tr")].filter((ff, fa) => fa > 0);
      rows2.forEach((vv, v2) => {
        if (MyChart.dominatevalue.includes(v2)) {
          console.log(vv.classList);
          vv.classList = "row_tab2";
        }
      });

      // $("#carView>.hidecard").hide();
      // console.log($("#carView>.hidecard"));
      [...$(".card")].forEach((card, cardi) => {
        if (MyChart.dominatevalue.includes(cardi)) {
          console.log(card.classList.add("hidecard"));
        }
      });
      // if ($(".main-table")[0].children[0].classList[0] == "row_tab2") {
      //   $(".main-table")[0].children[0].remove();
      // }

      console.log(MyChart.evenvalue);
      console.log(dragTarget.data()[0]);
      if (
        dragTarget.data()[0].value < 33 &&
        dragTarget.data()[0].level == "C"
      ) {
        tooltip3
          .style("left", d3.event.x + 20 + "px")
          .style("top", d3.event.y + "px")
          .style("display", "inline-block")
          .text("拖曳到此放開並EVEN SWAP!!");
        console.log(tooltip3);
      }
      let rows3 = [...$(".main-table>tr")].filter((ff, f2) => f2 > 0);
      let rectext = [...$("#re>.hidecard>.card-title")].map(
        (k, p) => k.innerText
      );
      [...$("#carView>.r1>.card-title")].forEach((r2, ri) => {
        console.log(r2.innerText);
        console.log(ri);
        if (rectext.includes(r2.innerText)) {
          $(r2.parentNode).hide();
          rows3[ri].classList = "row_tab2";
          // console.log(r2);
        }
      });
      console.log(MyChart.dominatevalue);
      let allpolygon = [...d3.select("#chart").selectAll("polygon")[0]];
      allpolygon.forEach((al, ai) => {
        if (MyChart.dominatevalue.includes(ai)) {
          $(al).hide();
        }
      });
      // const minValue = MyChart.data
      // .map((subArray) => subArray[i])
      // .reduce((prev, curr) => {
      //   return prev.value < curr.value ? prev : curr;
      // }).value;
      // var toolTip3
      //       tooltip3
      //       .style("left", d3.event.pageX + 20 + "px")
      //       .style("top", d3.event.pageY - 40 + "px")
      //       .style("display", "inline-block")
      //       .html(
      //         d.case + "<br><span>" + d.area + "<span>" + d.value + "</span>"
      //       );
      // let ndata = d3.select(dragTarget[0][0].parentNode).selectAll("circle")[0];
      // ndata = [...ndata].map((d) => d.__data__);
      // // console.log();
      // var configs = {
      //   w: 400,
      //   h: 400,
      //   maxValue: 100,
      //   levels: 5,
      //   ExtraWidthX: 300,
      // };
      // var revdata = [];
      // revdata = d3
      //   .select("#chart")
      //   .selectAll("circle")[0]
      //   .map((d) => d.__data__);
      // function groupBy(list, keyGetter) {
      //   const map = new Map();
      //   list.forEach((item) => {
      //     const key = keyGetter(item);
      //     const collection = map.get(key);
      //     if (!collection) {
      //       map.set(key, [item]);
      //     } else {
      //       collection.push(item);
      //     }
      //   });
      //   return map;
      // }

      // const grouped = groupBy(revdata, (revdata) => revdata.case);
      // const revdata2 = Array.from(grouped.values());

      // console.log(revdata2);

      // RadarChart.draw("#chart", revdata2, configs);
    }
    //Tooltip
    // tooltip = g
    //   .append("text")
    //   .style("opacity", 0)
    //   .style("font-family", "sans-serif")
    //   .style("font-size", 10);
  },
  addeven: function addeven() {},
};

// function addeven() {

// }
// var d = [
//   { value: 75, order: 0 },
//   { value: 75, order: 1 },
//   { value: 75, order: 2 },
//   { value: 75, order: 3 },
//   { value: 75, order: 4 },
// ];
// RadarChart.draw("#chart", d);
