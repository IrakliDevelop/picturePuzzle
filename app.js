var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var empty = 9;
var moves = -1;

var ar = [1, 2, 3, 4, 5, 6, 7, 8, 0];
var ar1 = [1, 2, 3, 4, 5, 6, 7, 8, 0];
im = shuffle(ar1);

for (let i = 0; i <= 8; i++){
    if(im[i] == 0){
        empty = i + 1;
    }
}

var restart = 0;
