import { render, screen } from '@testing-library/react';
import UserList from './UserList';

describe('UserList test', () => {
  const users = ['Tom', 'Jane', 'Mike'];

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

  test('should ul', () => {
    render(<UserList users={users} />);
    const ulElement = screen.getByRole('list');
    expect(ulElement).toBeInTheDocument();
  });

  test('li는 3개가 나옵니까?', () => {
    // render(<UserList users={users} />);
    render(<UserList users={[]} />);
    const liElement = screen.queryByRole('listitem');
    // expect(liElement).toHaveLength(3);
    expect(liElement).not.toBeInTheDocument();
  });
});
