const cardview = $("#carView");
console.log(cardview);
var Cardview = {
  draw: function (data) {
    // console.log(data);

    data.forEach((d, i) => {
      if (cardview[0].children.length < data.length) {
        cardview.append(`   <div class="card r1">
        <div class="card-title">${d[0].case}</div>
        <div class="card-radar"></div>
      
      </div>   `);
      }

      const eachRader = $(".card-radar")[i];

      var width = 150;
      height = 150;

      var config = {
        w: width,
        h: height,
        maxValue: 100,
        levels: 5,
        ExtraWidthX: 300,
      };
      var rgb = [
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
      ];
      // console.log();
      console.log(data);
      const newr = data.map((y2, x2) => {
        const ar2 = y2
          .filter((k) => k.area === "拿多少錢願意去")
          .map((k) => k.value);
        const sums = ar2.filter((v) => data[x2][x2].value < v).length;
        return { values: ar2, sums };
      });
      console.log(newr);

      const ars = data.flatMap((y2) =>
        y2.filter((k) => k.area === "拿多少錢願意去").map((k) => k.value)
      );
      console.log(ars);
      const maxars = d3.max(ars, (dk) => dk);
      var dat = 0;
      if (data[i][0].value == 0) {
        dat = data[i][0].value;
      } else {
        dat = (data[i][0].value / maxars) * 100;
      }

      DragRadarChart.draw(eachRader, data[i], config, rgb[i], dat);
    });
  },
};
