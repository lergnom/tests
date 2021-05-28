import {
    addNewBook,
    addNewBooks, getNewJob,
    makeHairStyle, moveUserInNewHouse, removeBook,
    setNewAddress, updateBook,
    updateLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./Immutabelnost";

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

test('upgrade laptop to Macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'Dell'}
    }


    const otherUser = updateLaptop(user, 'Mac')

    expect(otherUser).not.toBe(user)
    expect(otherUser.address).toBe(user.address)
    expect(otherUser.laptop.title).toBe('Mac')
})

test('usage books array', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'Dell'},
        books: ['NorthBear', 'Pinokio', 'REACT']
    }


    const otherUser = moveUserInNewHouse(user, 15)

    expect(otherUser).not.toBe(user)
    expect(otherUser.address).not.toBe(user.address)
    expect(otherUser.books).toBe(user.books)
    expect(otherUser.laptop.title).toBe('Dell')
    expect(otherUser.address.house).toBe(15)

})


test('add new book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'Dell'},
        books: ['NorthBear', 'Pinokio', 'REACT']
    }


    const otherUser = addNewBook(user, 'ts')

    expect(otherUser).not.toBe(user)
    expect(otherUser.laptop.title).toBe('Dell')
    expect(otherUser.address).toBe(user.address)
    expect(otherUser.books).not.toBe(user.books)
    expect(otherUser.books[3]).toBe('ts')


})

test('add new books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'Dell'},
        books: ['NorthBear', 'Pinokio', 'REACT']
    }


    const otherUser = addNewBooks(user, ['ts', 'React'])

    expect(otherUser).not.toBe(user)
    expect(otherUser.laptop.title).toBe('Dell')
    expect(otherUser.address).toBe(user.address)
    expect(otherUser.books).not.toBe(user.books)
    expect(otherUser.books[3]).toBe('ts')
    expect(otherUser.books[4]).toBe('React')


})


test('update book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'Dell'},
        books: ['NorthBear', 'Pinokio', 'REACT']
    }


    const otherUser = updateBook(user, 'REACT', 'Redux')

    expect(otherUser).not.toBe(user)
    expect(otherUser.laptop.title).toBe('Dell')
    expect(otherUser.address).toBe(user.address)
    expect(otherUser.books).not.toBe(user.books)
    expect(otherUser.books[2]).toBe('Redux')


})

test('remove book Pinokio', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'Dell'},
        books: ['NorthBear', 'Pinokio', 'REACT']
    }


    const otherUser = removeBook(user, 'Pinokio')

    expect(otherUser).not.toBe(user)
    expect(otherUser.laptop.title).toBe('Dell')
    expect(otherUser.address).toBe(user.address)
    expect(otherUser.books).not.toBe(user.books)
    expect(otherUser.books.length).toBe(2)

})


test('remove book Pinokio', () => {
    let user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {title: 'Dell'},
        books: ['NorthBear', 'Pinokio', 'REACT'],
        company: [{id: 1, title: "KSC"},
            {id: 2, title: 'OOO'}]
    }


    const otherUser = getNewJob(user, 'Google')

    expect(otherUser).not.toBe(user)
    expect(otherUser.laptop.title).toBe('Dell')
    expect(otherUser.address).toBe(user.address)
    expect(otherUser.books).toBe(user.books)
    expect(otherUser.company.length).toBe(3)
    expect(otherUser.company[2].id).toBe(3)

})