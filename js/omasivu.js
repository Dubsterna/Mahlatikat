$(document).ready(function(){
    //$('[data-toggle="popover"]').popover();

    $.ajax({
        url: "../json/projektit.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showProjects(data);
    }).fail(function(){
            console.log("error");
    })
    

}); // end of document ready

    $("#arrow").click(function(){
        console.log("klikkaus toimii");
        $(this).next(".panelbody").toggle(200);
    });


function showProjects(data) {
    $.each(data.projektit, function(index,projektit){
        
        // add a project item to the project-list
        $("#project-list").append("<li>"+
                                      '<div class="panel-group accordion-holder" id="accordion" role="tablist" aria-multiselectable="true">'+
                                        '<div class="panel panel-default">'+
                                            '<div class="panel-heading" role="tab" id="headingOne">'+
                                                '<h4 class="panel-title">'+
                                                "<a>"+projektit.projekti+ " " +
                                                "</a>"+
                                                    '<a data-toggle="collapse" data-parent="#accordion" data-target="collapseOne" aria-expanded="true" aria-controls="collapseOne" id="arrow">'+
                                                        '<span class="glyphicon glyphicon-menu-down"></span>'+
                                                    "</a>"+
                                                "</h4>"+
                                            "</div>"+
                                      '<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">'+
                                        '<div class="panel-body">'+
                                            "<p>"+"Kuvaus: " + projektit.kuvaus + "</p>" +
                                            "<p>"+"Jäsenet: " + projektit.jasenet + "</p>"+
                                            "<p>"+"Päällikkö: " + projektit.paallikko + "</p>"+
                                        "</div>"+
                                    "</div>"+
                                        "</div>"+
                                    "</div>"+
                                "</li>");
    })
    
     /* // create a new list item
        var projectListItem = $("<li>");
        // create a new div for accordion holder
        var accordionHolder = $("<div>").attr("class", "panel-group accordion-holder").attr("id", "accordion").attr("role", "tablist").attr("aria-multiselectable", "true");
        // create a new project div
        var projectDiv = $("<div>").addClass("panel panel-default").attr("role", "tab").attr("id", "headingOne");
        // create new project heading div
        var projectHeadingDiv = $("<div>").addClass("panel-heading");
        // create a new header to project
        var projectHeader = $("<h4>").text(projektit.projekti).attr("class", "panel-header");
         // create a collapse link
        var collapseLink = $("<a>").attr("data-toggle", "collapse").attr("data-parent","#accordion").attr("href", "collpaseOne").attr("aria-expanded","true").attr("aria-controls", "collapseOne");
        // create a new menu arrow
        var menuArrow = $("<span>").attr("class","glyphicon glyphicon-menu-down");
        
        projectListItem.append(accordionHolder, projectDiv, projectHeadingDiv, projectHeader, collapseLink, menuArrow);
        $("#project-list").append(projectListItem);*/
}


