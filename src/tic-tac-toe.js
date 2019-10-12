class TicTacToe {
    constructor() {
        //symbol of player 1
        this.mySymbol = "x";
        
        //symbol of opponent
        this.opponentSymbol = "o";

        //create empty feild for game
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        //counter of turns
        this.numberTurn = 1;

        //is turn 1 player?
        this.myTurn = true;

        this.winCombinations = [
            //vertical combinations
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],

            //horizontal combinations
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],

            //diagonal combinations
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ]
    }

    getCurrentPlayerSymbol() {
        return (this.myTurn) ? this.mySymbol : this.opponentSymbol;
    }


    nextTurn(x, y) {
        //if place isn't empty
        if (this.field[x][y] != null) {
            //do nothing
        }
        //if place empty
        else {
            //set symbol depending on the player
            this.field[x][y] = (this.myTurn == true) ? this.mySymbol : this.opponentSymbol;

            //activate pass turn triger (next player will be not this)
            this.myTurn = !this.myTurn;

            //add counter of turn number
            this.numberTurn++;
        }
    }

    isFinished() {
        //if we haven't turns and have winner, game is finished
        return  (this.noMoreTurns() || this.getWinner())? true : false;
    }

    getWinner() {
        //check all combinations
         for (var i = 0; i < this.winCombinations.length; i++) {

            //for quick access get combinations
             var placeFromTestOfWin = this.winCombinations[i];

             //get winning places
             var place1 = placeFromTestOfWin[0];
             var place2 = placeFromTestOfWin[1];
             var place3 = placeFromTestOfWin[2];

             //check places to win
             if (
                this.field[place1[0]][place1[1]] == this.field[place2[0]][place2[1]] && 
                this.field[place1[0]][place1[1]] == this.field[place3[0]][place3[1]] &&
                this.field[place1[0]][place1[1]] !== null
                ) {
                 return this.field[place1[0]][place1[1]]
             }
         }
         return null
    }

    noMoreTurns() {
        //if count of turns more than 9 - game is finishing
        if (this.numberTurn > 9) {
            return true
        }
        else {
            return false
        };
    }

    isDraw() {
    }

    getFieldValue(x, y) {
        //what symbol is on this place
        return this.field[x][y]
    }
}


module.exports = TicTacToe;
