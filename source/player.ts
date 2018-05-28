import {Disc} from "./disc";

export class Player {

    private id: number;
    private disc: Disc;

    constructor(id: number, color: string) {
        this.id = id;
        this.disc = new Disc(color, id);

    }

    getId() {
        return this.id;
    }

    getDisc() {
        return this.disc;
    }

}