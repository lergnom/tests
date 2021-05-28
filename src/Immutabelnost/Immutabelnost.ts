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

export type UserWithBooksType = UserType & {
    books: string[]
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


export function updateLaptop(u: UserWithLaptopType, name: string) {
    return {...u, laptop: {...u.laptop, title: name}}
}


export function moveUserInNewHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...u, address: {...u.address, house: house}}
}


export function addNewBook(u: UserWithBooksType & UserWithLaptopType, book: string) {
    return {...u, books: [...u.books, book]}
}


export function addNewBooks(u: UserWithBooksType & UserWithLaptopType, books: string[]) {
    return {...u, books: [...u.books, books[0], books[1]]}
}


export function updateBook(u: UserWithBooksType & UserWithLaptopType, book: string, upBook: string) {
    const copy = {
        ...u,
        books: u.books.map(b => b === book ? upBook : b)
    }
    return copy
}