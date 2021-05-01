import {StudentType} from '../01-hello-tests/02.test'


export function makeStudentActive(student: StudentType) {
    student.isActive = true

}

// export function doesStudentLiveIn (s:StudentType,c:string) {
//     s.country = "minsk"
// }

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.country === cityName

}