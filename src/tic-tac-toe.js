class TicTacToe {
    constructor() {
        this.mySymbol = "x";
        this.opponentSymbol = "o";
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        this.myTurn = true;
    }

    getCurrentPlayerSymbol() {
        return   (this.myTurn)?  this.mySymbol: this.opponentSymbol;
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
        }
    }

    isFinished() {
    }

    getWinner() {
    }

    noMoreTurns() {
    }

    isDraw() {
    }

    getFieldValue(x, y) {
        return this.field[x][y]
    }
}


module.exports = TicTacToe;
