import {Board} from "./board";
import {GameState, PlayerScore} from "./gameManager"

export interface iRules {
    getGameState(board: Board) : GameState;

}

export class ClassicRules implements iRules {

    private readonly numberToMatch: number;

    constructor(numberToMatch: number) {
        this.numberToMatch = numberToMatch;
    }

    // determines if game is over, the winner, and the score (if applicable)

    getGameState(board: Board) {
        // game is finished when a player gets 4 in a row
        
        let gameState = this.checkColumns(board);
        if(!gameState.gameIsFinished) gameState = this.checkRows(board);
        if(!gameState.gameIsFinished) gameState = this.checkRightUp(board);
        if(!gameState.gameIsFinished) gameState = this.checkRightDown(board);

        return gameState;
    }

    checkColumns(board: Board){
        let width = board.getWidth();
        let height = board.getHeight();
        
        for(let x = 0; x < width; x++) {
            for(let y = 0, n = (height-this.numberToMatch); y <= n; y++) {
                let playerId = board.getDiscPlayerId(x,y);
                if(playerId) {
                    if(playerId === board.getDiscPlayerId(x,y+1)
                        && playerId === board.getDiscPlayerId(x,y+2)
                        && playerId === board.getDiscPlayerId(x,y+3)
                    ) {
                        return new GameState(true, playerId);
                    }
                }
            }
        }
        return new GameState(false);
    }

    checkRows(board: Board) {
        let width = board.getWidth();
        let height = board.getHeight();
        
        for(let y = 0; y < height; y++) {
            for(let x = 0, n = (width-this.numberToMatch); x <= n; x++) {
                let playerId = board.getDiscPlayerId(x,y);
                if(playerId) {
                    if(playerId === board.getDiscPlayerId(x+1,y)
                        && playerId === board.getDiscPlayerId(x+2,y)
                        && playerId === board.getDiscPlayerId(x+3,y)
                    ) {
                        return new GameState(true, playerId);
                    }
                }
            }
        }
        return new GameState(false);
    }

    checkRightUp(board: Board){
        let width = board.getWidth();
        let height = board.getHeight();
        
        for(let x = 0, n = width-this.numberToMatch; x <= n; x++) {
            for(let y = 0, m = height-this.numberToMatch; y <= m; y++) {
                let playerId = board.getDiscPlayerId(x,y);
                if(playerId) {
                    if(playerId === board.getDiscPlayerId(x+1,y+1)
                        && playerId === board.getDiscPlayerId(x+2,y+2)
                        && playerId === board.getDiscPlayerId(x+3,y+3)
                    ) {
                        return new GameState(true, playerId);
                    }
                }
            }
        }
        return new GameState(false);
    }

    checkRightDown(board: Board){
        let width = board.getWidth();
        let height = board.getHeight();
        
        for(let x = 0, n = width-this.numberToMatch; x <= n; x++) {
            for(let y = this.numberToMatch-1; y < height; y++) {
                let playerId = board.getDiscPlayerId(x,y);
                if(playerId) {
                    if(playerId === board.getDiscPlayerId(x+1,y-1)
                        && playerId === board.getDiscPlayerId(x+2,y-2)
                        && playerId === board.getDiscPlayerId(x+3,y-3)
                    ) {
                        return new GameState(true, playerId);
                    }
                }
            }
        }
        return new GameState(false);
    }

}

export class CollegiateRules implements iRules {
    getGameState(board: Board) {
        // game is finished when board is full

        return new GameState(false, -1);
    }

}
