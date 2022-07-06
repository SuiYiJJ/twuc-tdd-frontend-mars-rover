export class Area {
    width;
    length;

    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    getAreaSize() {
        return {width: this.width, length: this.length};
    }
}