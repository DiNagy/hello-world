function getTarget(e){
    if(!e){window.event;}
    
    return e.targer || e.srcElement;
}


function myFunction(e){
    var target, parent, grandparent;
    target=getTarget(e);
    parent=target.parentNode;
    grandparent=target.parentNode.parentNode;
    grandparent.removeChild(parent);
    e.preventDefault();
}



var myElement=document.getElementById("mylist");

myElement.addEventListener("click",function(e){myFunction(e)},false);