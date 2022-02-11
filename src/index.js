import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 
import Exchange from './js/service';

function clearForms() {
  $("#dollars").val("");
  $("#currency").val("");
}

function getElements(response) {
  if (response.result) {
    $('#exchange-out').prepend(`${response.conversion_rates.EUR}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await Exchange.getExchange();
  console.log(response);
  getElements(response);
}

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let dollars = $("#dollars").val();
    let currency = $("#currency").val();
    clearForms();
    makeApiCall(dollars, currency);
    $('#userInput').hide();
    $('#output').show();
  });
  $('#again').on("click", function(){
    $('#userInput').show();
    $('#output').hide();
  });
});