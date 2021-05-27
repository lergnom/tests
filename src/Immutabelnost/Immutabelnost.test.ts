import {makeHairStyle, UserType} from "./Immutabelnost";

test('referense type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {title: 'Minsk'}
    }


    const cutUser = makeHairStyle(user, 10)
    expect(cutUser.hair).toBe(22)

})

