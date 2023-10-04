export class Player {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /////////////
    // Actions //
    /////////////

    move7() {
        this.x--;
        this.y--;
    }

    move8() {
        this.y--;
    }

    move9() {
        this.x++;
        this.y--;
    }

    move4() {
        this.x--;
    }

    move5() { }

    move6() {
        this.x++;
    }

    move1() {
        this.x--;
        this.y++;
    }

    move2() {
        this.y++;
    }

    move3() {
        this.x++;
        this.y++;
    }
 
}