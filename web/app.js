
d3.json('/nn_predictions.json').then(function (data) {
    console.log(data);

    var tableLength = Object.keys(data.Year).length
    console.log(tableLength);

    // Function to fill html table with data
    var table = d3.select("#nn-table");
    var tbody = table.select("tbody");
    var trow;

    for (var i = 0; i < tableLength; i++) {
        trow = tbody.append("tr");

        year = data.Year[i];
        first = data.first_prediction[i];
        second = data.second_prediction[i];
        third = data.third_prediction[i];
        actual = data.actual[i];

        if (actual === first || actual === second || actual === third) {
            var css_class = 'trpass';
        }
        else { var css_class = 'trfail'
        }

        trow.append("td").text(year).attr('class',css_class);
        
        if (actual === first) {
            trow.append("td").text(first).attr('class', 'bold');
        }
        else {
            trow.append("td").text(first).attr('class',css_class)
        }
        
        if (actual === second) {
            trow.append("td").text(second).attr('class', 'bold');
        }
        else {
            trow.append("td").text(second).attr('class',css_class)
        }   

        if (actual === third) {
            trow.append("td").text(third).attr('class', 'bold');
        }
        else {
            trow.append("td").text(third).attr('class',css_class)
        }   

        trow.append("td").text(actual).attr('class',css_class);
            
    }

});

function filterbuttons(year) {
    d3.json('/nn_predictions.json').then(function (data) {
        // console.log(data);
        
        var table = document.getElementById("nn-table");
        var tr = table.getElementsByTagName("tr");

        for (i = 1; i < tr.length; i++) {

            // console.log(tr[i]);
            var tdYear = tr[i].getElementsByTagName("td")[0].innerText;
            if (tdYear == year) {
                first = data.first_prediction[i-1];
                second = data.second_prediction[i-1];
                third = data.third_prediction[i-1];
                

                
                break
            }
        }
    });
    // console.log(year);
};
