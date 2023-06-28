import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

test('renders navbar', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});

test('renders back arrow', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  expect(screen.getByTestId('back-arrow')).toBeInTheDocument();
});

test('renders title', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  expect(screen.getByTestId('title')).toBeInTheDocument();
});

test('renders microphone icon', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  expect(screen.getByTestId('mic-icon')).toBeInTheDocument();
});

test('renders gear icon', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );

  expect(screen.getByTestId('gear-icon')).toBeInTheDocument();
});
