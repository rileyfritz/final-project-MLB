var tableData = {
    "Year": {
        "0": 2000,
        "1": 2002,
        "2": 2004,
        "3": 2006,
        "4": 2008,
        "5": 2010,
        "6": 2012,
        "7": 2014,
        "8": 2016,
        "9": 2018,
        "10": 2020
    },
    "first_prediction": {
        "0": "NYM",
        "1": "ARI",
        "2": "HOU",
        "3": "MIN",
        "4": "CHC",
        "5": "MIN",
        "6": "SFG",
        "7": "DET",
        "8": "BOS",
        "9": "BOS",
        "10": "LAD"
    },
    "second_prediction": {
        "0": "LAD",
        "1": "STL",
        "2": "SDP",
        "3": "SDP",
        "4": "BOS",
        "5": "TEX",
        "6": "TEX",
        "7": "LAD",
        "8": "TEX",
        "9": "CLE",
        "10": "BAL"
    },
    "third_prediction": {
        "0": "SFG",
        "1": "BOS",
        "2": "LAD",
        "3": "TOR",
        "4": "LAD",
        "5": "CIN",
        "6": "MIL",
        "7": "KCR",
        "8": "CLE",
        "9": "COL",
        "10": "CHW"
    },
    "Team": {
        "0": "NYY",
        "1": "ANA",
        "2": "BOS",
        "3": "STL",
        "4": "PHI",
        "5": "SFG",
        "6": "SFG",
        "7": "SFG",
        "8": "CHC",
        "9": "BOS",
        "10": "LAD"
    }
};

var tableLength = Object.keys(tableData.Year).length
console.log(tableLength);

// Function to fill html table with data
function buildTable(data) {
    var table = d3.select("#nn-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < tableLength; i++) {
        trow = tbody.append("tr");

        year = data.Year[i];
        trow.append("td").year;

        first = data.first_prediction[i];
        trow.append("td").first;
        
        second = data.second_prediction[i];
        trow.append("td").second;
        
        third = data.third_prediction[i];
        trow.append("td").third;
        
        actual = data.Team[i];
        trow.append("td").actual;

        // console.log(text(year))
        // trow.append("td").text(data[i].Team);
        // console.log(text(data.Year[i]));       
     
     
    }
};

// call function with our json data
buildTable(tableData);
