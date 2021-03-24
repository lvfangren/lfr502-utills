/**
 *
 * 判断ip地址是否合法有效
 * @param {*} ips
 * @returns
 */
function isIP(ips) {
    var ipArr = ips.split('.');
    if (ipArr.length !== 4) {
        return false;
    }
    for (var index = 0; index < ipArr.length; index++) {
        // 点分十进制，只考虑十进制问题
        if (ipArr[index].length > 3) {
            return false;
        }
        var items = +ipArr[index];
        // 过滤带字符串
        if (isNaN(items)) {
            return false;
        }
        if (items < 0 || items > 255) {
            return false;
        }
    }
    return true;
    // methods 2
    // return /\d(.)/.test(ips)
}
// case 1: 
// 127.0.0.1
// case 2: 
// 255.255.255.255
// case 3: 
// 0.0.0.0
console.log('0127.0.0.1', isIP('0127.0.0.1'));
console.log('255.255.255.255', isIP('255.255.255.255'));
console.log('-2.21.2121.2', isIP('-2.21.2121.2'));
console.log('0x127.0.0.1', isIP('0x127.0.0.1'));
console.log('1cs27.0cs.0.1', isIP('1cs27.0cs.0.1'));
console.log('111.0.2.1', isIP('111.0.2.1'));
console.log('0.0.0.0', isIP('0.0.0.0'));
