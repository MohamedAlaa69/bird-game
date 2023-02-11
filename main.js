var bird=document.getElementById("bird")
var obstacle=document.getElementById("obstacle")
var hole=document.getElementById("hole")

var score= 0


hole.addEventListener("animationiteration",function(){
    var rand = Math.random() * (500-150);
    hole.style.top= rand+"px";
    score++
});

setInterval( function(){

    var birdTop=parseInt(getComputedStyle(bird).getPropertyValue("top"));
    if (!isJumping){
        bird.style.top= birdTop + 3 +"px"
    }


    var obstacleLeft=parseInt(getComputedStyle(obstacle).getPropertyValue("left"));
    var holeTop=parseInt(getComputedStyle(hole).getPropertyValue("top"));

    if(birdTop>500||(obstacleLeft <80 && (birdTop > holeTop + 150 || birdTop < holeTop))){
        alert("game over")

        bird.style.top = 100 + "px";
        obstacle.style.left= "100%";
        hole.style.left= "100%";

        score = 0;
    }
    
    
},10);

var isJumping = false;

document.addEventListener("click",function(){
    isJumping=true;
    jumpTimer=0;

    var jumpInterval=setInterval(function(){
        jumpTimer++;

        var birdTop=parseInt(getComputedStyle(bird).getPropertyValue("top"));
        if(birdTop>0 && jumpTimer< 15){
            bird.style.top=birdTop - 5 +"px";
        }

        if (jumpTimer>20){
            clearInterval(jumpInterval)
            isJumping=false;
            jumpTimer=0;
        }
    },10)
})

