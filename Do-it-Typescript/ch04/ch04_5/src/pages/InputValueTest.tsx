import { useRef, useEffect, useCallback } from 'react'
import { Title } from '../components'
// 물리 DOM객체에서 값 얻어오기.
export default function InputValueTest() {
  const inputRef = useRef<HTMLInputElement>(null)

  const getValue = useCallback(() => alert(`input value: ${inputRef.current?.value}`), [])

  useEffect(() => inputRef.current?.focus(), [])
  // prettier-ignore
  return (
    <section className = "mt-4">
      <Title>InputValueTest</Title>
      <div className="flex justify-center mt-4 ">
        <div className ="flex flex-col w-1/3 p-2">
        <input ref={inputRef} className = "input input-primary"
          placeholder = "enter some thet" />
          <button onClick={getValue} className ="mt-4 btn btn-primary">
            get value
          </button>
          </div>
      </div>
    </section>
  )
}
