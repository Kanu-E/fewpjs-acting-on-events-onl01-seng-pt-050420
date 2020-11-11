// Your code here

let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";


    function moveDodgerLeft(){
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
    
        dodger.style.left = `${left - 4}px`;
        
    }

    function moveDodgerRight(){
        let rightNumbers = dodger.style.left.replace("px", "");
        let right = parseInt(rightNumbers, 10);
    
        dodger.style.left = `${right + 4}px`;
        
    }

    function moveDodgerDown(){
        let downNumbers = dodger.style.bottom.replace("px", "");
        let down = parseInt(downNumbers, 10);
      
        dodger.style.bottom = `${down - 4}px`;
        
      }

      function moveDodgerUp(){
        let upNumbers = dodger.style.bottom.replace("px", "");
        let up = parseInt(upNumbers, 10);
      
        dodger.style.bottom = `${up + 4}px`;
        
      }


    document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
      if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
      if (e.key === "ArrowDown") {
          moveDodgerDown();
    }  
  });