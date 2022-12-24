var Tables = {
  draw: function (data) {
    let main_table = $(".main-table");
    main_table.empty();

    const head = main_table.append(
      "<thead><tr  id='htable'><th></th></tr></thead>"
    );
    data[0].forEach((d, i) => {
      //   console.log(d.area);
      $("#htable").append(`<th>${d.area}</th>`);
    });
    // each case title
    data.forEach((d, i) => {
      const trow = main_table.append(
        `<tr class='row_tab'><th>${d[0].case}</th></tr>`
      );
    });
    data.forEach((d, i) => {
      d.forEach((d2, i2) => {
        let data3 = MyChart.data2[i][i2].value;
        let orgdata = MyChart.data2[i][i2].orgdata;
        let s = "";

        function translateval(datas, ik) {
          const levelMap = {
            0: Math.floor(datas),
            1: datas > 50 ? "好" : "差",
            2: datas < 33 ? "C" : datas <= 66 ? "B" : "A",
          };
          const level = levelMap[ik];
          MyChart.data[i][i2].level = level;
          return level;
        }
        var arr = [0, 1, 2, 2, 0];

        if (data3 != d2.value) {
          // console.log(Tables.translateval(data3,i2));

          s = `<del class="deltext">${translateval(data3, arr[i2])}</del>`;
        }

        let largeValue = "";

        let smallValue = Math.floor(d2.value);
        switch (i2) {
          case 0:
            largeValue = display(d2.value, i, 0, 0);
            break;
          case 1:
            largeValue = display(d2.value, i, 1, 1);
            break;
          case 2:
            largeValue = display(d2.value, i, 2, 2);
            break;
          case 3:
            largeValue = display(d2.value, i, 3, 2);
            break;
          case 4:
            largeValue = display(d2.value, i, 4, 2);
            break;
        }
        if (largeValue < 0) {
          largeValue = 0;
        }
        // console.log($(".row_tab")[i]);
        $(".row_tab")[i].innerHTML += `<td><div class="desc">
        <span>${s} ${largeValue}</span>
      </div><div class="txt">
      <span>${orgdata}</span>
    </div></td>`;
      });
    });
    function translateval(datas, ix, i2, category) {
      const levelMap = {
        0: Math.floor(datas),
        1: datas > 50 ? "好" : "差",
        2: datas < 33 ? "C" : datas <= 66 ? "B" : "A",
      };
      const level = levelMap[category];
      MyChart.data[ix][i2].level = level;
      return level;
    }
    function display(val, i, i2, type) {
      let res = translateval(val, i, i2, type);
      return `${res}`;
    }
    // 將每一列的數值（val）轉換成要顯示的值

    // function translateval(datas, ix, i2, i) {
    //   switch (i) {
    //     case 0:
    //       MyChart.data[ix][i2].level = Math.floor(datas);
    //       return Math.floor(datas);
    //     case 1:
    //       if (datas > 50) {
    //         MyChart.data[ix][i2].level = "好";
    //         return "好";
    //       } else {
    //         MyChart.data[ix][i2].level = "差";
    //         return "差";
    //       }
    //     case 2:
    //       if (datas < 33) {
    //         MyChart.data[ix][i2].level = "C";
    //         return "C";
    //       } else if (datas >= 33 && datas <= 66) {
    //         MyChart.data[ix][i2].level = "B";
    //         return "B";
    //       } else if (datas > 66) {
    //         MyChart.data[ix][i2].level = "A";
    //         return "A";
    //       }
    //   }
    // }

    // function translateval(datas, ik) {
    //   switch (ik) {
    //     case 0:
    //       MyChart.data[i][i2].level = Math.floor(datas);
    //       return Math.floor(datas);
    //     case 1:
    //       if (datas > 50) {
    //         MyChart.data[i][i2].level = "好";
    //         return "好";
    //       } else {
    //         MyChart.data[i][i2].level = "差";
    //         return "差";
    //       }
    //     case 2:
    //       if (datas < 33) {
    //         MyChart.data[i][i2].level = "C";
    //         return "C";
    //       } else if (datas >= 33 && datas <= 66) {
    //         MyChart.data[i][i2].level = "B";
    //         return "B";
    //       } else if (datas > 66) {
    //         MyChart.data[i][i2].level = "A";
    //         return "A";
    //       }
    //   }
    // }
    // function display0(val, i, i2) {
    //   return `${Math.floor(val)}`;
    // }

    // function display1(val, i, i2) {
    //   let res = translateval(val, i, i2, 1);
    //   return `${res}`;
    // }

    // function display2(val, i, i2) {
    //   let res = translateval(val, i, i2, 2);
    //   return `${res}`;
    // }

    // function display3(val, i, i2) {
    //   let res = translateval(val, i, i2, 2);
    //   // return `${Math.floor(val)}`;
    //   return `${res}`;
    // }

    // function display4(val, i, i2) {
    //   let res = translateval(val, i, i2, 0);
    //   return `${Math.floor(val)}`;
    // }
    // function display5(val, i, i2) {
    //   return `${Math.floor(val)}`;
    // }
    // function display6(val, i, i2) {
    //   return `${Math.floor(val)}`;
    // }
  },
};
