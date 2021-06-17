
d3.json('../nn_predictions.json').then(function (data) {
    console.log(data);

    var tableLength = Object.keys(data.Year).length
    console.log(tableLength);

    // Function to fill html table with data
    var table = d3.select("#nn-table");
    var tbody = table.select("tbody");
    var trow;
    var correct_count = 0;
    var topthree_count = 0;

    for (var i = 0; i < tableLength; i++) {
        trow = tbody.append("tr");

        year = data.Year[i];
        first = data.first_prediction_fn[i];
        second = data.second_prediction_fn[i];
        third = data.third_prediction_fn[i];
        actual = data.actual_fn[i];
        

        if (actual === first || actual === second || actual === third) {
            var css_class = 'trpass';
        }
        else { var css_class = 'trfail'
        }

        trow.append("td").text(year).attr('class',css_class);
        
        if (actual === first) {
            trow.append("td").text(first).attr('class', 'bold');
            correct_count++;
            topthree_count++;
        }
        else {
            trow.append("td").text(first).attr('class',css_class)
        }
        
        if (actual === second) {
            trow.append("td").text(second).attr('class', 'bold');
            topthree_count++;

        }
        else {
            trow.append("td").text(second).attr('class',css_class)
        }   

        if (actual === third) {
            trow.append("td").text(third).attr('class', 'bold');
            topthree_count++;

        }
        else {
            trow.append("td").text(third).attr('class',css_class)
        }   

        trow.append("td").text(actual).attr('class',css_class);   
    }
    console.log(correct_count);
    console.log(topthree_count);

    document.getElementById("correctcnt").innerHTML = `${correct_count}/21`;
    document.getElementById("topthreecnt").innerHTML = `${topthree_count}/21`;


    // function sortTable() for sorting html table was found here: https://www.w3schools.com/howto/howto_js_sort_table.asp
    function sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("nn-table");
        switching = true;
        /* Make a loop that will continue until
        no switching has been done: */
        while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
        }
    }

    sortTable();
   

});

function filterbuttons(year) {
    d3.json('../nn_predictions.json').then(function (data) {
        // console.log(data);
        
        var table = document.getElementById("nn-table");
        var tr = table.getElementsByTagName("tr");
        var tableLength = Object.keys(data.Year).length

        for (i = 1; i < tr.length; i++) {

            var tdYear = tr[i].getElementsByTagName("td")[0].innerText;
            if (tdYear == year) {

                for (var j = 0; j < tableLength; j++) {
                    if (data.Year[j] == year) {
                        first = data.first_prediction_fn[j];
                        second = data.second_prediction_fn[j];
                        third = data.third_prediction_fn[j];
                        actual = data.actual_fn[j];
                        first_abbr = data.first_prediction[j];
                        actual_abbr = data.actual[j];
                        console.log(first_abbr);
                        console.log(first_abbr.toLowerCase());

                    }
                        
                };
                document.getElementById("pred").innerHTML = `${year} Predictions`;
                document.getElementById("firstpred").innerHTML = `1. ${first}`;
                document.getElementById("secondpred").innerHTML = `2. ${second}`;
                document.getElementById("thirdpred").innerHTML = `3. ${third}`;

                if (first == 'San Francisco Giants' || 'Atlanta Braves') {
                    document.getElementById("predimg").innerHTML = `<img src='../images/logos/${first_abbr.toLowerCase()}.png' class='predimgsb'> <h4>Prediction</h4>`
                }

                else {
                    
                  
                    document.getElementById("predimg").innerHTML = `<img src='../images/logos/${first_abbr.toLowerCase()}.png' class='predimgs'><h4>Prediction</h4>`
                
                }

                if (first === actual) {
                    document.getElementById("result").innerHTML = "<img src='../images/logos/green.png' width='120px'>"
                }
                else {
                    document.getElementById("result").innerHTML = "<img src='../images/logos/red.png' width='120px'>"

                }
                document.getElementById("actimg").innerHTML = `<img src='../images/logos/${actual_abbr.toLowerCase()}.png' class='predimgs'><h4>Actual</h4>`

                break
            }
        }
    });
    // console.log(year);
};
