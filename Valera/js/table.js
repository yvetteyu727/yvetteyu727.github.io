$(document).ready(function(){
  $('#data-table').DataTable({  
    "ajax"     :     "chuan_restaurant.json",  
    "columns"     :     [   
         {     "data"     :     "restaurant_name"},  
         {     "data"     :     "pronunciation"},
         {     "data"     :     "city"     },  
         
    ]  
});  


   
    });
  