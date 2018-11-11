/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var el=document.getElementById('main');
//el.innerHTML='new things';
$('#main').text('new things and more');

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.status === 200) {
        var mydiv = document.createElement('div');
        var text = document.createTextNode(this.responseText);

        mydiv.appendChild(text);

        $('#main').after(mydiv);
    }
};

xhttp.open('GET', 'info.txt', true);
xhttp.send();



