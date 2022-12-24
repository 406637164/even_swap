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
      radius: 5, // 點的半徑
      w: 130,
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
    var tooltip2;
    function drawnode() {
      console.log(d);
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
          // tooltip2.style("display", "none");
          tooltip2 = d3.select("body").append("div").attr("class", "toolTip2");

          var newd = 0;
          newd = d.value;
          if (d.value < 0) {
            newd = 0;
          }
          //   .html(d.area + "<span>" + d.value + "</span>");
          newX = parseFloat(d3.select(this).attr("cx")) - 10;
          newY = parseFloat(d3.select(this).attr("cy")) - 5;
          if (d.area == "拿多少錢願意去") {
            tooltip
              .style("left", d3.event.pageX - 40 + "px")
              .style("top", d3.event.pageY - 80 + "px")
              .style("display", "inline-block")
              .html(
                d.case + "<br><span>" + d.area + "<span>" + d.value + "</span>"
              );
          } else {
            tooltip
              .style("left", d3.event.pageX - 40 + "px")
              .style("top", d3.event.pageY - 80 + "px")
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
            .on("dragend", function (d) {
              // tooltip.style("display", "block");
              // console.log(d);
              var newd = 0;
              newd = d.value;
              if (d.value < 0) {
                newd = 0;
              }
              //   .html(d.area + "<span>" + d.value + "</span>");
              // console.log(d3.event.sourceEvent.x);
              newX = parseFloat(d3.select(this).attr("cx")) - 10;
              newY = parseFloat(d3.select(this).attr("cy")) - 5;
              tooltip2
                .style("left", d3.event.sourceEvent.x - 40 + "px")
                .style("top", d3.event.sourceEvent.y - 80 + "px")
                .style("display", "inline-block")
                .html(
                  d.case +
                    "<button  class='close'></button><br><span>" +
                    d.area +
                    "<span>分數  " +
                    d.level +
                    "</span><br><span>拿多少錢願意去<br><input type='text' class='textbox'><span>    <button class='swapbtn'>SWAP</button>"
                );

              $(".swapbtn").on("click", function (c, u) {
                // $(".textbox")
                // console.log(d.case);

                console.log($(".textbox"));
                const inputs = $(".textbox")[$(".textbox").length - 1].value;
                const revisedata = window.MyChart.data;
                // console.log(d.case);
                var newa = [];
                // 建立新array 修改過的資料丟到array
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
                newa[0].filter((p) => p.area == "拿多少錢願意去")[0].value =
                  parseInt(scrifiValue);
                tooltip2.style("display", "none");
                if ($(".textbox").length > 1) {
                  $(".textbox")[0].remove();
                }
                MyChart.repaint();
                Cardview.draw(MyChart.data);
              });
              $(".close").on("click", function (c, u) {
                tooltip2.style("display", "none");
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
      const halfW = cfg.w / 2;
      const halfH = cfg.h / 2;

      this.parentNode.appendChild(this);
      var dragTarget = d3.select(this);

      var oldData = dragTarget.data()[0];
      // 進行座標位移歸零，以方便計算斜率
      var oldX = parseFloat(dragTarget.attr("cx")) - halfW;
      var oldY = halfH - parseFloat(dragTarget.attr("cy"));
      var newY = 0,
        newX = 0,
        newValue = 0;
      var maxX = maxAxisValues[i].x - halfW;
      var maxY = halfH - maxAxisValues[i].y;

      // 斜率為無限大的特殊情況
      if (oldX == 0) {
        newY = oldY - d3.event.dy;
        // 檢查是否超過範圍
        if (Math.abs(newY) > Math.abs(maxY)) {
          newY = maxY;
        }

        if (false && oldY == 0) {
          // TODO: Need to fix the problem when oldX and oldY are both zeroes.
        } else {
          newValue = (newY / oldY) * oldData.value;
        }
      } else {
        var slope = oldY / oldX; // 斜率

        newX = d3.event.dx + parseFloat(dragTarget.attr("cx")) - halfW;
        // 檢查是否超過範圍

        if (Math.abs(newX) > Math.abs(maxX)) {
          newX = maxX;
        }

        newY = newX * slope;

        var ratio = newX / oldX; // 利用相似三角形等比的概念計算新的值
        newValue = ratio * oldData.value;

        ///        newValue = Math.max(newValue, 0);
      }

      //console.log("=>", oldX, oldY, newX, newY, oldData.value);

      // 重新設定點的座標
      dragTarget
        .attr("cx", function () {
          return newX + halfW;
        })
        .attr("cy", function () {
          return halfH - newY;
        });
      // 重新設定點的值

      oldData.value = newValue;
      // 重新計算多邊形的轉折點
      reCalculatePoints();
      // 重畫多邊形
      drawPoly();
      // let ndata = d3
      //   .select(dragTarget[0][0].parentNode)
      //   .select("polygon")[0][0];
      MyChart.repaint();
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
};
// var d = [
//   { value: 75, order: 0 },
//   { value: 75, order: 1 },
//   { value: 75, order: 2 },
//   { value: 75, order: 3 },
//   { value: 75, order: 4 },
// ];
// RadarChart.draw("#chart", d);
