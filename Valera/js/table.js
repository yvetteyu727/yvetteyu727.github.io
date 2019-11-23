$(document).ready(function(){


    var table1_items = [];
    var i = 0;
    var airtable_data = "https://api.airtable.com/v0/appT9Y78c8u6UPG0h/chuan?api_key=keypxZMYMv2UUxEw3"
    var table1_dataSet = [];

    $.getJSON(airtable_data,function(result){
      $.each(result.records,function(key,value){
         table1_items = [];
       table1_items.push(value.fields.restaurant_name);
       table1_items.push(value.fields.pronunciation);
       table1_items.push(value.fields.city);

         table1_dataSet.push(table1_items);
         console.log(table1_items);
      });
         console.log(table1_dataSet);
         $("#table1").DataTable({
           data:table1_dataSet,
           retrive:true,
           destroy:true,
           columns: [
                   { title: "专业",
                     defaultContent:""},
                   { title: "语言成绩要求",
                       defaultContent:"" },
                   { title: "是否有面试笔试",
                     defaultContent:"" },

                  ]
         });
    });
  });