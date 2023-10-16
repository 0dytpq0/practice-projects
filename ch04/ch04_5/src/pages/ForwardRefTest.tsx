import { useRef, useEffect, useCallback } from 'react'
import { Title } from '../components'
import { Input } from '../theme/daisyui'
// forwardRef 함수 이해하기
// 부모 컴포넌트에서 생성한 ref를 자식 컴포넌트로 전달해 주는 역할을 한다.
// 사용자 컴포넌트 <Input/>은 물리 DOM 객체를 얻을 수 없는데 ref는 물리 DOM 객체를 얻으려고 사용하는 것이기에
// 사용자 컴포넌트에도 ref속성에 값을 설정 할 수 있을까?
// theme/daisyui/input.tsx에 가면 forwardRef를 사용해서 ref를 전달하게 해주었다.
export default function ForwardRefTest() {
  const inputRef = useRef<HTMLInputElement>(null)

  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])

  useEffect(() => inputRef.current?.focus(), [])
  // prettier-ignore
  return (
    <section className = "mt-4">
      <Title>ForwardRefTest</Title>
      <div className="flex justify-center mt-4 ">
        <div className ="flex flex-col w-1/3 p-2">
        <Input ref={inputRef} className = "input input-primary"
          placeholder = "enter some thet" />
          <button onClick={getValue} className ="mt-4 btn btn-primary">
            get value
          </button>
          </div>
      </div>
    </section>
  )
}
