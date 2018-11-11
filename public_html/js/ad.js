var price;
var sum=5;

price=sum+10;
//document.write("GOOD afternoon : "+price);
function checkusername(){
   //var hereIt=document.getElementById("it");
if (this.value.length<5) this.value="!!!!";
}
function coloring(e,myp){
   // var myIt=document.getElementById("it");
    e.classList.add("coloring");
   
}


var myIt=document.getElementById("it");
myIt.onblur=checkusername;
myIt.addEventListener('focus',function(){coloring(myIt,8);},false);

var area=(function(){
    var height=5;
    var width=20;
    return height*width;
}());

var hotel={
    name:'Naamee',
    getName:function(){return this.name}
    
};

function button(){
    var number;
    
};
var numberOne =new button();
var numberTwo =new button();
function highlight(number,numberOne,numberTwo){
  if (!(numberOne.number))  {numberOne.number=number; return;}
  if (!(numberTwo.number)){numberTwo.number=number; return;}
  numberOne.number=numberTwo.number; numberTwo.number=number;
   if (numberOne.number===numberTwo.number){numberOne.number=null;numberTwo.number=null;} 
}



var el=document.getElementById('price');

el.textContent=window.screen.width;

var foo=document.getElementsByClassName("footer");
var fooOne=foo[0];

var today=new Date();
var year=today.getFullYear();
var past=new Date('Apr 16, 2000 15:45:55 ' );
var difference=(today.getTime()-past.getTime())/31556900000;
fooOne.textContent="Tha year is: "+Math.floor(difference);
/*
highlight(1,numberOne,numberTwo);
el.textContent+=" numberOne.number: "+numberOne.number+" numberTwo.number: "+numberTwo.number;
highlight(25,numberOne,numberTwo);
el.textContent+=" numberOne.number: "+numberOne.number+" numberTwo.number: "+numberTwo.number;
highlight(25,numberOne,numberTwo);
el.textContent+=" numberOne.number: "+numberOne.number+" numberTwo.number: "+numberTwo.number;

highlight(25,numberOne,numberTwo);
el.textContent+=" numberOne.number: "+numberOne.number+" numberTwo.number: "+numberTwo.number;

*/