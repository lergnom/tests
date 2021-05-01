import {doesStudentLiveIn, makeStudentActive} from "./02";

export type StudentType = {
    id: number
    name: string
    isActive: boolean,
    country: string
}

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Anton",
        isActive: false,
        country: "Minsk"
    }
})


test("student isActive", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})

test("student lives in Country", () => {
    let result1 = doesStudentLiveIn(student, "Moskow");
    let result2 = doesStudentLiveIn(student, "Minsk");

    expect(result1).toBe(false  )
    expect(result2).toBe(true)
})