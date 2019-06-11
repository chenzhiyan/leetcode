/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "M":
                sum += 1000;
                break;
            case "D":
                sum += 500;
                break;
            case "C":
                if (i + 1 < s.length && s[i + 1] == "D") {
                    sum += 400;
                    i++;
                } else if (i + 1 < s.length && s[i + 1] == "M") {
                    sum += 900;
                    i++;
                } else {
                    sum += 100;
                }
                break;
            case "L":
                sum += 50;
                break;
            case "X":
                if (i + 1 < s.length && s[i + 1] == "L") {
                    sum += 40;
                    i++;
                } else if (i + 1 < s.length && s[i + 1] == "C") {
                    sum += 90;
                    i++;
                } else {
                    sum += 10;
                }
                break;
            case "V":
                sum += 5;
                break;
            case "I":
                if (i + 1 < s.length && s[i + 1] == "V") {
                    sum += 4;
                    i++;
                } else if (i + 1 < s.length && s[i + 1] == "X") {
                    sum += 9;
                    i++;
                } else {
                    sum += 1;
                }
                break;

        }

    }
    return sum;
};
/**
* @param {string} s
* @return {number}
*/
var romanToInt2 = function (s) {
    let sum =0;
    let m = new Map();
    m.set("I", 1);
    m.set("V", 5);
    m.set("X", 10);
    m.set("L", 50);
    m.set("C", 100);
    m.set("D", 500);
    m.set("M", 1000);

    m.set("IV", 4);
    m.set("IX", 9);
    m.set("XL", 40);
    m.set("XC", 90);
    m.set("CD", 400);
    m.set("CM", 900);
    for (let i = 0; i < s.length;) {
        let w = s.substr(i, 2);
        if (m.get(w)) {
            sum += m.get(w);
            i += 2;
        }else{
            w = s.substr(i, 1);
            sum += m.get(w);
            i++;
        }

    }

    return sum;
};
console.log(romanToInt2("DCXXI"))