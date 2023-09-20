// <input type="file"> 에서의 onChange 이벤트 처리
// 이 이벤트는 e.target.files 속성값으로 사용자가 선택한 파일 목록을 얻을 수 있다.
// e,target,files 속성의 타입은 FileList이며 리액트가 아니라 웹 브라우저의 자바스크립트 엔진이 제공한다.

import type { ChangeEvent } from 'react'

export default function FileInput() {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
// FileList의 item과 인덱스 연산자 []는 다음처럼 File 타입 속성값을 얻을 수 있도록 고안되었습니다.
    const files: FileList | null = e.target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i) // or file = files[i];
        console.log(`file[${i}]:`, file)
      }
    }
  }
  return (
    <div>
      <p>FileInput</p>
      <input type="file" onChange={onChange} multiple accept="image/*" />
    </div>
  )
}
