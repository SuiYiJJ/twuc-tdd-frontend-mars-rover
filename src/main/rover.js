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

    turnLeft() {
        this.turnDirectionClockwise(false);
    }

    turnRight() {
        this.turnDirectionClockwise(true);
    }
    turnDirectionClockwise(isClockWise){
        const clockWise = ['N', 'E', 'S', 'W'];
        const indexOfClockWise = clockWise.indexOf(this.direction);
        if(isClockWise){
            this.direction = this.direction === 'W' ? 'N' : clockWise[indexOfClockWise + 1];
        }else{
            this.direction = this.direction === 'N' ? 'W' : clockWise[indexOfClockWise - 1];
        }
    }
}