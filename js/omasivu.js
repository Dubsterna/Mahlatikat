$(document).ready(function(){
    

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

}); // end of document ready

    // panel headia ei pysty jostain syysta klikkaamaan ?!?!?!!?
    /*$("span#arrow").click(function(){
        console.log("klikkaus toimii");
        $(this).next(".panelbody").toggle(200);
    });*/

   /* $('span#arrow').on('click', function () {
        console.log("Vittusaatanaperkelehelvetti");
    });*/

    /*$(document).on('click', '#arrow', function(){
        console.log("Toimii");
        $(document).next(".panelbody").toggle(200);
    });*/
        
    $(document).on('click','#arrow', function(){
    $(this).toggleClass('glyphicon-menu-up');
    $(this).toggleClass('glyphicon-menu-down');
    // toimii kaikilla $(".panel-collapse").collapse('toggle');
    $(this).closest(".panel-group").find(".panel-collapse").collapse('toggle');
});

    $('[data-toggle="popover"]').popover();

    



function showProjects(data) {
    $.each(data.projektit, function(index,projektit){
        console.log(showProjects);
        // add a project item to the project-list
        
        // tama tapa saa lisattya jsonit
        $("#project-list").append("<li>"+
                                      '<div class="panel-group accordion-holder" id="accordion" role="tablist" aria-multiselectable="true">'+
                                        '<div class="panel panel-default">'+
                                            '<div class="panel-heading" role="tab" id="headingOne" class="accordion">'+
                                                '<h4 class="panel-title">'+
                                                '<a class="project-title">'+projektit.projekti+ " " +
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
        
       /*  // create a new list item
        var listItem = $("<li>");
        
        // create a new div for panelGroup
        var panelGroup = $("<div>").addClass("panel-group accordion-holder").attr("id", "accordion").attr("role", "tablist").attr("aria-multiselectable", "true");
        
        // create a new panel
         var panel = $("<div>").addClass("panel panel-default");
        
        // create a new panel heading
        var panelHeading = $("<div>").addClass("panel-heading").attr("role", "tab").attr("id", "headingOne");
        
        // create a new header to project
        var panelTitle = $("<h4>").addClass("panel-header");
        
        // create a new project title link
        var projectTitleLink = $("<a>").addClass("project-title").text(projektit.projekti);
       
        // create a glyphicon arrow with link
       var glyphicon = $("<a>").addClass("glyphicon glyphicon-menu-down").attr("data-toggle", "collapse").attr("data-parent","#accordion").attr("href", "collpaseOne").attr("aria-expanded","true").attr("aria-controls", "collapseOne");
        
       // create a collapse
       
       projectListItem.append(accordionHolder, projectDiv, projectHeadingDiv, projectHeader, collapseLink, menuArrow);
       $("#project-list").append(projectListItem);*/
    })
}

function showNotes(data) {
    
    console.log(showNotes);
    $.each(data.muistiinpanot, function(index, muistiinpanot) {
        $("#note-list").append("<li>"+
                                    '<a href="#">'+
                                        '<textarea disabled class="form-control" rows="5">'+
                                            "Otsikko: " +muistiinpanot.otsikko+ "&#10" +
                                            "Projekti:" +muistiinpanot.projekti+ "&#10" +
                                            "Kuvaus: " +muistiinpanot.kuvaus+ "&#10" +
                                            "Jaetaan: "+muistiinpanot.jaetaan+ "&#10" +
                                        "</textarea>"+
                                    "</a>"+
                               "</li>");
    })
}

function showTodos(data) {
    $.each(data.tehtavat, function(index, tehtavat) {
        $("#todo-list").append('<div class="todo-body">'+
                                    '<li class="todo-form">'+
                                        "<h4>"+tehtavat.projekti+ "</h4>"+
                                        "<h4>"+tehtavat.tehtava+ "</h4>"+
                                    "</li>"+
                                    '<li class="todo-button-li">' +
                                        '<button type="button" class="btn btn-default" dhref="#" data-toggle="popover" title="Resurssin lisäys" data-content="Kuinka kauan käytit tehtävän Projektisuunnitelma tekemiseen?">'+"Lisää"+
                                        "</button>"+
                                        "</li>");
        
       
    })
}


