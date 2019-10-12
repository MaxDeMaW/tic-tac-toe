class TicTacToe {
    constructor() {
        this.mySymbol = "x";
        this.opponentSymbol = "o";
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        this.numberTurn = 1;

        this.myTurn = true;
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
    }

    getWinner() {
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
