import {Rover} from "../main/rover";

describe("Rover", () => {
    it("should set the initial position of the rover", () => {
        // given
        const x = 1;
        const y = 2;
        const direction = 'N';
        // when
        const rover = new Rover(x, y, direction);
        // then
        expect(rover.getPosition()).toEqual({x: 1, y: 2, direction: 'N'});
    });
})