import { render, screen } from '@testing-library/react';
import { Navigation } from './Navigation';

jest.mock('next/navigation', () => ({
  usePathname: () => 'localhost:3000/posts',
}));

describe('Navigation Component', () => {
  test('renders correctly when not on post detail page', () => {
    render(<Navigation />);

    const titleElement = screen.getByText('overreacted');
    expect(titleElement).toBeInTheDocument();

    // Adjust the name in the getByRole query to match the actual label
    const toggleElement = screen.getByRole('checkbox', { name: /Dark/i });
    expect(toggleElement).toBeInTheDocument();
  });

  test('renders correctly when on post detail page', () => {
    render(<Navigation />);

    const titleElement = screen.getByText('overreacted');
    expect(titleElement).toHaveClass(
      'text-2xl font-bold transition-all duration-200 text-slate-700 dark:text-secondary'
    );

    // Adjust the name in the getByRole query to match the actual label
    const toggleElement = screen.getByRole('checkbox', { name: /Dark/i });
    expect(toggleElement).toBeInTheDocument();
  });
});
