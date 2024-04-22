import { render, screen } from '@testing-library/react';
import Todolist from './Todolist';
import { server } from '../mocks/server';
import { rest } from 'msw';

describe('TODO LIST', () => {
  test('Todo 라는 제목이 있다.', () => {
    render(<Todolist />);
    const titleEl = screen.getByText('Todo');
    expect(titleEl).toBeInTheDocument();
  });

  test('리스트가 잘 나온다. (3개)', async () => {
    render(<Todolist />);
    const list = await screen.findAllByRole('listitem'); //li
    expect(list).toHaveLength(3);
  });

  test('에러가 났을 때 에러 메세지를 보여준다.', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/todos',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    render(<Todolist />);
    const error = await screen.findByText('에러 발생..');
    expect(error).toBeInTheDocument();
  });
});
