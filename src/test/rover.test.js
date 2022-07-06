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
    it.each(
        [
            {initial: 'N', final: 'W'},
            {initial: 'E', final: 'N'},
            {initial: 'W', final: 'S'},
            {initial: 'S', final: 'E'},
        ]
    )("should turn left when direction is $initial", ({initial, final}) => {
        // given
        const rover = new Rover(1, 2, initial);
        // when
        rover.turnLeft();
        // then
        expect(rover.getPosition()).toEqual({x: 1, y: 2, direction: final});
    })

    it.each(
        [
            {initial: 'N', final: 'E'},
            {initial: 'E', final: 'S'},
            {initial: 'W', final: 'N'},
            {initial: 'S', final: 'W'},
        ]
    )("should turn right when direction is $initial", ({initial, final}) => {
        // given
        const rover = new Rover(1, 2, initial);
        // when
        rover.turnRight();
        // then
        expect(rover.getPosition()).toEqual({x: 1, y: 2, direction: final});
    })
})