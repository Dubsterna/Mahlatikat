$(document).ready(function(){
    console.log("Luukku auki ja risut kyytiin");
     $(document).on('click', 'button', function(e) {
            e.stopPropagation();
            console.log("Funktio toimii");
        });

});

