export function sum(a: number, b: number) {
    return a + b
}

export function sub(a: number, b: number) {
    return a - b
}


export function mult(a: number, b: number) {
    return a * b
}


export function div(a: number, b: number) {
    return a / b
}

export type ActionType = {
    type: 'sum' | 'mult' | 'div' | 'sub'
}

export function calc(a: number, b: number, action: ActionType) {
    switch (action.type) {
        case 'sum':
            return a + b
        case "div":
            return a / b
        case "mult":
            return a * b
        case "sub":
            return a - b
        default:
            return "error of type action"
    }

}

type StudentType = {
    name: string
    age: number
    isMar: boolean
    friends: Array<string>
}


export function getCopyStudent(student: StudentType) {
    return {...student}
}
