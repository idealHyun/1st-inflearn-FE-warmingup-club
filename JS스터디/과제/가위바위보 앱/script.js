let playerWinNum = 0; // 플레이어가 이긴 횟수
let computerWinNum = 0; // 컴퓨터가 이긴 횟수
let gameCount = 10; // 가위바위보 게임 남은 횟수
let randomComputerChoice = ["가위", "바위", "보"];

const gameBtns = document.querySelectorAll(".buttons > button");
const restartBtn = document.querySelector(".restart");
const count = document.querySelector(".count");
const playerWinCount = document.querySelector(".player-win-count");
const computerWinCount = document.querySelector(".computer-win-count");
const result = document.querySelector(".game-result");
const playerIcon=document.querySelector(".player > i");
const computerIcon=document.querySelector(".computer > i");

gameBtns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const playerChoice = e.target.textContent;
		const computerChoice =
			randomComputerChoice[Math.floor(Math.random() * 3)];
        
        if(playerChoice === "가위") {
            playerIcon.className="fa-regular fa-hand-scissors";
        } else if(
            playerChoice === "바위") {
                playerIcon.className="fa-regular fa-hand-back-fist";
        } else {   
            playerIcon.className="fa-regular fa-hand";
        }
        
        if(computerChoice === "가위") {
            computerIcon.className="fa-regular fa-hand-scissors";
        } else if(
            computerChoice === "바위") {
                computerIcon.className="fa-regular fa-hand-back-fist";
        } else {
            computerIcon.className="fa-regular fa-hand";
        }

		if (playerChoice === computerChoice) {
			result.textContent = "무승부";
		} else if (
			(playerChoice === "가위" && computerChoice === "보") ||
			(playerChoice === "바위" && computerChoice === "가위") ||
			(playerChoice === "보" && computerChoice === "바위")
		) {
			result.textContent = "플레이어 승리";
			playerWinNum++;
			playerWinCount.textContent = `${playerWinNum}`;
		} else {
			result.textContent = "컴퓨터 승리";
			computerWinNum++;
			computerWinCount.textContent = `${computerWinNum}`;
		}

		gameCount--;
		count.textContent = `남은 횟수: ${gameCount}`;
		if (gameCount === 0) {
			if (playerWinNum > computerWinNum) {
				result.textContent = "플레이어 최종 승리";
			} else if (playerWinNum < computerWinNum) {
				result.textContent = "컴퓨터 최종 승리";
			} else {
				result.textContent = "무승부";
			}
			gameBtns.forEach((btn) => {
				btn.disabled = true;
			});
			restartBtn.classList.remove("hidden");
		}
	});
});

restartBtn.addEventListener("click", () => {
	playerWinNum = 0;
	computerWinNum = 0;
	gameCount = 10;
    playerWinCount.textContent = `${playerWinNum}`;
    computerWinCount.textContent = `${computerWinNum}`;
    count.textContent = `남은 횟수: ${gameCount}`;
    gameBtns.forEach((btn) => {
        btn.disabled = false;
    });
    restartBtn.classList.add("hidden");
    computerIcon.className="fa-solid fa-question";
    playerIcon.className="fa-solid fa-question";
    result.textContent = "";
});
