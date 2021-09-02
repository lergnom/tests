import {highAndLow} from "./highAndLow";

test('hilo', () => {
    expect(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")).toBe('42 -9');
})