```javascript
import userEvent from '@testing-library/user-event';

describe('Login Test', () => {
  test('처음에는 Login 버튼이 있다.', () => {
    render(<Login />);
    const btnEl = screen.getByRole('button');
    expect(btnEl).toHaveTextContent('Login');
  });

  const user = userEvent.setup();
  test('한번 클릭하면 Logout 버튼이 된다.', async () => {
    render(<Login />);
    const btnEl = screen.getByRole('button');
    // 아래 행동은 promise를 반환
    await user.click(btnEl);
    expect(btnEl).toHaveTextContent('Logout');
  });

  test('tab, space, enter 동작', async () => {
    render(<Login />);
    const btnEl = screen.getByRole('button');
    await user.tab();
    await user.keyboard(' '); //space
    await user.keyboard(' ');
    await user.keyboard('{Enter}');
    expect(btnEl).toHaveTextContent('Logout');
  });
});
```

다양한 동작/key는 공식문서에서 확인 가능
[공식문서](https://testing-library.com/docs/ecosystem-user-event/)
