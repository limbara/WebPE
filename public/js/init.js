
$(document).ready(function(){
  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown({
    inDuration: 300,
   outDuration: 225,
   constrain_width: true, 
   hover: false, 
   gutter: 0, 
   belowOrigin: true 
  });
  $('.parallax').parallax();
  $('.materialboxed').materialbox();
  $('.tooltipped').tooltip({delay: 50})
  $('.modal-trigger').leanModal();
});