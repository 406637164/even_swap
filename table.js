var Tables = {
  draw: function (data) {
    // MyChart.data2 = JSON.parse(JSON.stringify(data));
    // console.log(MyChart.dominant.map((dc) => dc[0]));

    // let newdata = MyChart.Dominatefunc(data);
    // let newdata2 = MyChart.Dominatefunc(newdata);
    // let newdata2 = ddd(newdata);

    // MyChart.data = JSON.parse(JSON.stringify(newdata));
    // data = MyChart.data;

    console.log(data);
    console.log(MyChart);
    let main_table = $(".main-table");
    // main_table.empty();
    [...main_table[0].children].forEach((ds, di) => {
      if (ds.id == "htable" || ds.classList[0] == "row_tab") {
        ds.remove();
      }
    });
    console.log($(".main-table"));
    // data2.forEach((d, i) => {
    //   const trow = main_table.append(
    //     `<tr class='row_tab'><th>${d[0].case}</th></tr>`
    //   );
    // });
    const head = main_table.append("<tr  id='htable'><th></th></tr>");
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
    // if (MyChart.dominant.length != 0) {
    //   MyChart.data2 = MyChart.datas;
    // }
    // console.log(MyChart.data2);
    // console.log(MyChart.data2);
    data.forEach((d, i) => {
      d.forEach((d2, i2) => {
        console.log(d2);
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
          console.log(level);
          console.log(MyChart.data[i][i2]);
          MyChart.data[i][i2].level = level;
          MyChart.data2[i][i2].level = level;
          return level;
        }
        var arr = [0, 2, 2, 2, 2];

        console.log(MyChart.data[i][i2]);
        if (data3 != d2.value) {
          console.log(MyChart.data2[i][i2].level == d2.level);
          console.log(MyChart.data2[i][i2]);
          console.log(d2.value);
          console.log(d2);
          if (d2.level != MyChart.data2[i][i2].level) {
            s = `<del class="deltext">${translateval(data3, arr[i2])}</del>`;
          }
        }

        let largeValue = "";

        let smallValue = Math.floor(d2.value);
        switch (i2) {
          case 0:
            largeValue = display(d2.value, i, i2, arr[i2]);
            break;
          case 1:
            largeValue = display(d2.value, i, i2, arr[i2]);
            break;
          case 2:
            largeValue = display(d2.value, i, i2, arr[i2]);
            break;
          case 3:
            largeValue = display(d2.value, i, i2, arr[i2]);
            break;
          case 4:
            largeValue = display(d2.value, i, i2, arr[i2]);
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
      function translateval(datas, ix, i2, category) {
        const levelMap = {
          0: Math.floor(datas),
          1: datas > 50 ? "好" : "差",
          2: datas < 33 ? "C" : datas <= 66 ? "B" : "A",
        };
        const level = levelMap[category];
        console.log(category);
        console.log(MyChart.data[ix][i2]);
        MyChart.data[ix][i2].level = level;
        // switch (MyChart.data[ix][i2].level) {
        //   case "A":
        //     MyChart.data[ix][i2].value = 90;
        //     break;
        //   case "B":
        //     MyChart.data[ix][i2].value = 65;
        //     break;
        //   case "C":
        //     MyChart.data[ix][i2].value = 32;
        //     break;
        //   default:
        //     break;
        // }
        console.log(MyChart.data);
        return level;
      }
      function display(val, i, i2, type) {
        let res = translateval(val, i, i2, type);
        return `${res}`;
      }
    });
    let data2 = MyChart.dominant.map((dc) => dc[0]);
    // console.log([...$(".row_tab"),[...]]);
    console.log(data2);
    console.log([...$(".row_tab2")]);
    console.log($(".main-table")[0].innerHTML);
    console.log(data2);
    console.log(MyChart.data);

    // data2.forEach((d, i) => {
    //   const trow = main_table.append(
    //     `<tr class='row_tab2'> <th>${d[0].case}</th> </tr>`
    //   );
    //   d.forEach((d2, i2) => {
    //     let data3 = MyChart.data2[i][i2].value;
    //     let orgdata = MyChart.data2[i][i2].orgdata;
    //     let s = "";
    //     console.log(i);
    //     var arr = [0, 1, 2, 2, 2];
    //     console.log(d);
    //     let largeValue = "";
    //     console.log(trow);
    //     let smallValue = Math.floor(d2.value);
    //     console.log(MyChart.data.length);
    //     console.log(i2);

    //     function translateval(datas, i2, category) {
    //       const levelMap = {
    //         0: Math.floor(datas),
    //         1: datas > 50 ? "好" : "差",
    //         2: datas < 33 ? "C" : datas <= 66 ? "B" : "A",
    //       };

    //       const level = levelMap[category];
    //       console.log(i2);
    //       console.log(category);
    //       data2[i2].level = level;
    //       return level;
    //     }

    //     console.log(i);
    //     console.log(i2);
    //     function display(val, i2, type) {
    //       console.log(type);
    //       let res = translateval(val, i, i2);
    //       return `${res}`;
    //     }
    //     largeValue = display(d2.value, arr[i2]);
    //     console.log(largeValue);
    //     $(".row_tab2")[i].innerHTML += `<td class="rowtd"><div class="desc">
    //     <span>${s} ${largeValue}</span>
    //   </div><div class="txt">
    //   <span>${orgdata}</span>
    // </div></td>`;

    //   });
    // });

    // d.forEach((d2, i2) => {
    // console.log();
    // data2.forEach((d, i) => {
    //   //   console.log(d.area);
    //   $("#htable").append(`<th>${d[0].area}</th>`);
    // });
  },
};
