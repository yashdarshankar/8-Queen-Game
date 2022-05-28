let turn = "Q"
let count = 0
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext')
    Element.addEventListener('click',()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            count++;
            document.getElementById("count").innerHTML = "The count of Queens :-" + count;
            if(count > 8){alert("Your count of queen is greater than 8")}
        }
        else{
            boxtext.innerText = "";
            count--;
            document.getElementById("count").innerHTML = "The count of Queens :-" + count;
        }
    })
})
let boxes1 = document.getElementsByClassName("box1");
Array.from(boxes1).forEach(Element =>{
    let boxtext = Element.querySelector('.boxtext')
    Element.addEventListener('click',()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turn;
            count++;
            document.getElementById("count").innerHTML = "The count of Queens :-" + count;
            if(count > 8){alert("Your count of queen is greater than 8")}
        }
        else{
            boxtext.innerText = "";
            count--;
            document.getElementById("count").innerHTML = "The count of Queens :-" + count;
        }
    })
})
str1  = [["d14","d27","d33","d48","d52","d65","d71","d86"],["d11","d26","d38","d43","d57","d64","d72","d85"],["d11","d25","d38","d46","d53","d67","d72","d84"],["d12","d24","d36","d48","d53","d61","d77","d85"],["d12","d25","d37","d41","d53","d68","d76","d84"],["d12","d25","d37","d44","d51","d68","d76","d83"]]
function checking(){
    for(i=0;i<3;i++){
        if(document.getElementById(str1[i][0]).innerText==turn && document.getElementById(str1[i][1]).innerText==turn && document.getElementById(str1[i][2]).innerText==turn && document.getElementById(str1[i][3]).innerText==turn && document.getElementById(str1[i][4]).innerText==turn && document.getElementById(str1[i][5]).innerText==turn && document.getElementById(str1[i][6]).innerText==turn && document.getElementById(str1[i][7]).innerText==turn ){
            document.getElementById("result").innerHTML = "You Won the N-queen Game"
        }
        else{
            document.getElementById("result").innerHTML = "You Lost the N-queen Game"
        }
    }
}
