$(document).ready(function(){
    
    // projects
    /*
    $.ajax({
        url: "../json/projektit.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showProjects(data);
    }).fail(function(){
            console.log("error");
    });
    */
    
    // Muistiinpanot
    $.ajax({
        url: "../json/muistiinpano.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showTodos(data);
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
    
    // adds members to the members list
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[0]+"</li>");
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[1]+"</li>");
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[2]+"</li>");
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[3]+"</li>");
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[4]+"</li>");
    
    // adds phases to the uusi tehtävä dropdown
/*
    $("#task-phase").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].vaiheet[0]+"</li>"+"</a>");
    $("#task-phase").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].vaiheet[1]+"</li>"+"</a>");
    $("#task-phase").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].vaiheet[2]+"</li>"+"</a>");
    $("#task-phase").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].vaiheet[3]+"</li>"+"</a>");
*/
    // adds mambers to the uusi tehtävä dropdown
    $("#task-member").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].jasenet[0]+"</li>"+"</a>");
    $("#task-member").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].jasenet[1]+"</li>"+"</a>");
    $("#task-member").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].jasenet[2]+"</li>"+"</a>");
    $("#task-member").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].jasenet[3]+"</li>"+"</a>");
    $("#task-member").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].jasenet[4]+"</li>"+"</a>");

    // adds phase names to table tabs
   
    $(".nav-tabs").prepend('<li role="presentation" class="active">'+'<a href="#vaihe4" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true">'+data.projektit[0].vaiheet[3]+'</a>'+'</li>');
    $(".nav-tabs").prepend('<li role="presentation" class="active">'+'<a href="#vaihe3" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true">'+data.projektit[0].vaiheet[2]+'</a>'+'</li>');
    $(".nav-tabs").prepend('<li role="presentation" class="active">'+'<a href="#vaihe2" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true">'+data.projektit[0].vaiheet[1]+'</a>'+'</li>');
    $(".nav-tabs").prepend('<li role="presentation" class="active">'+'<a href="#vaihe1" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true">'+data.projektit[0].vaiheet[0]+'</a>'+'</li>');
    }
   
// Syötä tietoa muistiinpanoihin //

function showTodos(data) {
    $("#project-table").prepend("<tr>"+
                        '<td>'+data.muistiinpano[0].otsikko+"</td>"+
                        '<td>'+data.muistiinpano[0].projekti+"</td>"+
                        '<td>'+data.muistiinpano[0].pvm+"</td>"+
                        "</tr>");
    $("#project-table").prepend("<tr>"+
                        '<td>'+data.muistiinpano[1].otsikko+"</td>"+
                        '<td>'+data.muistiinpano[1].projekti+"</td>"+
                        '<td>'+data.muistiinpano[1].pvm+"</td>"+
                        "</tr>");
    $("#project-table").prepend("<tr>"+
                        '<td>'+data.muistiinpano[2].otsikko+"</td>"+
                        '<td>'+data.muistiinpano[2].projekti+"</td>"+
                        '<td>'+data.muistiinpano[2].pvm+"</td>"+
                        "</tr>");
}
