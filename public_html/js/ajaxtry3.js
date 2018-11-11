
var ize=15;
$(document).ready(function () {
    
    
    $('#loadtext').click(function () {
        //  $('#textData').text('Valami');
       ize+=15;
 

        $('#textData').load('no.txt', function (result, status, xhr) {
            $('#textData').text('Error: ' + xhr.status + xhr.statusText);
        }). animate({width: "300px"},'slow')

            .animate({height: "300px"})

            .animate({marginLeft: "150px"})

            .animate({borderWidth: "10px"})

            .animate({opacity: 0.5});
        
  
    /*
     $.ajax({
         url:'info2.txt',
         success:function(response,status,xhr){
         $('#textData').text('Error: '+xhr.status+xhr.statusText);
         }*/
         });
         
});

//var myvar=setInterval(myTimer,1000);
function myTimer(){
 ize--;
  var timeClock=$('#timeClock');
  var bgColor=timeClock.css('background-color');
      if (ize===0){
        timeClock.fadeOut();
        clearInterval(myvar);
    }
   
    var d=new Date();
    var t=d.toLocaleTimeString();
    timeClock.html(t+' <==>'+ize+bgColor);
      if (bgColor == "rgb(0,0,255)"){
       timeClock.css("background-color", "rgb(255,0,0)");
   }
    else{
        timeClock.css("background-color", 'rgb(0,0,255)');
    }
     

}

	


var myArray=['egy','ketto','harom'];
$.each(myArray,function(index,value){
    //alert(index);
    var temp= $('#ch').html();
    $('#ch').html(temp+' Index: '+index+' Value: '+value);
});
