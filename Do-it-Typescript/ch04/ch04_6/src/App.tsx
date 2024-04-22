import ResponsiveContextTest from './pages/ResponsiveContextTest'
import { ResponsiveProvider } from './contexts'
// 컨텍스트란?
// 부모 컴포넌트가 자식 컴포넌트로 어떤 정보를 전달하려고 할 때 사용하는 메커니즘입니다
// 제일 먼저 createContext로 컨텍스트 객체를 생성하는 것이다.
export default function App() {
  return (
    <ResponsiveProvider>
      <main>
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  )
}
