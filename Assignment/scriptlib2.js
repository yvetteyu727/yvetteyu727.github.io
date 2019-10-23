$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appgICyhmd6OTt7DA/2019?api_key=keypxZMYMv2UUxEw3";
        var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.collaboration_brands);
                       items.push(value.fields.description);
                       items.push(value.fields.collaboration_products);
                       items.push(value.fields.release_date);       
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Collaboration Brands",
                       defaultContent:""},
                     { title: "Description",
                         defaultContent:"" },
                     { title: "Collaboration Products",
                       defaultContent:"" },
                     { title: "Release Date",
                       defaultContent:""},
                     
                 ]
             } );
        }); // end .getJSON
     }); // end button

}); // document ready
