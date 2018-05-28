
import {Board} from "./board";
import {Disc} from "./disc";
import {Player} from "./player";
import {iRules, ClassicRules, CollegiateRules} from "./rules";

// Manages player turns, checks for end of game, etc.
class GameManager {
    private players: Player[];
    private board: Board;
    private rules: iRules

    constructor() {
        // standard board size is 7 units wide, 6 units high
        this.board = new Board(7,6);

        // 2 players, for now
        this.players = [
            new Player(1, "red")
            , new Player(2, "yellow")
        ];

        //
        this.rules = new ClassicRules(4);
    }

    startNewGame() {
        this.board.reset();
        this.startGameLoop();
    }

    startGameLoop() {

        let gameState = null;
        let gameFinished = false;
        //start loop
        while(!gameFinished){
            // go to next player 

            // wait for player input

            gameState = this.rules.getGameState(this.board);

            gameFinished = gameState.gameIsFinished;
        }

        // game is finished, show winner
        //
    }
}

export class GameState {
    gameIsFinished: boolean;
    winningPlayerId: number;
    score: PlayerScore[]

    constructor(isFinished: boolean, winningPlayerId = -1, score = null) {
        this.gameIsFinished = isFinished;
        this.winningPlayerId = winningPlayerId;
        this.score = score;
    }
}

export class PlayerScore{
    playerId: number;
    score: number;
}