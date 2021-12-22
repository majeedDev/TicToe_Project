console.log('Week 1 - Day 2')

console.log('Tuwaiq Academy   JS')

$(document).ready(function () {
    const cells = $('.cell')
    const turnSpan = $('#turn');
    const winnerSpan = $('#winner');
    const restart = $('#restart');
    const parWinner = $('#parWinner');
    const parTurn = $('#parTurn');
    let turn = 'X';
    const O = 'O'
    const X= 'X'
    
    // const WINNING_COMBINATIONS = [
    //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
    //   ]
    parWinner.hide();
    restart.hide();
    cells.click(cellClicked);
    restart.click(restartTheGame);
    function cellClicked() {
       if ($(this).text()==='') {
        if (turn === X) {
            $(this).text(X);
            turnSpan.text(O)
            checkWinner(X);
            turn = O
        }else{
            $(this).text(O);
            turnSpan.text(X)
            checkWinner(O);
            turn = X
        }
    }else{
        $(this).css('background-color', 'red');
        setTimeout(()=>{
            $(this).css('background-color', '#39A388');
        },200)
    }
  }

  function restartTheGame() {
      location.reload();
  }
   //     [0, 1, 2],
    //     [3, 4, 5],
    //     [6, 7, 8],
    //     [0, 3, 6],
    //     [1, 4, 7],
    //     [2, 5, 8],
    //     [0, 4, 8],
    //     [2, 4, 6]
  function checkWinner(currentPlayer){
      //Horizintal
      if ($(cells[0]).text() === $(cells[1]).text() &&
       $(cells[1]).text() === $(cells[2]).text() &&
        $(cells[0]).text() !== ''
        ) 
        {
        PlayerWin(currentPlayer)
        } 
        else if( $(cells[3]).text() === $(cells[4]).text() &&
         $(cells[4]).text() === $(cells[5]).text() &&
          $(cells[3]).text() !== ''
          )
          {
            
        PlayerWin(currentPlayer)
        }
      else if( $(cells[6]).text() === $(cells[7]).text() &&
       $(cells[7]).text() === $(cells[8]).text() &&
        $(cells[6]).text() !== ''
        )
        {
            
        PlayerWin(currentPlayer)
      }
      //Vertical
      else if( $(cells[0]).text() === $(cells[3]).text() &&
       $(cells[3]).text() === $(cells[6]).text() &&
        $(cells[0]).text() !== ''
        )
        {
        PlayerWin(currentPlayer)
      }
      else if( $(cells[1]).text() === $(cells[4]).text() &&
       $(cells[4]).text() === $(cells[7]).text() &&
        $(cells[1]).text() !== ''
        )
        {
      
        PlayerWin(currentPlayer)
      }
      else if( $(cells[2]).text() === $(cells[5]).text() &&
       $(cells[5]).text() === $(cells[8]).text() && 
       $(cells[2]).text() !== ''
       )
       {
      
        PlayerWin(currentPlayer)
      }
      //Diagonal
      else if( $(cells[0]).text() === $(cells[4]).text() &&
       $(cells[4]).text() === $(cells[8]).text() &&
        $(cells[0]).text() !== ''
        )
        {
        PlayerWin(currentPlayer)
      }
      else if( $(cells[2]).text() === $(cells[4]).text() &&
       $(cells[4]).text() === $(cells[6]).text() &&
        $(cells[2]).text() !== ''
        )
        {
        
        PlayerWin(currentPlayer)
      }
  }
  function PlayerWin(winner) {
    winnerSpan.text(winner);  
    parWinner.show(1000);
    parTurn.hide(1000);
    restart.show(2000)
  }
})