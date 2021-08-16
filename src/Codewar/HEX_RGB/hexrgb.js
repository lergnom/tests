// def hex_string_to_RGB(hex_string):
// r, g, b = [int(hex_string[i:i + 2], 16) for i in range(1, len(hex_string), 2)]
// return {'r': r, 'g': g, 'b': b}

// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:
//
//     Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")
//
// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

// const hexrgb = (string) => {
//     let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(string);
//     return {'r': parseInt(result[1], 16), 'g': parseInt(result[2], 16), 'b': parseInt(result[3], 16)}
// }
//
// console.log(hexrgb('#FF9933'))

const hhex = (string) => {
    return {
        'r': parseInt(string.slice(1, 3), 16),
        'g': parseInt(string.slice(3, 5), 16),
        'b': parseInt(string.slice(5, 7), 16)
    }

}

console.log((hhex("#FF9933")))
//
// r: parseInt(h.slice(1,3), 16),
//     g: parseInt(h.slice(3,5), 16),
//     b: parseInt(h.slice(5,7), 16)

//
// function hexToRgb(hex) {
//     var bigint = parseInt(hex, 16);
//     var r = (bigint >> 16) & 255;
//     var g = (bigint >> 8) & 255;
//     var b = bigint & 255;
//
//     return r + "," + g + "," + b;
// }
// Редактировать: 3/28/2017 Вот еще один подход это кажется еще более быстрым
//
// function hexToRgbNew(hex) {
//     var arrBuff = new ArrayBuffer(4);
//     var vw = new DataView(arrBuff);
//     vw.setUint32(0,parseInt(hex, 16),false);
//     var arrByte = new Uint8Array(arrBuff);
//
//     return arrByte[1] + "," + arrByte[2] + "," + arrByte[3];
// }