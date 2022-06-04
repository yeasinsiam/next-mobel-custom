export default function strecherItemJs() {
  var $strecherItem = $(".stretcher-item");
  $strecherItem.bind({
    mouseenter: function (e) {
      $(this).addClass("active");
      $(this).siblings().addClass("inactive");
    },
    mouseleave: function (e) {
      $(this).removeClass("active");
      $(this).siblings().removeClass("inactive");
    },
  });
}
