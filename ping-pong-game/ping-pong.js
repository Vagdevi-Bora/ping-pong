 
 
 let start=document.querySelector(".start");
 let ball=document.querySelector(".circle");
 let main=document.getElementsByTagName("main")[0];
 let bat=document.getElementsByClassName(".bat");
 let bat1=document.querySelector(".bat1");
 let bat2=document.querySelector(".bat2");
 let gameOver=document.querySelector("#gameOver");
 let tryAgain=document.querySelector(".tryAgain");
 let point=document.querySelector(".points");
 let levels=document.querySelector(".level");
let var1;
let ballTravel;
let mouse={};
let points=0;
let level=0;

document.addEventListener("mousemove",trackPosition);


  let W=main.offsetWidth;
  let H=main.offsetHeight;
  let batW=bat1.offsetWidth;
  let batH=bat1.offsetHeight;
  let startButton=start.offsetWidth;
  let tryButton=tryAgain.offsetWidth;
 

 ball.style.top=H-20;
 ball.style.left=W/2;
 bat1.style.left=W/2-batW/2;
 bat2.style.left=W/2-batW/2;
 bat2.style.top=H-batH;
 start.style.left=W/2-startButton/2;
 tryAgain.style.left=W/2-tryButton/2;

start.addEventListener("click",startGame);
tryAgain.addEventListener("click",function(){
    points=0;
    level=0;
    marks();
    updateLevel();
    ball.style.top=H-20;
 ball.style.left=W/2;
 startGame();
});


function startGame(){
    start.style.display="none";
    tryAgain.style.display="none";
    gameOver.style.display="none";
  playing();
   
}

function trackPosition(e){
    mouse.x = e.pageX;
	mouse.y = e.pageY;
}

function mousemoveFunc(){
    if(mouse.x && mouse.y){
        bat1.style.left=mouse.x;
        bat2.style.left=mouse.x;
   
       }
}

function playing(){
    

          upRight();
            
     function upRight(){
        
        ballTravel=setInterval(function(){
        ball.style.left=ball.offsetLeft+2;
        ball.style.top=ball.offsetTop-5;
            if(collide()){
                clearInterval(ballTravel);
                return downRight();
             }
            if(sideTouch()){
                clearInterval(ballTravel);
             return upLeft();
            }
        pause();
        mousemoveFunc()
       
    },15);}
    

    function downRight(){
       
        ballTravel=setInterval(function(){
        ball.style.left=ball.offsetLeft+2;
        ball.style.top=ball.offsetTop+5;
            if(collide()){
                clearInterval(ballTravel);
              upRight();
              return;
             }
             if(sideTouch()){
                clearInterval(ballTravel);
                return downLeft();
            }
        mousemoveFunc();
        pause();
    },15);}

    function upLeft(){
       
        ballTravel=setInterval(function(){
        ball.style.left=ball.offsetLeft-2;
        ball.style.top=ball.offsetTop-5;
            if(collide()){
                clearInterval(ballTravel);
                return downLeft();
             }
             if(sideTouch()){
                clearInterval(ballTravel);
             return upRight();
            }
       mousemoveFunc(); 
        pause();
    },15);}

    function downLeft(){
        
        ballTravel=setInterval(function(){
        ball.style.left=ball.offsetLeft-2;
        ball.style.top=ball.offsetTop+5;
        if(collide()){
            clearInterval(ballTravel);
            return upLeft();
        }
        if(sideTouch()){
            clearInterval(ballTravel);
         return downRight();
        }
        mousemoveFunc();
        pause();
    },15);}
   
}
function pause(){
    if(ball.offsetTop===5||bat2.offsetTop-6<=ball.offsetTop){
        console.log("out");
        gameOvered();
        setTimeout(tryAgainFun,1500);
        clearInterval(ballTravel);
        return;
    }
}

function collide(){
    if(ball.offsetTop===5){
        if(bat1.offsetLeft<=ball.offsetLeft && bat1.offsetLeft+bat1.offsetWidth>ball.offsetLeft){
            var1=1;
            points+=1;
            marks();
            return true;
        }}
        else if(ball.offsetTop>=bat2.offsetTop-10){
            if(bat2.offsetLeft<=ball.offsetLeft && bat2.offsetLeft+bat1.offsetWidth>ball.offsetLeft){
               var1=2;
               points+=1;
               marks();
                return true; 
            }
        }
    else{
        return false;
    }
}



 function gameOvered(){
    gameOver.style.display="block";
    gameOver.innerHTML="Game Over";
    gameOver.classList.add("gameOverClass");
   
 }

 function tryAgainFun(){
 tryAgain.style.display="block";
 }
 
function sideTouch(){
    if(ball.offsetLeft<=0||ball.offsetLeft>=W-16){
        return true;
    }
}

function marks(){
    point.style.color="white";
    point.innerText=points;
    if(points==8){
        points=0;
        level++;
        updateLevel();
    }
}
function updateLevel(){
    if(level>=1){
        alert("Woww.. You are complete"+" "+level+"st"+"Level");
    }
    levels.style.color="white";
    levels.innerText=level;
}
marks();
updateLevel();

console.log(ball.offsetTop);
console.log(ball.offsetHeight);
console.log(bat2.offsetHeight);
console.log(ball.offsetTop+ball.offsetHeight+bat2.offsetHeight);
H===ball.offsetTop+ball.offsetHeight+bat2.offsetHeight

