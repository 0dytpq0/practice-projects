//js가 제공하는 Array 클래스를 좀 더 간결하게 사용하기 위해 만듦 = Array는 클래스이므로 다음처럼 new 연산자로 만들어야한다.
// ex) const array = new Array 또는 간단히 []
// new Array(아이템 개수) => [undefined,undefined, ...] -> map 사용시 런타임 오류가 떠서 fill을 쓴다.(fill을 쓰면 런타임 오류가 안난다)
export const makeArray = (length: number) => new Array(length).fill(null)
//때로는 [시작_값, ... , 끝_값] 형태의 배열이 필요할 때가 있다. 이때에 makeArray는 아이템 개수만큼 null값을 채운 값을 반환하므로 적용할 수 x
// 다만 map함수는 콜백 함수의 2번째 매개변수에 배열의 인덱스값을 제공하므로 이를 이용해 range함수를 만들 수 있다.
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min)
// random 함수는 min과 max 범위에서의 무작위 정수를 반환한다. 이 함수는 이미지를 임의의 크기로 생성할 때 유용하다.
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min
