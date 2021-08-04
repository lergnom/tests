import {flyBy} from "./flyBy";

test('FlyBy test', () => {
    expect(flyBy('xxxxxx', '====T')).toBe('ooooox')
    expect(flyBy('xxxxxxxxx', '==T')).toBe('oooxxxxxx')
    expect(flyBy('xxxxxxxxxxxxxxx', '=========T')).toBe('ooooooooooxxxxx')
})

