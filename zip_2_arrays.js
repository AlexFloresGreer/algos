//Given 2 sorted arrays return 2nd array

function zip_arrays(Aarray, Barray) {
  var k = Aarray.length-1; //Aarray[k]
  var h = Barray.length-1; //here's where the largest #'s will be placed
  var i = h-k-1; //
    do {
       // console.log(i);
       if (Barray[i] < Aarray[k]) {
         Barray[h] = Aarray[k];
         h--;
         k--;
       }
       if (Barray[i] > Aarray[k]) {
         Barray[h] = Barray[i];
         h--;
         i--;
       }
       else if (Barray[i] == Aarray[k]) {
         Barray[i] = Aarray[h];
         h--;
         i--;
         Aarray[k] = Barray[h];
         h--;
         k--;
       }
     }
    while(h > i) {
  }

  return Barray;
}
console.log(zip_arrays( [5, 7, 10], [1, 6, 11, "", "", ""] ));
