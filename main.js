d3.json("data.json", function (error, data) {
  if (error) throw error;

  window.MyChart = {
    data2: JSON.parse(JSON.stringify(data)),
    data,
    arr: [],
    repaint: function () {
      RadarChart.draw("#chart", data, config);
      Tables.draw(data);
    },
  };
  const values = data.map((subarray) => {
    return subarray.map((item) => item.value);
  });

  function removeSmallerArray(a) {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if (i !== j && a[i].every((x) => a[j].some((y) => x < y))) {
          a.splice(i, 1);
          return i;
        }
      }
    }
    return -1;
  }
  const index = removeSmallerArray(values);
  if (index !== -1) {
    console.log(`Removed array at index ${index}`);
    data.splice(index, 1);
    MyChart.data2 = JSON.parse(JSON.stringify(data));
  } else {
    console.log("No array found");
  }

  Cardview.draw(data);
  const btn = document.querySelector(".btn");

  MyChart.repaint();
  // console.log(btn);
  // btn.addEventListener("click", function () {
  //   MyChart2.repaint();
  // });
});
