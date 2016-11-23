$(document).ready(function(){
    
    $("#uusiprojekti").click(function()  {                    
  window.location.href = 'projektisivu.html';
    return false;
    
});

$("#peruuta").click(function()  {                    
  window.location.href = 'omasivu.html';
    return false;
    
});

/*$("#lisaajasen").click(function()  {                    
    window.localStorage.setItem("uusijasen", $("#email-input").val()); 
    return;
    
});

 var name = window.localStorage.getItem("uusijasen");
    console.log(name);
    $("#jasenet").text(name);
    
    */
    
}); 

// document ready
$(document).ready(function() {
    //console.log("ducument ready!");
    // onko local storage tuettu
if (window.localStorage) {
    //show items from local storage
    for (var i=0;i<window.localStorage.length;i++) {
        // key, datetime
        var key = window.localStorage.key(i);
        //value, text
        var value = window.localStorage.getItem(key);
        addListItem(key, value);
    }
} else {
    window.alert("Local Storage is not available, sorry :(");
}
    
    
    //add button event handler
    $("#lisaajasen").click(function() {
        var newItem = $("#email-input");
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
        $("#jasenet").empty();
        
      });
    

}); // end of document ready



// Aivan liian ärsyttäväää tarviin lomaaaaaa ja haluaisin laulamaan!!
function addListItem(key, value) {
    $("#jasenet").append("<li>"+value+"</li>")
                    .children("li:last-child")
                    .attr("dataKey", key);
    $("#jasenet").children("li:last-child")
                    .append("    <img src='delete.jpg'/>")
                    .on("click",function() {
                       console.log("delete to do item!"); 
                       
                        
                        //remove from ui
                        $(this).remove();
                        //remove from localstorage
                        window.localStorage.removeItem(key);
                    });
    
}