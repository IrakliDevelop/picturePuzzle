function shuffle(array){
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function won(){
    ctx.clearRect(300, 300, 150, 150);
    var img = document.getElementById('puzz9');
    var pat = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pat;
    ctx.fillRect(300, 300, 150, 150);
    m = document.getElementById("message");
    m.innerHTML = `You won the game in ${moves.toString()} moves!`;
    restart = 1;
    moves = -1;
}

function draw(){
    moves++;
    mov = document.getElementById('moves');
    mov.innerHTML = `MOVES: ${moves.toString()}`;
    m = document.getElementById("message");
    m.innerHTML = "";

    var t = 0;
    if(restart == 1){
        im = shuffle(ar1);
        for(let i = 0; i <= 8; i++){
            if(im[i] == 0){
                empty = i + 1;
            }
        }
        console.log(empty);

        ctx.clearRect(0, 0, 450, 450);
        restart = 0;
    }

    for(let i = 0; i < 9; i++){
        if(im[i] != ar[i]){
            t = i;
        }
    }
    console.log(im);
    console.log(ar);

    for(let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            component(i, j); 
        }
    }

    console.log(t);

    if(t==0){
        console.log("one more");
        won();
    }
}

function component(x, y){
    var text = "puzzle";
    z = x + 3 * y;
    z = im[z];
    text = text + z.toString();
    if (z != 0){
        var img = document.getElementById('text');
        var pat = ctx.createPattern(img, "repeat");
        ctx.fillStyle = pat;
    }

    else{
        ctx.fillStyle = "white";
    }

    ctx.fillRect(150*x, 150*y, 150, 150);
}