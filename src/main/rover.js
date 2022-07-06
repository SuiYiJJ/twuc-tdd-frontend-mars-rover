export class Rover {
    x;
    y;
    direction;

    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    getPosition() {
        return {x: this.x, y: this.y, direction: this.direction};
    }
}