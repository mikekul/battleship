// tablica dwuwymiarowa zawierajaca informacje o strzalach

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

//zmienne pomocnicze przechowujace strukture danych w html

var html = '<table id="Battleships">'; //otwarcie tabeli

//pętla przechodzaca po głownej tablicy
for(var i = 0; i < shipsArray.length; i++){
  html += '<tr>';

  var row = shipsArray[i]; //tablica zagniezdzona
  //petla przechodzaca po tablicach zagniezdzonych
  for(var j = 0; j < row.length; j++){
    html += '<td>';
    var element = row[j];
    html += element;
    html += '</td>';
  }

  html += '</tr>';
}



html += '</table>'; //zamknięcie tabli

document.write(html); //drukowanie elementu czyli html
