// Variables
let user_choise = "";

// Buttons
const Option = document.querySelectorAll(".Option");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");

// Image
let user_img = document.querySelector("#image1");
let comp_img = document.querySelector("#image2");

// Logic function
function comp_choise(){
    let option = ["","rock","paper","scissor"];
    let comp_choise = option[Math.floor(Math.random()*option.length)];

    if(comp_choise == "rock")
    {
         comp_img.src = "rock.png"
         comp_img.style = "width: 190px; height: 190px; transform: rotate(0deg);";
    }

    else if(comp_choise == "paper")
    {
        comp_img.src = "paper.png";
        comp_img.style = "width: 190px; height: 190px; transform: rotate(210deg);";    
    }

    else if(comp_choise == "scissor")
    {
        comp_img.src = "scissors2.png"
        comp_img.style = "width: 200px; height: 200px; transform: rotate(290deg);  object-fit: contain;";
    }

    return comp_choise;
}


// Body of the program
option1.addEventListener("click",()=>{
    user_choise = "rock";
    user_img.src = "rock.png"
    user_img.style = "width: 190px; height: 190px; transform: rotate(180deg);";
    play(user_choise);
});

option2.addEventListener("click",()=>{
    user_choise = "paper";
    user_img.src = "paper.png";
    user_img.style = "width: 190px; height: 190px; transform: rotate(40deg);";
    play(user_choise);
    });
    
    option3.addEventListener("click",()=>{
        user_choise = "scissor";
        user_img.src = "scissors2.png"
        user_img.style = "width: 200px; height: 200px; transform: rotate(90deg);  object-fit: contain;";
        play(user_choise);
    });
    
 let result = document.querySelector(".result");
 let score1 = document.querySelector("#score1");
 let score2 = document.querySelector("#score2");
 function play(user_choise) {
    let comp = comp_choise();
    let user_score = Number(score1.innerText);
    let comp_score = Number(score2.innerText);
    console.log(typeof(user_score));
    console.log(comp_score);

     if(user_choise == comp)
        {
            result.innerText = "Drow";
        }
        
    else if((user_choise == "rock" && comp == "scissor") || (user_choise == "paper" && comp == "rock") || (user_choise == "scissor" && comp == "paper"))
        {
        result.innerText = "Winner";
        user_score++;
        score1.innerText = user_score.toString();

    }

    else if((user_choise == "rock" && comp == "paper") || (user_choise == "paper" && comp == "scissor") || (user_choise == "scissor" && comp == "rock"))
        {
        result.innerText = "Loser";
        comp_score++;
        score2.innerText = comp_score.toString();

    }
}

// Reset
let reset = document.querySelector("#reset");
reset.addEventListener("click",() =>{
    location.reload();
})