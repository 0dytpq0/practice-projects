//JSX ansdms React.createElement 함수 호출 코드로 전환됩니다.
// 그런데 이 전환 과정에서 JS(혹은 TS) 키워드인 class와 for가 혼란을 줍니다.
// 이 때문에 리액트에서는 class 대신 className, for 대신 htmlFor라는 속성명을 사용해야한다.
// 추가로 JSX는 XML 규격에 자바스크립트를 결합한 구문이라고 했는데,
// XML 규격은 HTML4 스타일의 HTML문을 이해하지 못하므로 스스로 닫는 태그 형태로 작성해야 한다.

export default function Bootstrap() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
