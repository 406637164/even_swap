$(function () {
  // Handler for .ready() called.

  function tabchange(e) {
    if (e.target.getAttribute("id") == "tab-1") {
      document.querySelector("#tab-1").classList.add("active");
      console.log($(".tab-4").hide());
      $(".tab-3").hide();
      $(".tab-2").hide();
      $(".tab-1").show();
      document.querySelector("#tab-2").classList.remove("active");
      document.querySelector("#tab-3").classList.remove("active");
      document.querySelector("#tab-4").classList.remove("active");
    }
    if (e.target.getAttribute("id") == "tab-2") {
      document.querySelector("#tab-2").classList.add("active");
      $(".tab-3").hide();
      $(".tab-4").hide();
      $(".tab-1").hide();
      $(".tab-2").show();
      document.querySelector("#tab-1").classList.remove("active");
      document.querySelector("#tab-3").classList.remove("active");
      document.querySelector("#tab-4").classList.remove("active");
    }
    if (e.target.getAttribute("id") == "tab-3") {
      $(".tab-2").hide();
      $(".tab-4").hide();
      $(".tab-1").hide();
      $(".tab-3").show();
      document.querySelector("#tab-3").classList.add("active");
      document.querySelector("#tab-1").classList.remove("active");
      document.querySelector("#tab-2").classList.remove("active");
      document.querySelector("#tab-4").classList.remove("active");
    }
    if (e.target.getAttribute("id") == "tab-4") {
      document.querySelector("#tab-4").classList.add("active");
      $(".tab-3").hide();
      $(".tab-2").hide();
      $(".tab-1").hide();
      console.log($(".tab-4").show());
      document.querySelector("#tab-1").classList.remove("active");
      document.querySelector("#tab-3").classList.remove("active");
      document.querySelector("#tab-2").classList.remove("active");
    }
  }
  const alltabs = document.querySelector(".breacrumb");
  alltabs.addEventListener("click", tabchange.bind(this));
  console.log(alltabs);
  //////tab4 打分數
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const btnCloseModal = document.querySelector(".close-modal");
  const btnsOpenModal = document.querySelectorAll(".show-modal");

  const openModal = function () {
    document.querySelector("body").classList.add("noscroll");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    document.querySelector("body").classList.remove("noscroll");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener("click", openModal);

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    // console.log(e.key);

    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
});
new TwCitySelector();
