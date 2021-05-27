import {makeHairStyle, setNewAddress, UserType, UserWithLaptopType} from "./Immutabelnost";

test('referense type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        }
    }


    const cutUser = makeHairStyle(user, 10)
    expect(cutUser.hair).toBe(22)
    expect(cutUser.address).toBe(user.address)

})

test('change adress test', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'Dell'}
    }


    const otherUser = setNewAddress(user, 'Apatity')

    expect(otherUser).not.toBe(user)
    expect(otherUser.address).not.toBe(user.address)
    expect(otherUser.address.city).toBe('Apatity')
    expect(otherUser.laptop).toBe(user.laptop)
})

