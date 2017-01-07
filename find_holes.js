// console.log(countHoles(345060));

function countHoles(num) {
    var Count = 0;

    while (num != 0) {
        if (num % 10 == 1 || num % 10  == 2 || num % 10 == 3 || num % 10 == 5 || num % 10 == 7) {
            Count += 0;
        }
        if (num % 10 == 0 || num % 10 == 4 || num % 10 == 6 || num % 10 == 9) {
              Count += 1;
        }
        if (num % 10 == 8) {
            Count += 2;
        }

        num = Math.floor(num/10);
    }

    return Count;

}


console.log(countHoles(345060));
