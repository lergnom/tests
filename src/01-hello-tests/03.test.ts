import {findAllByTitle} from "@testing-library/react";
import {ManType} from "./03";

let props: ManType
beforeEach(() => {
    props = {
        name: "Anton",
        age: 36,
        lessons: [
            {title: '1'}, {title: '2'}
        ],
        address: {
            street: {title: 'Novaya ulica'}
        }
    }
})

test("props object destructirization", () => {

    const {name, age} = props
    const {title} = props.address.street
    expect(age).toBe(36)
    expect(name).toBe("Anton")
    expect(title).toBe("Novaya ulica")
})

