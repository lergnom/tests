
type SteetNameType = {
    title: string
}

type AddressType = {
    number: number
    street: SteetNameType
}

type HomeBuildingType = {
    buildAt: number
    repaired: boolean
    address: AddressType
}
type GovermentBuildingType = {
    type: string
    budjet: number
    staffCount: number
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HomeBuildingType>
    govermentBuildings: Array<GovermentBuildingType>
    citizensNumber: number

}

export function addMoneyBudjet(bulding: GovermentBuildingType, sum: number) {
    bulding.budjet+=sum;
}

export const repairHouses = (homeBuildingType: HomeBuildingType) => {
    homeBuildingType.repaired = true
}

export const toFireStaff = (govermentBuildingType: GovermentBuildingType, number: number) => {
    govermentBuildingType.staffCount -=number
}