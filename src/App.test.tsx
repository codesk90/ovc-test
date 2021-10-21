import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

test('Check if first page is user list', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const userHeader = screen.getByText('Users');
  expect(userHeader).toBeInTheDocument();
});

test('Check for search input', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
});
