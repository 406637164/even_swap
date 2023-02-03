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
        // data.forEach((array) => {
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
        // data.forEach((array) => {
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

        console.log(data);
        // MyChart.data2 = JSON.parse(JSON.stringify(data));
        // $("#carView>.hidecard").hide();
        RadarChart.draw("#chart", data, config);

        Tables.draw(MyChart.data);
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
        console.error(datas);
        console.log(MyChart.a3);
        datas = JSON.parse(JSON.stringify(datas));
        let org = JSON.parse(JSON.stringify(datas));
        datas.forEach((array, i) => {
          array.forEach((object, i3) => {
            console.log(i3);

            if (MyChart.a3.includes(i3)) {
              object.even = 1;
              console.log(object);
            }
          });
        });
        org.forEach((array, i) => {
          array.forEach((object, i3) => {
            console.log(i3);

            if (MyChart.a3.includes(i3)) {
              object.even = 1;
              console.log(object);
            }
          });
        });
        console.log(org);
        // let data = org.map((subarray) => {
        //   return subarray
        //     .map((item) => {

        //       console.log(item);
        //       if (item.even != 1) {
        //         return item.value;
        //       }

        //       // }
        //     })
        //     .filter((ff, fi) => ff != null);
        // });
        // console.log(data);
        var cpdata = JSON.parse(JSON.stringify(data));
        console.log(cpdata);
        function removeSmallerArray(data) {
          data.forEach((d, i) => {
            var referenceArray = d;
            data = data.filter((subArray, i) => {
              if (
                !subArray.every((value, index) => {
                  if (value < referenceArray[index]) {
                    return value < referenceArray[index];
                  }
                })
              ) {
                return !subArray.every((value, index) => {
                  if (value < referenceArray[index]) {
                    return value < referenceArray[index];
                  }
                });
              }
            });
          });
          return data;
        }
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
              if (i != 0) {
                indices.push(i);
              }
            }
          }
          return indices;
        }
        //even 要移除的index

        let index = findMatchingValues(data);
        console.log(index);
        index.forEach((d, i) => {
          if (d != 0) {
            data.forEach((d2, i2) => {
              d2.splice(d2.indexOf(d2[d]), 1);
            });
          }
        });

        console.log(index);
        let data2 = removeSmallerArray(data);
        console.log(data2);

        const result = data
          .map((item, i) =>
            data2.findIndex((x) => x.every((v, index) => v === item[index])) ===
            -1
              ? i
              : -1
          )
          .filter((i) => i !== -1);
        console.log("這是dominate要移除的index");

        // if (index.length == 0) {
        // console.log(index);
        // index = findMatchingValues(data2);
        console.log(index);
        // }

        // console.log(result);
        const a3 = [...index];
        let newc = [];
        console.log(newc);

        org.forEach((cpd, k) => {
          //  let new6 = [];
          cpd.forEach((dpd, dpi) => {
            a3.forEach((dpd2, dpi2) => {
              if (dpd2 == dpi) {
                newc.push(cpd[dpi]);
              }
            });
            //     newc.push(new6);
          });
        });
        // if (newc.length != 0) {
        //   MyChart.data2 = MyChart.data;
        // }
        // console.error(newc);
        //    even 過後的內容
        console.log(newc);
        // if (newc.length != 0) {
        // MyChart.even2.push(newc);
        // MyChart.even.push(newc);
        // }
        console.log(MyChart.even);
        console.log(MyChart.even);
        let new7 = [];
        console.error(result);

        result.forEach((rp, ri) => {
          //     console.log(org[rp]);

          new7.push(org[rp]);
        });
        // dominate 過後必須加的陣列內容
        console.log(new7);

        if (new7.length != 0) {
          MyChart.dominant.push(new7);
        }
        console.log(MyChart.dominant);
        console.log(a3);
        // MyChart.a3 = a3;
        console.log(MyChart.data);
        datas.forEach((array, i) => {
          array.forEach((object, i3) => {
            console.log(i3);

            if (a3.includes(i3)) {
              object.even = 1;
              console.error(object);
            }
          });
        });
        // a3.forEach((b3, bi) => {
        //   org.forEach((cpd, cpi) => {
        //     console.log(cpd[b3]);
        //     // cpd.splice(b3, 1);
        //   });
        // });

        // a3.forEach((b3, bi) => {
        //   org.forEach((cpd, cpi) => {
        //     console.log(cpd[b3]);
        //     cpd.splice(b3, 1);
        //   });
        // });
        // console.log(new7);
        new7.forEach((or, oi) => {
          org.forEach((or2, ori) => {
            if (or == or2) {
              // $("#carView").append($(".r1")[ori]);

              MyChart.recycle += `<div class='card r1 cover'>${
                $(".r1")[ori].innerHTML
              }</div>`;

              // console.log($("#carView"));
              // $("#carView2")[0].innerHTML += `<div class='card r1'>${$(".r1")[ori].innerHTML}</div>`;
              // $("#carView2>.card")[0].innerHTML += $(".r1")[ori].innerHTML;
              // $("#carView2").append($("#carView2>.card"));
              // $("#carView")[0].innerHTML += $("#carView2>.card")[0].innerHTML;
              // console.log($("#carView")[0].innerHTML);
              console.log($(".r1")[ori]);
              console.log(org[ori]);
              console.log(ori);
              org.splice(ori, 1);
            }
          });

          MyChart.datas.forEach((or2, ori) => {
            if (oi == ori) {
              // MyChart.datas.splice(ori, 1);
            }
          });
        });
        console.log(MyChart.a3);
        let ak0 = [...$(".main-table>.row_tab")]
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
        console.log(ak0);

        // if (result.length != 0) {
        // MyChart.data2 = JSON.parse(JSON.stringify(MyChart.data));
        // MyChart.data2 = MyChart.data;
        // MyChart.data = JSON.parse(JSON.stringify(MyChart.datas));
        // console.log(MyChart);
        // }
        // MyChart.data = MyChart.datas;MyChart.datas
        // org = MyChart.datas;
        // MyChart.data = org;
        console.log(MyChart);
        // console.log(org);
        console.error(MyChart.datas);
        return org;
      },
    };
    // let orgs = JSON.parse(JSON.stringify(data));
    // function ddd(datas) {

    // }

    let newdata = MyChart.Dominatefunc(data);
    let newdata2 = MyChart.Dominatefunc(newdata);
    // let newdata2 = ddd(newdata);

    MyChart.data = JSON.parse(JSON.stringify(newdata2));
    MyChart.data2 = JSON.parse(JSON.stringify(newdata2));
    Cardview.draw(MyChart.data);
    MyChart.repaint(MyChart.data);
    // MyChart.repaint(MyChart.data);
    // $("#carView").append("<div></div>");
    // MyChart.repaint();
  });
