import {Disc} from "./disc";

export class Board {
    private readonly width: number;
    private readonly height: number;
    private theBoard: Disc[][];

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;

        // call reset to initialize the board
        this.reset();
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    getDisc(column: number, row: number) {

        if(column < 0 || column >= this.width) {
            throw RangeError("Invalid column value: " + column);
        }

        if(row < 0 || row >= this.height) {
            throw RangeError("Invalid row value: " + row);
        }

        let disc = this.theBoard[column][row];
        return disc;
    }

    getDiscColor(column: number, row: number) {

        if(column < 0 || column >= this.width) {
            throw RangeError("Invalid column value: " + column);
        }

        if(row < 0 || row >= this.height) {
            throw RangeError("Invalid row value: " + row);
        }

        let disc = this.theBoard[column][row];
        if(disc) {
            return disc.getColor();
        }
        return null;
    }

    getDiscPlayerId(column: number, row: number) {

        if(column < 0 || column >= this.width) {
            throw RangeError("Invalid column value: " + column);
        }

        if(row < 0 || row >= this.height) {
            throw RangeError("Invalid row value: " + row);
        }

        let disc = this.theBoard[column][row];
        if(disc) {
            return disc.getPlayerId();
        }
        return null;
    }

    reset() {
        // initialize board with nulls
        this.theBoard = new Array<Array<Disc>>();
        for(let i = 0; i < this.width; i++){
            this.theBoard[i] = new Array<Disc>();
            for(let j = 0; j < this.height; j++){
                this.theBoard[i][j] = null;
            }
        }
    }

    // places disc into the specified column
    // returns true if disc can be placed, false otherwise
    placeDisc(disc: Disc, column: number) {

        if(column < 0 || column >= this.width) {
            return false;
        }

        let placed = false;
        for(let j = 0; j < this.height; j++) {
            if(this.theBoard[column][j] == null) {
                this.theBoard[column][j] = disc;
                placed = true;
                break;
            }
        }
        return placed;
    }

    // prints the board out to the console

    log() {
        console.log("");

        for(let j = this.height-1; j >=0; j--){
            let row = j.toString() + " ";
            for(let i = 0; i < this.width; i++){
                let char = ".";
                let disc = this.theBoard[i][j];
                if(disc != null){
                    char = disc.getColor().charAt(0);
                }
                row += char + " ";
            }
            console.log(row)
        }

        let bottomRow = "  ";
        for(let i = 0 ; i < this.width; i++)
        {
            bottomRow += i.toString() + " ";
        }
        console.log(bottomRow)
    }

}