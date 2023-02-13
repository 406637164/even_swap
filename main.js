// axios
//   .get("data.json")
//   .then(function (d) {
//     // handle success

//     return d.data;
//   })
//   .then(function (error, data) {
//     console.log(data);
//     console.log(error);
//   })
axios
  .get("data.json")
  .then(function (d) {
    // handle success
    d.data.forEach((array, i) => {
      array.forEach((object) => {
        object.cor = i;
        object.nums = i;
      });
    });
    var arr = [0, 2, 2, 2, 2];

    function translateval(datas, i2) {
      const levelMap = {
        0: Math.floor(datas),
        1: datas > 50 ? "好" : "差",
        2: datas < 33 ? "C" : datas <= 66 ? "B" : "A",
      };
      console.log(levelMap[i2]);
      const level = levelMap[i2];

      return level;
    }
    d.data.forEach((d, i) => {
      d.forEach((d2, i2) => {
        console.log(arr[i2]);
        // console.log(d2);
        d2.level = translateval(d2.value, arr[i2]);
        if (d2.level === 0) {
          return;
        } else if (d2.level === "A") {
          d2.value = 90;
        } else if (d2.level === "B") {
          d2.value = 60;
        } else if (d2.level === "C") {
          d2.value = 10;
        } else if (d2.level === "好") {
          d2.value = 90;
        } else if (d2.level === "差") {
          d2.value = 50;
        }
      });
    });
    console.log(d.data);
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
    return d.data;
  })
  .then(function (data) {
    // if (error) throw error;
    console.log(data);
    window.MyChart = {
      data2: JSON.parse(JSON.stringify(data)),
      data,
      data3: JSON.parse(JSON.stringify(data)),
      arr: [],
      a3: [],
      evens: [],
      repaint: function (data) {
        console.log(data);
        // MyChart.data2 = JSON.parse(JSON.stringify(data));

        // $("#carView>.hidecard").hide();
        Tables.draw(MyChart.data);
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
        RadarChart.draw("#chart", MyChart.data, config);

        // Tables.draw(MyChart.data);
        // MyChart.data = JSON.parse(JSON.stringify(newdata));

        // MyChart.data2 = JSON.parse(JSON.stringify(data));
        //

        console.log(data);
      },
      arr2: [],
      config: {
        w: 400,
        h: 400,
        maxValue: 100,
        levels: 5,
        ExtraWidthX: 300,
      },
      even: [],
      even2: [],
      recycle: "",
      reycle2: [],
      dominatevalue: [],
      evenvalue: [],
      datas: data,
      dominant: [],
      Dominatefunc: function (datas) {
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
        MyChart.data2.forEach((array) => {
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
        return datas;
      },
    };
    // let orgs = JSON.parse(JSON.stringify(data));
    // function ddd(datas) {

    // }

    // let newdata = MyChart.Dominatefunc(data);
    // let newdata2 = MyChart.Dominatefunc(newdata);
    // let newdata2 = ddd(newdata);

    // MyChart.data = JSON.parse(JSON.stringify(newdata2));
    // MyChart.data2 = JSON.parse(JSON.stringify(data));
    // MyChart.data2 = JSON.parse(JSON.stringify(MyChart.data));
    // MyChart.repaint(MyChart.data);
    Cardview.draw(MyChart.data);

    MyChart.repaint(MyChart.data);
    // $("#carView").append("<div></div>");
    // MyChart.repaint();
  });
