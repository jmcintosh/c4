export class Disc {
    private readonly color: string;
    private readonly playerId: number;

    constructor(color: string, playerId: number) {
        this.color = color;
        this.playerId = playerId;
    }

    getColor() {
        return this.color;
    }
    
    getPlayerId() {
        return this.playerId;
    }
}