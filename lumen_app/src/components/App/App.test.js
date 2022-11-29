import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  render(<App />);
  const titleElement = screen.getByText("LUMEN");
  expect(titleElement).toBeInTheDocument();
});

test('renders add resource button', () => {
  render(<App />);
  const addElement = screen.getByText("Add a resource");
  expect(addElement).toBeInTheDocument();
});

test('renders results table', () => {
  render(<App />);
  const resultElement = screen.getByText("Category");
  expect(resultElement).toBeInTheDocument();
});

