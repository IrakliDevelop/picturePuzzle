let anchor = document.querySelectorAll("a[href='https://www.zzz.com.ua/']");
let footDiv = document.getElementsByClassName('cbalink')[0];
// console.log(footDiv);
let parent = anchor[0].parentNode;
parent.style.display = "none";
footDiv.style.display = "none";