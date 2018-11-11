/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$('li em').animate({opacity:'0.5'});
var color=$('li').css('background-color');
$('li').css('background-color','green');

$("a[target!='_blank']").css("color",'red');

//$('li:not(:has(a))').text('<li>UPDATED</li>');

var list=$('li').text();
$('ul').append('<li>'+list+'</li>');

$('li').on('click',function(){
    $(this).remove();
});
$('li:gt(2)').hide().slideDown(1000).css('background-color',color);

//$('li').delay(2000).css('background-color',color);