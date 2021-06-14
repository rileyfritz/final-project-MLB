
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
        // console.log(year)
        trow.append("td").text(year);

        first = data.first_prediction[i];
        trow.append("td").text(first);

        second = data.second_prediction[i];
        trow.append("td").text(second);

        third = data.third_prediction[i];
        trow.append("td").text(third);

        actual = data.actual[i];
        trow.append("td").text(actual);
    }
});

