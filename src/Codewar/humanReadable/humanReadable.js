export const humanReadable = (seconds) => {
    let hh = '00'
    let mm = '00'
    let ss = '00'
    let res


    if (seconds > 3600) {
        hh = Math.floor(seconds / 3600);
        res = seconds - (hh * 3600)
        if (hh <= 9) {
            hh = '0' + hh
        }
        if (60 < res < 3600) {
            mm = Math.floor(res / 60)
            res = res - (mm * 60)
        }
        if (mm <= 9) {
            mm = '0' + mm
        }

        if (res < 60) {
            ss = res
        }
        if (ss <= 9) {
            ss = '0' + ss
        }
        return `${hh}:${mm}:${ss}`

    }


    if (60 < seconds <= 3600) {
        mm = Math.floor(seconds / 60);
        if (mm === 60) {
            return `01:00:00`
        }
        res = seconds - (mm * 60)
        if (mm <= 9) {
            mm = '0' + mm
        }
        if (res < 60) {
            ss = res
        }
        if (ss <= 9) {
            ss = '0' + ss
        }

        if (res < 60) {
            ss = res
        }
        if (ss <= 9) {
            ss = '0' + ss
        }
        return `${hh}:${mm}:${ss}`
    }

    if (seconds < 60) {
        ss = seconds
        if (ss <= 9) {
            ss = '0' + ss
        }
    }


    return `${hh}:${mm}:${ss}`
}


// function humanReadable(seconds) {
//     return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
//         v = Math.floor(v).toString();
//         return v.length == 1 ? '0' + v : v;
//     }).join(':');
// }
//
//
//
// function humanReadable(seconds) {
//     var pad = function(x) { return (x < 10) ? "0"+x : x; }
//     return pad(parseInt(seconds / (60*60))) + ":" +
//         pad(parseInt(seconds / 60 % 60)) + ":" +
//         pad(seconds % 60)
// }
//

console.log(humanReadable(86399))