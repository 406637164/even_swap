const cardview = $("#carView");
console.log(cardview);
var Cardview = {
  draw: function (data) {
    console.log(data);
    cardview[0].innerHTML = "";

    let datas = data.map((dd, ii) => {
      return dd.filter((dk, di) => dk.even != 1);
    });
    datas.forEach((array) => {
      array.forEach((object) => {
        if (object.level === 0) {
          return;
        } else if (object.level === "A") {
          object.value = 90;
        } else if (object.level === "B") {
          object.value = 60;
        } else if (object.level === "C") {
          object.value = 10;
        } else if (object.level === "好") {
          object.value = 90;
        } else if (object.level === "差") {
          object.value = 50;
        }
      });
    });
    console.log();
    datas.forEach((d, i) => {
      if (cardview[0].children.length < datas.length) {
        cardview.append(`   <div class="card r1">
        <div class="card-title">${d[0].case}</div>
        <div class="card-radar"></div>
      
      </div>   `);
      }

      const eachRader = $(".card-radar")[i];

      var width = 250;
      height = 250;

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
      // console.log(data);
      // const newr = data.map((y2, x2) => {
      //   const ar2 = y2
      //     .filter((k) => k.area === "拿多少錢願意去")
      //     .map((k) => k.value);
      //   console.log(ar2);
      //   const sums = ar2.filter((v) => data[x2][x2].value < v).length;
      //   return { values: ar2, sums };
      // });
      // console.log(newr);
      // console.log(data);
      // data.forEach(function (array) {
      //   array = array.filter(function (obj) {
      //     return obj.even !== 1;
      //   });
      // });
      const ars = datas.flatMap((y2) =>
        y2.filter((k) => k.area === "拿多少錢願意去").map((k) => k.value)
      );
      console.log(ars);
      const maxars = d3.max(ars, (dk) => dk);
      var dat = 0;
      if (datas[i][0].value == 0) {
        dat = datas[i][0].value;
      } else {
        dat = (datas[i][0].value / maxars) * 100;
      }
      console.log(dat);
      console.log();
      // $("#carView").append("<div></div>");

      DragRadarChart.draw(eachRader, datas[i], config, rgb[d[0].cor], dat);
    });
    // console.log(MyChart.recycle);
    $("#carView").append("<div id='re'></div>");
    $("#re")[0].innerHTML = MyChart.recycle;
    console.log(MyChart.recycle);
  },
};
