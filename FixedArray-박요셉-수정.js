class FixedArray {
  #arrayLength;
  #array;
  #maxLength;
  // 필요한변수 추가 가능

  // #arrayLength와 #array를 알맞게 초기화
  // 생성자 파라미터에는 FixedArray의 고정된 길이를 받아야됨.
  // #array초기화 시 각요소의 값은 undefined
  constructor(maxLength) {
    this.#arrayLength = 0;
    this.#array = [];
    for (let i = 0; i < maxLength; i++) {
      this.#array[i] = undefined;
    }
    this.#maxLength = maxLength;
  }

  //////////////////////////////
  //////      LEVEL 1      /////
  //////////////////////////////
  // 배열 맨 뒤에 요소 추가
  // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가되면 안됨.
  push(element) {
    if (this.#arrayLength === this.#maxLength) return;
    this.#array[this.#arrayLength] = element;
    this.#arrayLength++;
    console.log(
      "this.#arrayLength,this.#array",
      this.#arrayLength,
      this.#array
    );
  }

  // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
  pop() {
    //제거가 초기화인가?
    if (this.#arrayLength === 0) return;
    const pop = this.#array[this.#arrayLength - 1];
    this.#array[this.#arrayLength - 1] = undefined;
    this.#arrayLength--;
    console.log("this.#array, pop", this.#array, pop);

    return pop;
  }

  // 현재 배열의 사용되고 있는 크기를 반환
  getLength() {
    return this.#arrayLength;
  }

  // 현재 배열의 상태를 string으로 반환
  stringify() {
    let string = "";

    for (let i = 0; i < this.#array.length; i++) {
      if (this.#array[i] === undefined) continue;

      i === 0
        ? (string += `${this.#array[i]}`)
        : (string += `,${this.#array[i]}`);
    }

    return `[${string}]`;
  }
  //////////////////////////////
  //////      LEVEL 2      /////
  //////////////////////////////
  // 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
  indexOf(searchElement) {
    for (let i = 0; i < this.#arrayLength; i++) {
      if (searchElement === this.#array[i]) return i;
    }
    return -1;
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소 1개만 반환
  // true 가 없으면 null 반환
  find(predicate) {
    for (let i = 0; i < this.#arrayLength; i++) {
      if (predicate(this.#array[i], i)) return this.#array[i];
    }
    return null;
  }
  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소의 index반환
  // true 가 없으면 -1 반환
  findIndex(predicate) {
    for (let i = 0; i < this.#arrayLength; i++) {
      if (predicate(this.#array[i], i)) return i;
    }
    return -1;
  }

  // 배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. (true or false)
  includes(searchElement) {
    for (let i = 0; i < this.#arrayLength; i++) {
      if (searchElement === this.#array[i]) return true;
    }
    return false;
  }

  //////////////////////////////
  //////      LEVEL 3      /////
  //////////////////////////////
  // 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.
  forEach(callback) {
    for (let i = 0; i < this.#arrayLength; i++) {
      callback(this.#array[i], i);
    }
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소를 모아 새로운 배열 반환
  filter(predicate) {
    const arr = new FixedArray(this.#arrayLength);
    for (let i = 0; i < this.#arrayLength; i++) {
      if (predicate(this.#array[i], i)) {
        arr.push(this.#array[i]);
      }
    }
    return arr;
  }

  // 배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환
  map(callback) {
    const arr = new FixedArray(this.#arrayLength);
    for (let i = 0; i < this.#arrayLength; i++) {
      arr.push(callback(this.#array[i], i));
    }
    return arr;
  }

  // 배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
  reduce(callback, initValue) {
    let acc = initValue;
    for (let i = 0; i < this.#arrayLength; i++) {
      acc = callback(acc, this.#array[i], i, this.#array);
    }
    return acc;
  }
}
