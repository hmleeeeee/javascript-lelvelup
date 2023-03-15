const str = 'thesecon@gmail.com'

console.log(str.match(/.+(?=@)/)[0])  //정규 표현식(RegExp) 이용하여 도메인 제외한 ID만 추출

//match -> 특정한 문자 데이터에서 일치 시켜서 배열 데이터로 반환