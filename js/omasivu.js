$(document).ready(function(){
    //$('[data-toggle="popover"]').popover();

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

    $("#arrow").click(function(){
        console.log("klikkaus toimii");
        $(this).next(".panelbody").toggle(200);
    });


function showProjects(data) {
    $.each(data.projektit, function(index,projektit){
        console.log(showProjects);
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
                                        "</li>")
        
       
    })
}


