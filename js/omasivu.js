$(document).ready(function(){
    
    var name = window.localStorage.getItem("loginname");
    //console.log(name);
    $("#kayttaja").text(name);
    
    
      
    if (window.localStorage) {
       // show items from local storage
        for (var i=0; i<window.localStorage.length; i++) {
            // item
            key = window.localStorage.key(i);
            // values
            value = window.localStorage.getItem(key);
            addSharingMember(key,value);

        }
    } else {
        window.alert("Local Storage is not available");
    }

    
    // get projects
    $.ajax({
        url: "../json/projektit.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showProjects(data);
    }).fail(function(){
            console.log("error");
    });
    
    // get notes
    $.ajax({
        url: "../json/muistiinpanot.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showNotes(data);
    }).fail(function(){
            console.log("error");
    });
    
    // get todos
    $.ajax({
        url: "../json/tehtavat.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showTodos(data);
    }).fail(function(){
            console.log("error");
    });
    
    //get notifications
    $.ajax({
        url: "../json/ilmoitukset.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showNotifications(data);
    }).fail(function(){
            console.log("error");
    });

}); // end of document ready

    // panel headia ei pysty jostain syysta klikkaamaan ?!?!?!!?
    /*$("span#arrow").click(function(){
        console.log("klikkaus toimii");
        $(this).next(".panelbody").toggle(200);
    });*/

   /* $('span#arrow').on('click', function () {
        console.log("klikkaus toimii");
    });*/

    /*$(document).on('click', '#arrow', function(){
        console.log("Toimii");
        $(document).next(".panelbody").toggle(200);
    });*/
    
    // projektien toggle
    $(document).on('click','#arrow', function(){
    $(this).toggleClass('glyphicon-menu-down');
    $(this).toggleClass('glyphicon-menu-up');
    // toimii kaikilla $(".panel-collapse").collapse('toggle');
    $(this).closest(".panel-group").find(".panel-collapse").collapse('toggle');
});

    // $('[data-toggle="popover"]').popover();
    //$('#element').popover('toggle')

    $('.block-header').affix({offset: {top: 205} });

     $(document).on('click','[data-toggle="popover"]', function(){
        $(this).popover('toggle');
});

$(document).on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

 $(document).on('click','#addnewProject', function(){
       $("#addNewProject").attr("href", "uusiprojekti.html");

});

    // esimerkkimuistiinpano ilman ajaxia
    $(document).on('click','#saveMemo', function(){
       
        $("#note-list").prepend('<div class="note-item">'+
                                    '<div class="note-body">'+
                                        '<li class="note-header">'+
                                            "<h4>Esimerkkiotsikko</h4>"+
                                        "</li>"+
                                        '<li class="note-background">'+
                                            "<p>Esimerkkikuvaus</p>"+
                                        "</li>"+
                                        "<li>"+
                                            "<p> Esimerkkiprojekti</p>"+
                                            "<p> Esimerkkihenkilöt</p>"+
                                        "</li>"+
                                    "</div>"+
                                  "</div");
});


// show projects
function showProjects(data) {
    $.each(data.projektit, function(index,projektit){
        console.log(showProjects);
        // add a project item to the project-list
        
        // show projects in dropdown
        $("#project-dropdown").append("<li>"+'<a href="projektisivu.html">'+projektit.projekti+"</a>"+"</li>");
        
        $("#project-list").append("<li>"+
                                      '<div class="panel-group accordion-holder" id="accordion" role="tablist" aria-multiselectable="true">'+
                                        '<div class="panel panel-default">'+
                                            '<div class="panel-heading" role="tab" id="headingOne" class="accordion">'+
                                                '<h4 class="panel-title">'+
                                                '<a class="project-title" href="projektisivu.html">'+projektit.projekti+ " " +
                                                "</a>"+
                                                '<span class="glyphicon glyphicon-menu-down" id="arrow"></span>'+
                                                "</h4>"+
                                            "</div>"+
                                      '<div class="panel-collapse collapse" role="tabpanel">'+
                                        '<div class="panel-body">'+
                                            "<p>"+"Kuvaus: " + projektit.kuvaus + "</p>" +
                                            "<p>"+"Jäsenet: " + projektit.jasenet + "</p>"+
                                            "<p>"+"Päällikkö: " + projektit.paallikko + "</p>"+
                                        "</div>"+
                                    "</div>"+
                                        "</div>"+
                                    "</div>"+
                                "</li>"); 
        
    // adds projects to the uusi muistiinpano modal
    $("#choose-project").append("<option>"+projektit.projekti+"</option>");
        
    })
    
    // adds members to the uusi muistiinpano modal
    $("#sharing-member").append("<option>"+data.projektit[0].jasenet[0]+"</option>");
    $("#sharing-member").append("<option>"+data.projektit[0].jasenet[1]+"</option>");
    $("#sharing-member").append("<option>"+data.projektit[0].jasenet[2]+"</option>");
    $("#sharing-member").append("<option>"+data.projektit[0].jasenet[3]+"</option>");
    $("#sharing-member").append("<option>"+data.projektit[0].jasenet[4]+"</option>");
    

 
}


// show notes
function showNotes(data) {
    
    console.log(showNotes);
    
    
    $.each(data.muistiinpanot, function(index, muistiinpanot) {
            $("#note-list").append('<div class="note-item">'+
                                    '<div class="note-body">'+
                                        '<li class="note-header">'+
                                            "<h4>" + muistiinpanot.otsikko + "</h4>"+
                                        "</li>"+
                                        '<li class="note-background">'+
                                            "<p>"+muistiinpanot.kuvaus+ "</p>"+
                                        "</li>"+
                                        "<li>"+
                                            "<p> Projekti: " + muistiinpanot.projekti+"</p>"+
                                            "<p> Jaetaan: "+muistiinpanot.jaetaan+ "</p>"+
                                        "</li>"+
                                    "</div>"+
                                  "</div");
    })
    
}

// show todos
function showTodos(data) {
    $.each(data.tehtavat, function(index, tehtavat) {
        $("#todo-list").append('<div class="todo-body">'+
                                    '<li class="todo-background">'+
                                        "<h4>"+tehtavat.projekti+ "</h4>"+
                                        "<h4>"+tehtavat.tehtava+ "</h4>"+
                                    "</li>"+
                                    '<li class="todo-button-li">' +
                                        '<button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">'+"Lisää"+
                                        "</button>"+
                                        "</li>"+
                                "</div>");
        
       
    })
}

// show notifications
function showNotifications(data) {
    $("#notifications-dropdown").append("<li>"+"Otsikko: "+data.ilmoitukset[0].otsikko+"</li>"+
                                       "<li>"+"Ilmoitus: "+data.ilmoitukset[0].teksti+"</li>"+
                                       "<li>"+"Henkilöltä: "+data.ilmoitukset[0].tekija+"</li>");
}

// valmiusaste slider code from mika
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
                
// add a user to sharing list
$("#addButton").click(function() {
        event.preventDefault();
        var sharingMember = $("#sharing-member");
        var key = new Date(); //date info
        // add to UI
        addSharingMember(key.getTime(), sharingMember.val());
        //add to localstorage
        window.localStorage.setItem(key.getTime(), sharingMember.val());
    });

// delete a user from sharing list
    $("#clear").click(function() {
        //clear localstorage
      window.localStorage.clear();
        //clear ui
        $("#sharing-panel").empty();
        
      });
    
// show users into sharing member panel
function addSharingMember(key, value) {
    $("#sharing-panel").append("<li>"+value+"</li>")
                    .children("li:last-child")
                    .attr("dataKey", key);
    
// delete image and use it to delete items
    $("#sharing-panel").children("li:last-child")
                    .append("    <img id='clear' src='delete.jpg'/>")
                    .on("click",function() {
                       console.log("delete to do item!");
                    //remove from ui
                        $(this).remove();
                        //remove from localstorage
                        window.localStorage.removeItem(key);
    });
}