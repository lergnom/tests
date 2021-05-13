import {solution} from "./task";

test.skip("shouldbeRomanNumber", () => {
    expect(solution(1)).toBe('I')
    expect(solution(2)).toBe('II')
    expect(solution(3)).toBe('III')
    expect(solution(4)).toBe('IV')
    expect(solution(5)).toBe('V')
    expect(solution(6)).toBe('VI')
    expect(solution(7)).toBe('VII')
    expect(solution(8)).toBe('VIII')
    expect(solution(9)).toBe('IX')
    expect(solution(10)).toBe('X')
    expect(solution(20)).toBe('XX')
    expect(solution(30)).toBe('XXX')
    expect(solution(40)).toBe('XL')
    expect(solution(50)).toBe('L')
    expect(solution(60)).toBe('LX')
    expect(solution(70)).toBe('LXX')
    expect(solution(80)).toBe('LXXX')
    expect(solution(90)).toBe('XC')
    expect(solution(100)).toBe('C')
    expect(solution(200)).toBe('CC')
    expect(solution(300)).toBe('CCC')
    expect(solution(400)).toBe('CD')
    expect(solution(500)).toBe('D')
    expect(solution(600)).toBe('DC')
    expect(solution(700)).toBe('DCC')
    expect(solution(800)).toBe('DCC')
    expect(solution(900)).toBe('CM')
    expect(solution(1000)).toBe('M')
    expect(solution(2000)).toBe('MM')
    expect(solution(3000)).toBe('MMM')


})


