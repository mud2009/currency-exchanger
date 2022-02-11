import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'; 
import Exchange from './js/service';

function clearForms() {
  $("#dollars").val("");
  $("#currency").val("");
}

function getElements(response, dollars) {
  if (response.result) {
    let outCalc = dollars * response.conversion_rates[`${currency}`];
    $('#exchange-out').prepend(`${outCalc} ${currency}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(dollars, currency1, currency2) {
  const response = await Exchange.getExchange(currency1, currency2);
  getElements(response, dollars);
}

$('form').on("submit", function(event){
  event.preventDefault();
  let dollars = $("#dollars").val();
  let currency1 = $("#currency1").val();
  let currency2 = $("#currency2").val();
  clearForms();
  makeApiCall(dollars, currency1, currency2);
  $('#userInput').hide();
  $('#output').show();
});
$('#again').on("click", function(){
  $('#userInput').show();
  $('#output').hide();
});