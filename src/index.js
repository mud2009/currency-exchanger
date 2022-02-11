import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 
import Exchange from './js/service';

function clearForms() {
  $("#dollars").val("");
  $("#currency").val("");
}

async function makeApiCall(){
  const response = await Exchange.getExchange();
  console.log(response);
  // getElements(response);
}

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let dollars = $("#dollars").val();
    let currency = $("#currency").val();
    clearForms();
    console.log(dollars);
    console.log(currency);
    makeApiCall(dollars, currency);
    $('#userInput').hide();
    $('#output').show();
  });
  $('#again').on("click", function(){
    $('#userInput').show();
    $('#output').hide();
  });
});