import {Area} from "../main/area";

describe("area", () => {
    it("should set height and length of area", () => {
        //given
        const height = 5;
        const length = 5;
        //when
        const area = new Area(height, length);
        //then
        expect(area.getAreaSize()).toEqual({width: 5, length: 5});
    });
})