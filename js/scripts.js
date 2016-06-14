$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});

// $(document).ready(function() {
//   $(".clickme").click(function(){
//     $("#showing").toggle();
//     $("#hidden").toggle();
//   })
// })
