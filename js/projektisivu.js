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
    
    // assignments
    $.ajax({
        url: "../json/tehtavat.json",
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
    $.each(data.projektit, function(index,projektit){
        console.log(showProjects);

        $("#project-name").append("<h1>"+projektit.projekti+"</h1>");
    })
    $.each(data.projektit, function(index,projektit){
        console.log(showProjects);

        $("#member").append("<li class='list-unstyled'>"+projektit.jasenet+"</li>");
    })
    $.each(data.projektit, function(index,projektit){
        console.log(showProjects);

        $("#task-phase").append("<li class='list-unstyled'>"+projektit.vaiheet+"</li>");
    })
    $.each(data.projektit, function(index,projektit){
        console.log(showProjects);

        $("#task-member").append("<li class='list-unstyled'>"+projektit.jasenet+"</li>");
    })
}
    $("#ex6").slider();
    $("#ex6").on("slide", function(slideEvt) {
	$("#ex6SliderVal").text(slideEvt.value);
});