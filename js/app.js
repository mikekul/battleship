var shipsArray = [
    [' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', 'o', ' ', ' ', 'x', ' ', ' ',],
    [' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ',],
    [' ', 'o', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', 'x', ' ', 'o', ' ', ' ', ' ',],
    [' ', ' ', 'o', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'o',],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',],
];

//console.log(shipsArray);

var html = '<table id="Battleships">'; //otwarcie tabeli

for(var i = 0; i < shipsArray.length; i++){
  html += '<tr>';

  var row = shipsArray[i]; //tablica zagniezdzona

  for(var j = 0; j < row.length; j++){
    html += '<td>';
    var element = row[j];
    html += element;
    html += '</td>';
  }

  html += '</tr>';
}



html += '</table>'; //zamknięcie tabli

document.write(html);
