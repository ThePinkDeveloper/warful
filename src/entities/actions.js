export class Actions {

    constructor(key, creature) {
        this.key = key;  
        this.creature = creature;
    }

    move7() {
        this.creature.x--;
        this.creature.y--;
    }

    move8() {
        this.creature.y--;
    }

    move9() {
        this.creature.x++;
        this.creature.y--;
    }

    move4() {
        this.creature.x--;
    }

    move5() { }

    move6() {
        this.creature.x++;
    }

    move1() {
        this.creature.x--;
        this.creature.y++;
    }

    move2() {
        this.creature.y++;
    }

    move3() {
        this.creature.x++;
        this.creature.y++;
    }
}