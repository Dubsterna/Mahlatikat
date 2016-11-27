$(document).ready(function(){
    
    // Projektit
    
    $.ajax({
        url: "../json/projektit.json",
        cache: false
    }).done(function(data){
        console.log("Onnistuu");
        showProjects(data);
    }).fail(function(){
            console.log("error");
    });
    
    
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
    


// LISÄÄ JÄSENEN MUISTIINPANOON //
    $("#task-member").append("<option>"+data.projektit[0].jasenet[0]+"</option>");
    $("#task-member").append("<option>"+data.projektit[0].jasenet[1]+"</option>");
    $("#task-member").append("<option>"+data.projektit[0].jasenet[2]+"</option>");
    $("#task-member").append("<option>"+data.projektit[0].jasenet[3]+"</option>");
     $("#task-member").append("<option>"+data.projektit[0].jasenet[4]+"</option>");
    
    }
   
// SYÖTÄ ITETOA MUISTIINPANOIHIN //
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
