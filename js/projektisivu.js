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
   
    $("#project-name").append("<h1>"+data.projektit[0].projekti+"</h1>");
    
    // adds members to the members list
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[0]+"</li>");
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[1]+"</li>");
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[2]+"</li>");
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[3]+"</li>");
    $("#member").append("<li class='list-unstyled'>"+data.projektit[0].jasenet[4]+"</li>");
    
    // adds phases to the uusi tehtävä dropdown
    $("#task-phase").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].vaiheet[0]+"</li>"+"</a>");
    $("#task-phase").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].vaiheet[1]+"</li>"+"</a>");
    $("#task-phase").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].vaiheet[2]+"</li>"+"</a>");
    $("#task-phase").append("<a>" + "<li class='list-unstyled'>"+data.projektit[0].vaiheet[3]+"</li>"+"</a>");

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
