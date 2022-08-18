$(document).ready(function(){
	$("#result-table").hide();
	$("#calculate").click(function() {
	var initialSum = $("#initial-sum").val();
	var startSum = initialSum;
	var interestRate = $("#interest-rate").val();
	var years = $("#years").val();
	var table = "";
	var interest = 0;
	var finalSum = 0;
	for(var i= 1; i <= years; i++){
	interest = Math.round(startSum*interestRate/100);
	finalSum = Number(startSum) + interest;
	table += "<tr><th scope='row'>" + i + "</th><td>" + addCommas(startSum) + "</td><td>" + interestRate + "</td><td>" + addCommas(interest)  + "</td><td>" + addCommas(finalSum) + "</td></tr>";
	startSum = finalSum;
	}
	$("#table-result").html(table);
	$("#result").html("After " + years + " years, the initial sum " + addCommas(initialSum) +" $ becomes <span class = 'font-weight-bold'>" + addCommas(finalSum) + " $</span>");
	$("#result-table").show();
	})
			 
})
// function addCommas(nStr) {
//     nStr += '';
//     var x = nStr.split('.');
//     var x1 = x[0];
//     var x2 = x.length > 1 ? '.' + x[1] : '';
//     var rgx = /(\d+)(\d{3})/;
//     while (rgx.test(x1)) {
//         x1 = x1.replace(rgx, '$1' + ',' + '$2');
//     }
    return x1 + x2;
}