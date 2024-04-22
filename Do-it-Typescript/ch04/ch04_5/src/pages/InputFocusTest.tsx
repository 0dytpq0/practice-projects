import { useRef, useEffect } from 'react'
import { Title } from '../components'
// input은 눌러야 포커스가 되잖아? 근데 inputRef.current값이 물리 DOM값이니까 focus함수를 바로 호출하면? 안눌러도 된다잉
export default function InputFocusTest() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => inputRef.current?.focus(), [])
  // prettier-ignore
  return (
    <section className = "mt-4">
      <Title>InputFocusTest</Title>
      <div className="flex justify-center mt-4 ">
        <input ref={inputRef} className = "input input-primary"
          placeholder = "enter some thet" />
      </div>
    </section>
  )
}
