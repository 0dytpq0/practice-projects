// 물리 DOM 객체의 이벤트 속성
// 앞에서 살펴본 addEventListener는 사용하긱 조금 번거롭다.
// 이 때문에 window를 포함한 대부분의 HTML 요소는 onclick처럼 'on' 뒤에 이벤트 이름을 붙인 속성을 제공합니다.
// 이벤트 속성은 addEvnetListener의 사용법을 간결하게 하는 게 목적이므로 이벤트 속성값에는 항상 이벤트 처리기를 성정해야 합니다.

//참고로 옵셔널 체이닝 연산자(?.)[반환값이 null값이면 무시한다]는 document.getElementById('root')?.onClick = 콜백_함수 처럼 값을 설정하는 구문에선 사용x

const rootDiv = document.getElementById('root')
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const { isTrusted, target, bubbles } = e
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles)
  }
  rootDiv.onclick = (e: Event) => {
    const { isTrusted, target, bubbles } = e
    // prettier-ignore
    console.log('mouse click also occurs on rootDiv', isTrusted, target, bubbles)
  }
}

export default function OnClick() {
  return <div>OnClick</div>
}
