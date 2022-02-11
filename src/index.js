import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 
// import Exchange from './js/service.js';

function clearForms() {
  $("#dollars").val("");
  $("#currency").val("");
}

$(document).ready(function(){
  $('#exchange').on("click", function(){
    let dollars = $("#dollars").val();
    let currency = $("#currency").val();
    clearForms();
    console.log(dollars);
    console.log(currency);
    $('#userInput').hide();
    $('#output').show();
  });
});