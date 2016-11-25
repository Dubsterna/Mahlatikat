$(document).ready(function(){
    
    // projects
    $.ajax({
        url: "../json/projektit.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showProjects(data);
    }).fail(function(){
            console.log("error");
    });
    
    // tasks
    $.ajax({
        url: "../json/tehtavat.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showTodos(data);
    }).fail(function(){
            console.log("error");
    });
    
    // notes
    $.ajax({
        url: "../json/ilmoitukset.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showNote(data);
    }).fail(function(){
            console.log("error");
    });
    
});

function showProjects(data) {
    $.each(data.projektit, function(index,projektit){
        console.log(showProjects);
        // add a project to the nav bar project dropdown
        
        // tama tapa saa lisattya jsonit
        $("#project-dropdown").append("<li>"+'<a href="projektisivu.html">'+projektit.projekti+"</a>"+"</li>");
        
    })
   
    $("#project-name").append("<h1>"+data.projektit[0].projekti+"</h1>");
    
    $("#project-descr").append("<p>"+data.projektit[0].kuvaus+"</p>");
    
    // adds members to the members list
    $("#member-pane").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[0]+"</li>");
    $("#member-pane").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[1]+"</li>");
    $("#member-pane").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[2]+"</li>");
    $("#member-pane").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[3]+"</li>");
    $("#member-pane").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[4]+"</li>");
    
    // adds phases to the uusi tehtävä dropdown
    $("#task-phase").append("<option>"+data.projektit[0].vaiheet[0]+"</option>");
    $("#task-phase").append("<option>"+data.projektit[0].vaiheet[1]+"</option>");
    $("#task-phase").append("<option>"+data.projektit[0].vaiheet[2]+"</option>");
    $("#task-phase").append("<option>"+data.projektit[0].vaiheet[3]+"</option>");

    // adds mambers to the uusi tehtävä dropdown
    $("#task-member").append("<option>"+data.projektit[0].jasenet[0]+"</option>");
    $("#task-member").append("<option>"+data.projektit[0].jasenet[1]+"</option>");
    $("#task-member").append("<option>"+data.projektit[0].jasenet[2]+"</option>");
    $("#task-member").append("<option>"+data.projektit[0].jasenet[3]+"</option>");
    $("#task-member").append("<option>"+data.projektit[0].jasenet[4]+"</option>");

    // adds phase names to table tabs
    $("#vaihe1").append(data.projektit[0].vaiheet[0]);
    $("#vaihe2").append(data.projektit[0].vaiheet[1]);
    $("#vaihe3").append(data.projektit[0].vaiheet[2]);
    $("#vaihe4").append(data.projektit[0].vaiheet[3]);
    
    
    $(".title").append(data.projektit[0].projekti);
    
    
    }

    //adds data to table
function showTodos(data) {
    $("#project-table").prepend("<tr>"+
                        '<td>'+data.tehtavat[0].tehtava+"</td>"+
                        '<td>'+data.tehtavat[0].kuvaus+"</td>"+
                        '<td>'+data.tehtavat[0].pvm+"</td>"+
                        '<td>'+data.tehtavat[0].tekijat+"</td>"+
                        '<td class="text-right">'+data.tehtavat[0].valmiusaste+ "%" +"</td>"+
                        '<td class="text-right">'+data.tehtavat[0].suunnitellut_resurssit+"</td>"+
                        '<td id="res" class="text-right">'+data.tehtavat[0].kaytetyt_resurssit+"</td>"+       
                    "</tr>");
    $("#project-table").prepend("<tr>"+
                        '<td>'+data.tehtavat[1].tehtava+"</td>"+
                        '<td>'+data.tehtavat[1].kuvaus+"</td>"+
                        '<td>'+data.tehtavat[1].pvm+"</td>"+
                        '<td>'+data.tehtavat[1].tekijat+"</td>"+
                        '<td class="text-right">'+data.tehtavat[1].valmiusaste+ "%" +"</td>"+
                        '<td class="text-right">'+data.tehtavat[1].suunnitellut_resurssit+"</td>"+
                        '<td id="res" class="text-right">'+data.tehtavat[1].kaytetyt_resurssit+"</td>"+       
                    "</tr>");
    $("#project-table").prepend("<tr>"+
                        '<td>'+data.tehtavat[2].tehtava+"</td>"+
                        '<td>'+data.tehtavat[2].kuvaus+"</td>"+
                        '<td>'+data.tehtavat[2].pvm+"</td>"+
                        '<td>'+data.tehtavat[2].tekijat+"</td>"+
                        '<td class="text-right">'+data.tehtavat[2].valmiusaste+ "%" +"</td>"+
                        '<td class="text-right">'+data.tehtavat[2].suunnitellut_resurssit+"</td>"+
                        '<td id="res" class="text-right">'+data.tehtavat[2].kaytetyt_resurssit+"</td>"+       
                    "</tr>");
}
function showNote(data) {
    $.each(data.ilmoitukset, function(index,ilmoitukset){
        console.log(showNote);
    $(".notes").append("<li>"+
                        '<div class="panel panel-'+ilmoitukset.tarkeys+'">'+
                            '<div class="panel-heading">'+
                                '<h3 class="panel-title">'+ilmoitukset.otsikko+'<button class="btn btn-link glyphicon glyphicon-pencil pull-right">'+'</h3>'+
                            '</div>'+
                            '<div class="panel-body">'+ilmoitukset.teksti+'</div>'+
                        '</div>'+
                    '</li>');
    })
}

$(function () {
     var $document = $(document);
     var selector = '[data-rangeslider]';
     var $inputRange = $(selector); /** * Example functionality to demonstrate a value feedback * and change the output's value. */


     function valueOutput(element) {
         var value = element.value;
         var output = element.parentNode.getElementsByTagName('output')[0];
         output.innerHTML = value;
     } /** * Initial value output */
     for (var i = $inputRange.length - 1; i >= 0; i--) {
         valueOutput($inputRange[i]);
     } /** * Update value output */
     $document.on('input', selector, function (e) {
         valueOutput(e.target);
     }); /** * Initialize the elements */
     $inputRange.rangeslider({
         polyfill: false
     }); /** * Example functionality to demonstrate programmatic value changes */
     $document.on('click', '#js-example-change-value button', function (e) {
         var $inputRange = $('[data-rangeslider]', e.target.parentNode);
         var value = $('input[type="number"]', e.target.parentNode)[0].value;
         $inputRange.val(value).change();
     }); /** * Example functionality to demonstrate programmatic attribute changes */
     $document.on('click', '#js-example-change-attributes button', function (e) {
         var $inputRange = $('[data-rangeslider]', e.target.parentNode);
         var attributes = {
             min: $('input[name="min"]', e.target.parentNode)[0].value,
             max: $('input[name="max"]', e.target.parentNode)[0].value,
             step: $('input[name="step"]', e.target.parentNode)[0].value
         };
         $inputRange.attr(attributes).rangeslider('update', true);
     }); /** * Example functionality to demonstrate destroy functionality */
     $document.on('click', '#js-example-destroy button[data-behaviour="destroy"]', function (e) {
         $('input[type="range"]', e.target.parentNode).rangeslider('destroy');
     }).on('click', '#js-example-destroy button[data-behaviour="initialize"]', function (e) {
         $('input[type="range"]', e.target.parentNode).rangeslider({
             polyfill: false
         });
     });
 });


 $('input').on('change', function () {
     console.log($(this).val());
 });



$("#addButton").click(function() {
        var newItem = $("#task-member");
        var key = new Date(); //date info
        // add to UI
        addListItem(key.getTime(), newItem.val());
        //add to localstorage
        window.localStorage.setItem(key.getTime(), newItem.val());
        //empty newitem
        newItem.val("");
        
        
    });
    
    //clearbutton event handling
    $("#clearButton").click(function() {
        //clear localstorage
      window.localStorage.clear();
        //clear ui
        $("#list-panel").empty();
        
      });

function addListItem(key, value) {
    $("#list-panel").append("<li>"+value+"</li>")
                    .children("li:last-child")
                    .attr("dataKey", key);
    $("#list-panel").children("li:last-child")
                    .append("    <img src='delete.jpg'/>")
                    .on("click",function() {
                       console.log("delete to do item!");
    });
}