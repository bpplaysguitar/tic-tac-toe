document.addEventListener('DOMContentLoaded', () => {
const squares = document.querySelectorAll('.grid div')
const playerDisplay = document.querySelector('#player')
const result = document.querySelector('#result')

let currentPlayer = 'playerX'

squares.forEach(square => {
  square.addEventListener('click', clickOutcome)

})

function clickOutcome(e) {
    const squareArray = Array.from(squares)
    const index = squareArray.indexOf(e.target)
    playerDisplay.innerHTML = currentPlayer

    if(currentPlayer === 'playerX') {
      squares[index].classList.add('playerX')
      currentPlayer = 'playerO'
      playerDisplay.innerHTML = "O's turn"
    } else {
      squares[index].classList.add('playerO')
      currentPlayer = 'playerX'
      playerDisplay.innerHTML = "X's turn"
    }
  }


    //check the board for a win or lose
    function checkBoard() {
        //make const that shows all winning arrays
        const winningArrays = [
        [0, 1, 2], [0, 3, 6], [0, 4, 8], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6]
      ];
        //now take the 3 values in earch winningArray & plug them into the squares values 
        for(let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]];
            const square2 = squares[winningArrays[y][1]];
            const square3 = squares[winningArrays[y][2]];

            //now check those arrays to see if they all have the class of playerX
            if(square1.classList.contains('playerX') &&
                square2.classList.contains('playerX') &&
                square3.classList.contains('playerX')) {
                    //if they do, playerX is passed as the winner
                    document.getElementById("result").classList.remove("hidden")
                    result.innerHTML = 'X wins!'
      //remove ability to change result
            } 
            //now check to see if they all have the classname playerO
            else if (square1.classList.contains('playerO') &&
                square2.classList.contains('playerO') &&
                square3.classList.contains('playerO')) {
                    //if they do, playerO is passed as the winner
                    document.getElementById("result").classList.remove("hidden")
                    result.innerHTML = 'O wins!'
            // } else if 
            
            // (
            //   // result.innerHTML != 'O wins!' &&
            //   // result.innerHTML != 'X wins!'
            // )
                
            //     {
            //     document.getElementById("result").classList.remove("hidden")
            //         result.innerHTML = 'Draw!'
                }
          }
        }
        fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users => {
      console.log(users)
    })

squares.forEach(square => square.addEventListener('click', checkBoard))
})