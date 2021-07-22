import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExamples = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA

    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a : {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS SECRET ")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('helps to react memo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Anton", "Valera", "Dimych", "Masha"])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }


    const newArr = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)

    }, [users])
    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>add user
        </button>
        {counter}
        <Users users={newArr}/>
    </>

}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback ')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }

    const memoizedAddBook = useMemo(() => (addBook), [books])


    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>

        {counter}
        <Book addBook={memoizedAddBook}/>
    </>

}


const BooksSecret = (props: { addBook: () => void }) => {
    console.log("BOOKS SECRET ")
    return <div>
        <button onClick={props.addBook}>add book
        </button>
    </div>
}

const Book = React.memo(BooksSecret)