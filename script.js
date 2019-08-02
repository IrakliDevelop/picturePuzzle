let imageNames = ['Mona Lisa', 'Some Dude with Big Nose', 'Apollo 11', 'King David'];
let correctOrderOfImages = [1,2,3,4,5,6,7,8];
let divOrder = [1,4,7,2,5,8,3,6];
let isStarted = false;

timerLabel = document.getElementById('timer');
var timer = new Timer();

setInterval(function(){
    timerLabel.innerHTML = timer.getDuration();
}, 1000);

function generatePuzzle(imageName){
    var images = [`images/${imageName}/image_part_001.jpg`, `images/${imageName}/image_part_002.jpg`, `images/${imageName}/image_part_003.jpg`, `images/${imageName}/image_part_004.jpg`, `images/${imageName}/image_part_005.jpg`, `images/${imageName}/image_part_006.jpg`, `images/${imageName}/image_part_007.jpg`, `images/${imageName}/image_part_008.jpg`,];

    let used = [];

    let correctOrderOfImages = [1,2,3,4,5,6,7,8];
    let divOrder = [1,4,7,2,5,8,3,6];

    var main = document.getElementById("main");
    var originalImage = document.getElementById('originalImage');
    originalImage.src = `images/${imageName}/image.jpg`;

    main.innerHTML = `
    <div class="myRow" id="firstRow">
        <div id="1"></div>
        <div id="2"></div>
        <div id="3"></div>
    </div>
    <div class="myRow" id="secondRow">
        <div id="4"></div>
        <div id="5"></div>
        <div id="6"></div>
    </div>
    <div class="myRow" id="thirdRow">
        <div id="7"></div>
        <div id="8"></div>
        <div id="empty"></div>
    </div> 
    `;

    console.log(images);

    for (let i=0; i<8; i++){
        let img = document.createElement("img");
        let idx = Math.round(Math.random()*7);
        //console.log(idx);
        if (used.indexOf(idx) != -1){
            while(used.indexOf(idx) != -1){
                idx = Math.round(Math.random()*7);
            }
        }
        console.log(idx);
        img.src = images[idx];
        //console.log(img);
        used.push(idx);
        document.getElementById(i+1).appendChild(img);
    }

    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    timer.reset();
    isStarted = false;
}

// initialization 
generatePuzzle(imageNames[Math.floor(Math.random()*imageNames.length)]);

document.getElementById("main").addEventListener('click', (event)=>{
    if(!isStarted){
        isStarted = true;
        timer.start();
    }


    //console.log(event.target.parentElement);

    parentDiv = event.target.parentElement;
    emptyDiv = document.getElementById("empty");

    if (event.target.src != undefined){
        let id = parentDiv.id;
        let empty = document.getElementById("empty");
        let newImg = document.createElement("img");
        newImg.src = event.target.src;
        //console.log(newImg);
        empty.appendChild(newImg);
        empty.removeAttribute("id");
        parentDiv.removeAttribute("id");
        empty.setAttribute("id", id);
        parentDiv.removeChild(parentDiv.childNodes[0]);
        parentDiv.setAttribute("id", "empty");
    } 

    //pushing images to array
    let currentImagesOrder = [];
    let imageElements = document.getElementsByTagName("img");
    for (let i = 1; i <9; i++){
        let tmpImg = imageElements[i].src;
        // console.log(tmpImg[tmpImg.length-5]);
        console.log(tmpImg);
        currentImagesOrder.push(parseInt(tmpImg[tmpImg.length-5]));
    }

    console.log(currentImagesOrder);
    console.log(divOrder);
    let youWon = true;
    for (let i=0; i<8; i++){
        if (currentImagesOrder[i] != divOrder[i]){
            youWon = false;
            break;
        } else {
            youWon = true;
        }
    }

    if(youWon){
        console.log("YOU WON");
    }

    let thirdRow = document.getElementById("thirdRow");

    let header =  document.getElementById("header");
    if (youWon && thirdRow.childNodes[5].id == "empty"){
        header.innerHTML = `<h1 class='text-primary'>You have won!<br />TIME: <span class='text-success'>${timer.getDuration()}</spann></h1>`;
        header.style.color = 'green';
        header.innerHTML += "<button id='restart' class='btn btn-danger'>Restart & Use Random Image</button>";
        timer.stop();
        isStarted = false;

        restartBtn = document.getElementById('restart');
        restartBtn.addEventListener('click', function(){
            generatePuzzle(imageNames[Math.floor(Math.random()*imageNames.length)]);
            header.innerHTML = "<h1>Picture Puzzle</h1>";
            header.style.color = "black";
        });

        // Remove EventListener
    }
    else{
        header.innerHTML = "<h1>Picture Puzzle</h1>";
        header.style.color = "black";
    }
})

document.getElementById("chooseImageBtn").addEventListener("click", function(){
    var modal = document.getElementById('myModal');
    table = document.getElementById('imageNamesTable');
    modal.style.display = "block";

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    table.innerHTML = "";

    for (let i = 0; i < imageNames.length; i++){
        table.innerHTML += `
            <tr>
                <td>${imageNames[i]}</td>
                <td><img src='images/${imageNames[i]}/image.jpg'/></td>
                <td><button onclick="generatePuzzle('${imageNames[i]}')" class="btn btn-success">Select</button></td>
            </tr>
        `;
    }
});

// Remove zzz stuff
let anchor = document.querySelectorAll("a[href='https://www.zzz.com.ua/']");
let footDiv = document.getElementsByClassName('cbalink')[0];
let parent = anchor[0].parentNode;
parent.style.display = "none";
footDiv.style.display = "none";