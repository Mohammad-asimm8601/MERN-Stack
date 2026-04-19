// ========== COMPLETE SIMON GAME LOGIC ==========

let gameSeq = [];      // Computer's sequence
let userSeq = [];      // Player's sequence

let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;
let highScore = localStorage.getItem("simonHighScore") || 0;

let h2 = document.querySelector("h2");
let highScoreSpan = document.getElementById("highScore");
highScoreSpan.innerText = highScore;

// ========== Flash Functions ==========

// Flash for computer's turn
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

// Flash for user's click
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}

// ========== Level Up ==========

function levelUp() {
    userSeq = [];  // Reset user sequence for new level
    level++;
    h2.innerText = `Level ${level}`;
    
    // Generate random color
    let randIdx = Math.floor(Math.random() * 4);  // 0, 1, 2, or 3
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log("Game Sequence:", gameSeq);
    
    // Flash the button
    gameFlash(randBtn);
}

// ========== Check Answer ==========

function checkAns(currentIdx) {
    if (userSeq[currentIdx] === gameSeq[currentIdx]) {
        // Correct so far
        if (userSeq.length === gameSeq.length) {
            // Level complete! Move to next level after delay
            setTimeout(levelUp, 1000);
        }
    } else {
        // WRONG! Game Over
        // Update high score
        if (level > highScore) {
            highScore = level;
            highScoreSpan.innerText = highScore;
            localStorage.setItem("simonHighScore", highScore);
        }
        
        // Game over message
        h2.innerHTML = `💀 GAME OVER! Score: ${level} 💀<br>Press any key to restart`;
        
        // Flash red background effect
        document.body.style.backgroundColor = "darkred";
        setTimeout(() => {
            document.body.style.backgroundColor = "";
        }, 300);
        
        // Reset game
        resetGame();
    }
}

// ========== Handle Button Press ==========

function btnPressHandler() {
    if (!started) {
        // Game not started, ignore clicks
        return;
    }
    
    let btn = this;
    let userColor = btn.getAttribute("id");
    
    userFlash(btn);
    userSeq.push(userColor);
    
    // Check the answer
    checkAns(userSeq.length - 1);
}

// ========== Start Game ==========

function startGame() {
    if (started == false) {
        console.log("Game Started!");
        started = true;
        level = 0;
        gameSeq = [];
        userSeq = [];
        levelUp();  // Start first level
    }
}

// ========== Reset Game ==========

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    h2.innerHTML = "Press any key to start";
}

// ========== Manual Reset Button ==========

function manualReset() {
    resetGame();
    document.body.style.backgroundColor = "";
}

// ========== Event Listeners ==========

// Start game on any key press
document.addEventListener("keypress", function(event) {
    if (!started) {
        startGame();
    }
});

// Add click listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPressHandler);
}

// Reset button listener
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", manualReset);

console.log("Simon Game Ready! Press any key to begin.");