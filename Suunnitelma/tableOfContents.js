$(document).ready(function(){
    var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>Sisällysluettelo</h2>" +
    "<ul>";
    
    $("article h3").each(function() {

  // loop

});
    
    var el, title, link;

$("article h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

});
    
var newLine, el, title, link;

$("article h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});
    
ToC +=
   "</ul>" +
  "</nav>";

    
$("article").prepend(ToC);
});