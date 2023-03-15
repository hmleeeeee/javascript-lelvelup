const str = 'Hello world!'

console.log(str.replace('world', 'HYOKI')) //Hello HYOKI!
console.log(str.replace(' world!', '')) //Hello (문자 생략)

// replace -> 첫번째 인수에 해당하는 문자를 찾아서 두번째 인수에 해당하는 내용으로 교체