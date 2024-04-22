// input은 button과 함께 이벤트 처리기를 빈번하게 작성해야 하는 대표 요소입니다.
// 그런데 input은 type 속성값에 따라 화면에 나타나는 모습과 사용자 입력을 얻는 방법이 조금 다르다.

// <button> 과 <input type = "button" /> 의 차이
// <button>은 <button><span>버튼<span/> <button/> 처럼 자식요소를 가질 수 있고 input은 그렇지 않다.

export default function VariousInputs() {
  return (
    <div>
      <p>Various Inputs</p>
      <div>
        <input type="text" placeholder="enter some texts" />
        <input type="password" placeholder="enter your password" />
        <input type="email" placeholder="enter email address" />
        <input type="range" />
        <input type="button" value="I'm a button" />
        <input type="checkbox" value="I'm a checkbox" defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  )
}
