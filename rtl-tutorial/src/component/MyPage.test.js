import { render, screen } from '@testing-library/react';
import MyPage from './MyPage';

test('input 요소의 value가 Tom이다.', () => {
  render(<MyPage />);
  const inputEl = screen.getByDisplayValue('Tom');
  expect(inputEl).toBeInTheDocument();
});
