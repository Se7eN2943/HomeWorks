var incomin_call  = document.getElementById ('incomin_call');
var modal_batton  = document.getElementById ('modal_batton');
var modal = document.getElementsByClassName ('modal')[0];
var close = document.querySelector('.popup-close');
//var myList = document.getElementById ('list');
//var story = myList.getElementsByClassName ('item');

function incomin_call(){
   
    modal.style.display = 'block';

}

function close_popup(){
   
    modal.style.display = 'none';

}


function delItem(){
    myList.removeChild(story[0]);

    if (story.length == 0){
        popup.style.display = 'block';
    }
}

function closePopup(){

    popup.style.display = 'none';
}

incomin_call.addEventListener('click', popup);
modal_batton.addEventListener('click', close_popup);
close.addEventListener('click', close_popup);