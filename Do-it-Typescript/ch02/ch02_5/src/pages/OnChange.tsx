// input의 onChange 이벤트 속성은 매개 변수 e의 타입을 ChangeEvent<HTMLInputElement>로 설정 했기때문에
// HTMLInputElement타입의 물리 DOM 객체 값을 e.target형태로 얻을 수 있다.

// <input>의 defaultValue와 defaultChecked 속성
// value와 checked는 사용자가 <input>에 입력한 값을 얻을 때 사용하고, default~는 어떤 초기값을 설정하고 싶을 때 사용.

// multiple과 accept속성
// <input>은 type 속성값이 'file'일 때 multiple과 accept라는 속성을 추가로 제공.
// multiple의 기본값은 false로 파일을 여러 개 동시선택에 대한 부분을 다룬다. Ture => 여러개 선택 가능
// accept는 파일을 확장자를 제한하는 데 사용한다. "images/*"면 이미지확장자로 제한, 'text/plain'이면 텍스트 파일로 제한.
import type { ChangeEvent } from 'react'

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('onChangeValue', e.target.value)
  }
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeFiles', e.target.files)
  }
  // prettier-ignore
  return (
    <div>
      <p>onChanges</p>
      <input type ='text' onChange={onChangeValue} placeholder = "type some text" defaultValue = "Hello" />
      <input type = 'checkbox' onChange={onChangeChecked} defaultChecked />
      <input type ='file' onChange={onChangeFiles} multiple accept = "images/*" />

    </div>
  )
}
