import { Title } from '../components'
// css에서 border는 border: border-width | boder-style | border-color의 단축속성이다.
// border, border-t | r | b | l 제공
// 또한 각 방향의 굵기를 border-0, border-2(2픽셀) 등을 의미하는 클래스도 제공한다. => border-t-2도 된다.
// border style 관련은 border - solid | dashed| dotted | double | none
// border color 관련은 border-transparent , border-black | white 그리고 bg-red-500 형태에서 bg만 border로 바꿔도 되는 패턴의 클래스를 제공한다.
// border-radius도 제공한다. => rounded(raidus : 0.25rem), rounded-full(9999px) rounded-sm(0.125rem) | md(0.375) | lg(0.5) | xl(0.75) | 2xl(1)
// 원하는 곳만? rounded-t | b | tl | tr | bl | br - sm| md ...

export default function CopyMe() {
  return (
    <section className="mt-4">
      <Title>CopyMe</Title>
      <div className="mt-4"></div>
    </section>
  )
}
