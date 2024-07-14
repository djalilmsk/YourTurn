const rollDice = document.querySelector('.dice');
const rollBtn = document.querySelector('.roll-btn');
const turnBtn = document.querySelector('.giveTurn-btn');


rollBtn.addEventListener('click', function() {
  const score = document.querySelector('.active-score');
  console.log(score);
  let dice = Math.floor(Math.random() * 6) + 1;
  switch (dice) {
    case 1:
      rollDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>'
      score.textContent = 0;
      yourTurn ();
      break;
    case 2:
      rollDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>'
      score.textContent = Number(score.textContent) + 2;
      break;
    case 3:
      rollDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>'
      score.textContent = Number(score.textContent) + 3;
      break;
    case 4:
      rollDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>'
      score.textContent = Number(score.textContent) + 4;
      break;
    case 5:
      rollDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>'
      score.textContent = Number(score.textContent) + 5;
      break;
    case 6:
      rollDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>'
      score.textContent = Number(score.textContent) + 6;
      break;
  }
});

function yourTurn() {
  for (let i = 1; i < 3; i++) {
    const player = document.querySelector('.player' + i);
    const scoreSum = document.querySelector('.player' + i + ' .score-sum');
    const currentScore = document.querySelector('.player' + i + ' .current-score');

    if (player.classList.contains('active')) {
      if (currentScore.textContent == 0) {
        scoreSum.textContent = 0;
      } else {
        scoreSum.textContent = Number(scoreSum.textContent) + Number(currentScore.textContent);
        currentScore.textContent = 0;
      }
      player.classList.remove('active');
      currentScore.classList.remove('active-score');
    } else {
      player.classList.add('active');
      currentScore.classList.add('active-score');
    }
  }
}

turnBtn.addEventListener('click' , yourTurn);

