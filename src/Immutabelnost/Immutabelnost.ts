export type UserType = {
    name: string
    hair: number
    address: { title: string }
}

export function makeHairStyle(u: UserType, power: number) {
    //masthave
    return {...u, hair: u.hair - power}
    //
    // const copyUser = {...u}
    // copyUser.hair = u.hair - power
    // return  copyUser
}

