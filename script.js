window.onload = function(){
    let img = document.getElementById("yee1");
    let count = document.getElementById("score");
    let score = 0;
    let audio = new Audio("yee.wav");

    img.addEventListener('mousedown', ()=>{
        increaseScore();
        img.src = 'yee2.png';
        audio.play();
    });

    img.addEventListener('mouseup', ()=>{
        img.src = 'yee1.png';
        audio.play();
    });

    function increaseScore(){
        score++;
        count.innerHTML = score;
    }
}

