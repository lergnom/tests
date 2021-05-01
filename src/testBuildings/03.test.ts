import {addMoneyBudjet, CityType, repairHouses, toFireStaff} from "./03";

export let city: CityType
beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                buildAt: 2012, repaired: false,
                address: {number: 100, street: {title: "White Street"}}
            },
            {
                buildAt: 2008, repaired: false,
                address: {number: 100, street: {title: "Happy Street"}}
            },
            {
                buildAt: 2020, repaired: false,
                address: {number: 101, street: {title: "Happy Street"}}
            },
        ],
        govermentBuildings: [
            {
                type: "HOSPITAL", budjet: 200000, staffCount: 1000,
                address: {number: 56, street: {title: "Central Str"}}
            },
            {
                type: "FIRE-STATION", budjet: 500000, staffCount: 1000,
                address: {number: 58, street: {title: "South Str"}}
            }
        ],
        citizensNumber: 10000000
    }
})

test ("Add budjet", ()=>{
    addMoneyBudjet(city.govermentBuildings[0], 100000)
    expect(city.govermentBuildings[0].budjet).toBe(300000)
})

test ("House to be repair", () => {
    repairHouses(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy();
})

test("Delete any staffer", () => {
    toFireStaff(city.govermentBuildings[1],500)
    expect(city.govermentBuildings[1].staffCount).toBe(500)
})