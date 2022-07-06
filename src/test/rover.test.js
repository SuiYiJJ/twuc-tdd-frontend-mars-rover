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

    it.each([
        {x_initial: 1, y_initial: 2, direction: 'N', x_final: 1, y_final: 3},
        {x_initial: 1, y_initial: 2, direction: 'E', x_final: 2, y_final: 2},
        {x_initial: 1, y_initial: 2, direction: 'S', x_final: 1, y_final: 1},
        {x_initial: 1, y_initial: 2, direction: 'W', x_final: 0, y_final: 2},
    ])
    ('should move forward when direction is $direction', ({x_initial, y_initial, direction, x_final, y_final}) => {
        // given
        const rover = new Rover(x_initial, y_initial, direction);
        // when
        rover.moveForward();
        // then
        expect(rover.getPosition()).toEqual({x: x_final, y: y_final, direction: direction});
    });

    it('should move by command', () => {
        // given
        const rover = new Rover(1, 2, 'N');
        const command = 'LMLMLMLMM'
        // when
        rover.moveByCommand(command);
        // then
        expect(rover.getPosition()).toEqual({x: 1, y: 3, direction: 'N'});
    });
})