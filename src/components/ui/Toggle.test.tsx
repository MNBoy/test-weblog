import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Toggle Component', () => {
  test('renders the label', () => {
    render(<Toggle onChange={() => {}} checked label='Test Label' />);
    const labelElement = screen.getByText(/test label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('renders the checkbox', () => {
    render(<Toggle onChange={() => {}} checked label='Test Label' />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('checkbox is checked when checked prop is true', () => {
    render(<Toggle onChange={() => {}} label='Test Label' checked={true} />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeChecked();
  });

  test('checkbox is not checked when checked prop is false', () => {
    render(<Toggle onChange={() => {}} label='Test Label' checked={false} />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).not.toBeChecked();
  });

  test('calls onChange when checkbox is clicked', () => {
    const handleChange = jest.fn();
    render(<Toggle checked label='Test Label' onChange={handleChange} />);
    const checkboxElement = screen.getByRole('checkbox');
    fireEvent.click(checkboxElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('does not throw error if onChange is not provided', () => {
    render(<Toggle checked label='Test Label' />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(() => fireEvent.click(checkboxElement)).not.toThrow();
  });
});
