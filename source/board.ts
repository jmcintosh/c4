import {Disc} from "./disc";

export class Board {
    private _width: number;
    private _height: number;
    private _theBoard: Disc[][];

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;

        // call reset to initialize the board
        this.reset();
    }

    reset() {
        // initialize board with nulls
        this._theBoard = new Array<Array<Disc>>();
        for(let i = 0; i < this._width; i++){
            this._theBoard[i] = new Array<Disc>();
            for(let j = 0; j < this._height; j++){
                this._theBoard[i][j] = null;
            }
        }
    }

    placeDisc(disc: Disc, column: number) {
        if(column < 0 || column >= this._width) {
            throw new RangeError(
                "Column must be greater than equal to 0 or less than " 
                + this._width
            );
        }

        for(let j = 0; j <this._height; j++) {
            if(this._theBoard[column][j] == null) {
                this._theBoard[column][j] = disc;
                break;
            }
        }
    }

    log() {
        for(let j = this._height-1; j >=0; j--){
            let row = j.toString() + " ";
            for(let i = 0; i < this._width; i++){
                let char = ".";
                let disc = this._theBoard[i][j];
                if(disc != null){
                    char = disc.getColor().charAt(0);
                }
                row += char + " ";
            }
            console.log(row)
        }
    }

}