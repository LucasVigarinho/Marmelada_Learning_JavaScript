function genDivs(v, sheet){
    var e = document.body;
    for(var i = 0; i < v; i++){
        var row = document.createElement("div");
        row.className = "row";
        for(var x = 1; x <= v; x++){
            var cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.innerText = (i * v) + x;
            row.appendChild(cell);
        }
        e.appendChild(row);
    }
    document.getElementById("code").innerText = e.innerHTML;
   swapStyle(sheet);
}

function swapStyle(sheet) {
    document.getElementById("pageStyle").setAttribute('href', sheet);

}

