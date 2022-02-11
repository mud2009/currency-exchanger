import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 
import Exchange from './js/service';

function clearForms() {
  $("#dollars").val("");
  $("#currency").val("");
}

function getElements(response, dollars, currency) {
  if (response.result) {
    let outCalc = dollars * response.conversion_rates[`${currency}`];
    $('#exchange-out').prepend(`${outCalc} ${currency}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(dollars, currency) {
  const response = await Exchange.getExchange();
  getElements(response, dollars, currency);
}

$('form').on("submit", function(event){
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