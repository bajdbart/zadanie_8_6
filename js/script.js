var a = prompt('Podaj pierwszą liczbę: ');
var b = prompt('Podaj drugą liczbę: ');
var value = (a * a) - (2 * a * b) - (b * b);

console.log('Value is equal to: ' + value);

if (value > 0)
  {
    alert("Wynik jest dodatni i wynosi:" + value);
  }
else if (value == 0)
  {
    alert("Wynik to zero");
  }
else
  {
    alert("Wynik jest ujemny i wynosi: " + value);
  }
