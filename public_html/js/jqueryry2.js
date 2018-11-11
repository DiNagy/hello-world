
$(document).ready(
        function(){
            $('#loadtext').click(function(){
              $.ajax({
                  url:'product.json',
                  success:function(result,status,xhr){
                
                   var table = $("<table><tr><th>Product</th><th>Color</th><th>Price</th></tr>");
    var tr;
    var i=0;
      for (var i = 0; i < result.length; i++) {
            tr = $("<tr>");
            tr.append("<td>" + result[i].Product + "</td>");
           tr.append("<td>" + result[i].color + "</td>");
           tr.append("<td>" + result[i].Price + "</td>");
            tr.append("</tr>");
            table.append(tr);
        }
        table.append("</table>");
        $("#jsonData").html(table);
                
                
                  }
              })  
            });
        });

//$('#loadtext')
//  $('#textData').html('Something');