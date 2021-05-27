import {log} from "util";

export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(u: UserType, power: number) {
    //masthave
    return {...u, hair: u.hair - power}
    //
    // const copyUser = {...u}
    // copyUser.hair = u.hair - power
    // return  copyUser
}

export function setNewAddress(u: UserWithLaptopType, city: string) {
    // return {...u, address: {city: city}}

    const copy = {
        ...u,
        address: {
            ...u.address, city: city
        }
    }

    // copy.address = {
    //     ...u.address,
    //     city: city
    // }

    return copy

}