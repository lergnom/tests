export const flyBy = (lamps, drone) => {
    return  lamps.split('').map((el, i) => i < drone.length ? el = 'o' : el).join('')
}
