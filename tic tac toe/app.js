//access the elements by declaring variables.
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let newGamebtn=document.querySelector("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let Msg=document.querySelector("#msg");

//playerO,playerX
let turnO=true;

//winning-posibility  patterns
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

//add eventlistner on all box to make boxes clickable 
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){    //playerO turn
            box.innerText="O";
            turnO=false;
        }else{         //playerX
            box.innerText="X";
            turnO=true;

        }
        box.disabled=true;

        checkWinner();
    });
});
//function for disable reaquied buttons when winner is declared
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
//function for showing winner msg
showWinner= (winner) =>{
    Msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

// function for checking the winning posibilities
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        //checking position values that should not be empty
        if(pos1Val !="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val ===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
        
        

        
    }
};
newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

    

        
       
