// import dataJson from '/sample.json';

function test() {
    //const data = require('./sample.json');
    //console.log(data);
    fetch("./sample.json")
        .then(response => {
            return response.json();
        })
        .then(data => console.log(data));
}

////--------------------
let selectedFile, selectedFile2;
console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})
selectedFile2 = ''
let data = [{
    "name": "jayanth",
    "data": "scd",
    "abc": "sdef"
}]
let Member = [{
    "sno": Number,
    "Name": String,
    "Each": Number,
    "ToGive": Number,
    "Given": Number,
    "spend": Number,
    "Item": Number
}]

let rowObject;
document.getElementById('button').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if (selectedFile) {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workbook = XLSX.read(data, { type: "binary" });
            workbook.SheetNames.forEach(sheet => {
                rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                console.log(rowObject);
                //document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject, undefined, 4)

            });
            // console.log("rowObject", Object.entries(rowObject));
            //console.log("Workbook", rowObject);
            Member = rowObject.filter(x => x.sno < 8)
            AmtSpend = rowObject.filter(x => x.sno >= 8).filter(x => x.spend > 0)
            // console.log("Member", Member);
            //console.log("AmtSpend", AmtSpend);

            var k = "";
            var totalGiven = 0;
            totalGiven = Member.filter(x => x.sno == 7).map(x => x.Given);

            for (i = 0; i < Member.length; i++) {
                k += '<tr>';
                k += '<td>' + Member[i].Name + '</td>';
                k += '<td>' + Member[i].ToGive + '</td>';
                k += '<td>' + Member[i].Given + '</td>';
                k += '</tr>';
            }

            $("#tableData").html(k);

            var s = "";
            var TotalAmt = 0, RemAmt = 0, temp = totalGiven;
            for (i = 0; i < AmtSpend.length; i++) {
                TotalAmt = TotalAmt + AmtSpend[i].spend;
                RemAmt = temp - AmtSpend[i].spend;
                temp = RemAmt;
                s += '<tr>';
                s += '<td>' + AmtSpend[i].Item + '</td>';
                s += '<td>' + AmtSpend[i].spend + '</td>';
                s += '<td>' + TotalAmt + '</td>';
                s += '<td>' + RemAmt + '</td>';
                s += '</tr>';
            }

            $("#tableData2").html(s);
        }
    }
    //----------------------read and weite file -------------------------------//

});
function loadJSON(callback) {

    $.getJSON('https://naveenmnk25.github.io/assests/details.json', function (data) {
        console.log("data", data);
        var Member = data.filter(x => x.sno < 8)
        AmtSpend = data.filter(x => x.sno >= 8).filter(x => x.spend > 0)
        console.log("Member", Member);
        console.log("AmtSpend", AmtSpend);

        var k = "";
        var totalGiven = 0;
        totalGiven = Member.filter(x => x.sno == 7).map(x => x.Given);

        for (i = 0; i < Member.length; i++) {
            k += '<tr>';
            k += '<td>' + Member[i].Name + '</td>';
            k += '<td>' + Member[i].ToGive + '</td>';
            k += '<td>' + Member[i].Given + '</td>';
            k += '</tr>';
        }

        $("#tableData").html(k);

        var s = "";
        var TotalAmt = 0, RemAmt = 0, temp = totalGiven;
        for (i = 0; i < AmtSpend.length; i++) {
            TotalAmt = TotalAmt + AmtSpend[i].spend;
            RemAmt = temp - AmtSpend[i].spend;
            temp = RemAmt;
            s += '<tr>';
            s += '<td>' + AmtSpend[i].Item + '</td>';
            s += '<td>' + AmtSpend[i].spend + '</td>';
            s += '<td>' + TotalAmt + '</td>';
            s += '<td>' + RemAmt + '</td>';
            s += '</tr>';
        }

        $("#tableData2").html(s);
    });

}

function readandwrite() {
    // get applicaiton
    app = Application.currentApplication();
    // use StandardAdditions
    app.includeStandardAdditions = true;

    // open save dialog
    options = {
        defaultName: 'sample.txt',
        defaultLocation: app.pathTo('desktop')
    };
    filePath = app.chooseFileName(options);

    // open file
    options = {
        writePermission: true
    };
    fileReferenceNumber = app.openForAccess(filePath, options);

    // write to file
    text = 'asdf';
    options = {
        to: fileReferenceNumber
    };
    app.write(text, options);

    // close file
    app.closeAccess(fileReferenceNumber);
}

