// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  amount = form.elements['deposit'].valueAsNumber;
  rate = form.elements['rate'].valueAsNumber;
  years = form.elements['years'].valueAsNumber;
  table =
    '<table>' +
    '<tr><th>Year</th><th>Starting Value</th>' +
    '<th>Interest Earned</th><th>Ending Value</th></tr>';

// ---> Write your code here to generate the table and show it in the page

var intamount = parseInt(document.getElementByID("deposit").value);
var amount = parseInt(document.getElementByID("rate").value)/100;
var amount = parseInt(document.getElementByID("years").value);
var interest = (amount * rate) / 100;
var amount = interest + amount 

// document.getElementById("amount")

for(var i= 1; i <= years; i++){
  	interest = Math.round(intamount*interest/100);
  	amount = intamount + interest;
  	table += "<tr><th scope='row'>" + i + "</th><td>" + addCommas(startSum) + "</td><td>" + interest +
     "</td><td>" + addCommas(interest)  + "</td><td>" + addCommas(amount) + "</td></tr>";
  	// startSum = finalSum;
  	}

// $(document).ready(function(){
// 	$("#result-table").hide();
// 	$("#calculate").click(function() {
// 	var initialSum = $("#initial-sum").val();
// 	var startSum = initialSum;
// 	var interestRate = $("#interest-rate").val();
// 	var years = $("#years").val();
// 	var table = "";
// 	var interest = 0;
// 	var finalSum = 0;
// 	for(var i= 1; i <= years; i++){
// 	interest = Math.round(startSum*interestRate/100);
// 	finalSum = Number(startSum) + interest;
// 	table += "<tr><th scope='row'>" + i + "</th><td>" + addCommas(startSum) + "</td><td>" + interestRate + "</td><td>" + addCommas(interest)  + "</td><td>" + addCommas(finalSum) + "</td></tr>";
// 	startSum = finalSum;
// 	}
// 	$("#table-result").html(table);
// 	$("#result").html("After " + years + " years, the initial sum " + addCommas(initialSum) +" $ becomes <span class = 'font-weight-bold'>" + addCommas(finalSum) + " $</span>");
// 	$("#result-table").show();
// 	})
			 
// })
// function addCommas(nStr) {
//     nStr += '';
//     var x = nStr.split('.');
//     var x1 = x[0];
//     var x2 = x.length > 1 ? '.' + x[1] : '';
//     var rgx = /(\d+)(\d{3})/;
//     while (rgx.test(x1)) {
//         x1 = x1.replace(rgx, '$1' + ',' + '$2');
//     }
//     return x1 + x2;
// }
//=================




// function generateTable(form) {
//   var x = document.getElementById("Table");
  
// }


  
//             for (count = 1; count <= years; count++)
//             {
//                 Compute_Investment = principal * (1 + interestRate);
//                 principal = Compute_Investment;

//                 Interest.DisplayResult(Compute_Investment, count);
//                }

// return;



} // end generateTable
