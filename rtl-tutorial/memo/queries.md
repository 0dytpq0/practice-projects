# Testing Queries

## getBy~Queries

- getByText = 텍스트를 이용해 찾는 것
  /로그인을/(부분으로찾기) or "로그인을 해주세요"(전체 입력)
- getByRole = HTML요소가 가지고있는 default Role을 통해 찾는 것
  - h1~h6 : heading
  - button : button
  - a : link
  - checkbox : checkbox
  - radio : radio
  - select : combobox
    등등...
    여러 개가 찾아진다면 에러가나고 getAllBy를 사용하라고 나온다.

**getBy 쿼리에는 두번째 인자로 옵션을 전달할 수 있다.**

`getByRole("heading", {level: 1})` => heading 요소중 레벨1 = h1

```javascript
test('input 요소가 있다', () => {
  render(<MyPage />);
  const inputEl = screen.getByRole('textbox', {
    name: '자기소개', //label 부분을 전달
  });
  expect(inputEl).toBeInTheDocument();
});
```

- getByDisplayValue

```javascript
test('input 요소의 value가 Tom이다.', () => {
  render(<MyPage />);
  const inputEl = screen.getByDisplayValue('Tom');
  expect(inputEl).toBeInTheDocument();
});
```

-getByTestId = 쿼리들로 찾을 수 없을 때 최후의 수단

```javascript
// html
<div date-testid="my-div" />;
// test
test('my div가 있다.', () => {
  render(<MyPage />);
  const inputEl = screen.getbyTestId('my-div');
  expect(inputEl).toBeInTheDocument();
});
```

-getByLabeText
-getByPlaceholderText
-getByTitle
등등 여러 getBy 쿼리가 있음.

## getAllBy, queryBy, findeBy...

- getAllBy~, queryBy~

```javascript
describe('UserList test', () => {
  const users = ['Tom', 'Jane', 'Mike'];

  test('should ul', () => {
    render(<UserList users={users} />);
    const ulElement = screen.getByRole('list'); //ul
    expect(ulElement).toBeInTheDocument();
  });

  test('li는 3개가 나옵니까?', () => {
    // render(<UserList users={users} />);
    render(<UserList users={[]} />); //빈배열? getby는 있는 요소중 찾기에 map함수로 생성 자체가 안되기때문에 length(0)을 줘도 안된다.
    // 즉 queryBy/queryAllBy로 검색하여 없을 때 에러가 나지않고 null 또는 빈배열을 반환하도록 한다.
    const liElement = screen.queryByRole('listitem');
    // expect(liElement).toHaveLength(3);
    expect(liElement).not.toBeInTheDocument();
  });
});
```

-findBy~

프라미스를 테스트할 때 사용

```javascript
useEffect(() => {
  setTimeout(() => {
    setShowTitle(true);
  }, 500);
});
//위의 구문으로 0.5초뒤에 실행되지만 1500으로 하면 findBy는 기본적으로 1초만 기다려주기에 아래 3번째 옵션 객체 내부에 timeout을 넣어줘야한다.
test('잠시 후 제목이 나타납니다.', async () => {
  render(<UserList users={users} />);
  // screen.debug();
  const titleEl = await screen.findByRole(
    'heading',
    {
      name: '사용자 목록',
    },
    {
      timeout: 2000,
    }
  );
  // screen.debug();
  expect(titleEl).toBeInTheDocument();
});
```
