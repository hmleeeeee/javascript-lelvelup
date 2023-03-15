const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2) // toFixed() -> 소수점 몇번째 자리까지 유지할지
console.log(str)
console.log(typeof str)

const integer = parseInt(str) // 정수 반환
const float = parseFloat(str) // 소수점 유지하면서 숫자 반환
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float)