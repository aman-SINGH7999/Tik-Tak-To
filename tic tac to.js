console.log("hi");

let container = document.getElementsByClassName("container");
let box = document.getElementsByClassName("box");
let toss = document.getElementById("toss");
// console.log(box);
var chance;
let btn = document.getElementsByClassName("btn");
btn[0].addEventListener("click",(e)=>{
    chance = 0;
    start();
    toss.innerText = "Chance of Player  - X";
})

for(i=0;i<box.length;i++){
    let boxid = document.getElementById(`${i}`);
   
        boxid.addEventListener("click",(e)=>{
            
            if(chance<9){
                if(boxid.innerText == "X" || boxid.innerText == "O"){
                    //console.log(boxid.innerText);
                }
                else{
                    if(chance&1 == 1){
                        boxid.innerText = "O";
                        if(chackWin("O")){
                            toss.innerText = "Player  - O Win the match ";
                            chance = 10;
                        }else{
                            toss.innerText = "Chance of Player  - X ";
                        }
                        
                        chance++;
                        if(chance == 9){
                            style(0,1,2);style(3,4,5);style(6,7,8);
                            toss.innerText = "Tie ";
                        }
                    }
                    else{
                        boxid.innerText = "X";
                        if(chackWin("X")){
                            toss.innerText = "Player  - X Win the match ";
                            chance = 10;
                        }else{
                            toss.innerText = "Chance of Player  - O ";
                        }
                        chance++;
                        if(chance == 9){
                            style(0,1,2);style(3,4,5);style(6,7,8);
                            toss.innerText = "Tie ";
                        }
                    }
                }
            }else{
                e.stopPropagation();
            }
        })
}

function start(){
    for(i=0;i<box.length;i++){
        box[i].innerText = "";
        box[i].style.backgroundColor = "rgb(191, 166, 166)"
    }
}

function style(n1,n2,n3){
    document.getElementById(`${n1}`).style.backgroundColor = "red";
    document.getElementById(`${n2}`).style.backgroundColor = "red";
    document.getElementById(`${n3}`).style.backgroundColor = "red";
}

function chackWin(ch){
    if(box[0].innerText == ch && box[1].innerText == ch && box[2].innerText == ch)
    {
        style(0,1,2);
        return true;
       }
    if(box[0].innerText == ch && box[3].innerText == ch && box[6].innerText== ch )
    {
        style(1,3,6);
        return true;
       }
    if(box[0].innerText == ch && box[4].innerText == ch && box[8].innerText== ch )
    {
        style(0,4,8);
        return true;
       }
    if(box[1].innerText == ch && box[4].innerText == ch && box[7].innerText== ch )
    {
        style(1,4,7);
        return true;
       }
    if(box[2].innerText == ch && box[5].innerText == ch && box[8].innerText== ch )
    {
        style(2,5,8);
        return true;
       }
    if(box[2].innerText == ch && box[4].innerText == ch && box[6].innerText== ch )
    {
        style(2,4,6);
        return true;
       }
    if(box[3].innerText == ch && box[4].innerText == ch && box[5].innerText== ch )
    {
        style(3,4,5);
        return true;
       }
    if(box[6].innerText == ch && box[7].innerText == ch && box[8].innerText== ch )
    {
        style(6,7,8);
        return true;
       }
    else
        return false;
}