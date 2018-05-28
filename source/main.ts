// <reference path="./types/socket.io-client.d.ts"/>
import {Board} from "./board";
import {Disc} from "./disc"

// var hwDiv = document.createElement("div");
// document.body.appendChild(hwDiv);
// hwDiv.innerText = "Hello World"

// var butt = document.createElement("button");
// butt.innerText = "click it"
// document.body.appendChild(butt);

// var fullWin = document.createElement("div");
// fullWin.id = "FullWindow";
// fullWin.classList.add("hidden");
// document.body.appendChild(fullWin);

// fullWin.onclick = function hide() {
//     fullWin.classList.add("hidden");
// }

// butt.onclick = function show() {
//     console.log("butt clicked");
//     fullWin.classList.remove("hidden");
// }

let board = new Board(7,6);

let redDisc1 = new Disc("red", 1)
let yellowDisc1 = new Disc("yellow", 2);

board.placeDisc(redDisc1,0);
board.placeDisc(yellowDisc1,0);
board.placeDisc(redDisc1,0);
board.placeDisc(yellowDisc1,0);
board.placeDisc(redDisc1,0);
console.log(board.placeDisc(yellowDisc1,0));
console.log(board.placeDisc(redDisc1,0));
console.log(board.placeDisc(yellowDisc1,0));
board.log();

board.placeDisc(redDisc1,1);
board.log();
console.log(board.placeDisc(redDisc1,6));
console.log(board.placeDisc(redDisc1,7));