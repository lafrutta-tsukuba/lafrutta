"use strict";
//メニュー表示部分(jquery)
$(document).ready(function () {
  function e() {
    $("#header_nav").removeClass("is_selected"), $("#menu_btn").removeClass("is_menu_opened"), $("#header").removeClass("is_menu_opened"), $("#body_wrapper_smp").removeClass("is_menu_opened")
  }
  $("#menu_btn").on("click", function () {
    $("#header_nav").toggleClass("is_selected"), $(this).toggleClass("is_menu_opened"), $("#header").toggleClass("is_menu_opened"), $("#body_wrapper_smp").toggleClass("is_menu_opened")
  }), $("#body_wrapper_smp").on("click", function () {
    e()
  }), $(".home_top_container").css({
    opacity: "1"
  })
});
//# sourceMappingURL=main.js.map