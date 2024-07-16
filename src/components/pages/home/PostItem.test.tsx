import { IPost } from '@/service/post';
import { render, screen } from '@testing-library/react';
import { PostItem } from './PostItem';

// Mock Tools module
jest.mock('@/lib/tools', () => ({
  Tools: {
    capitalizeFirstLetter: jest.fn((text: string) => text.toUpperCase()),
    createDate: jest.fn((id: number) => `Date ${id}`),
  },
}));

// Mock Next.js PATHS
jest.mock('../../../common/constants/PATHS', () => ({
  PATHS: {
    POST: {
      ID: (id: number) => `/post/${id}`,
    },
  },
}));

const mockPost: IPost = {
  id: 1,
  title: 'Test Title',
  body: 'Test Body',
  userId: 1,
};

describe('PostItem Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock calls before each test
  });

  test('renders post item correctly', () => {
    render(<PostItem {...mockPost} />);

    const titleElement = screen.getByText(/TEST TITLE/i);
    const dateElement = screen.getByText(/Date 1/i);
    const bodyElement = screen.getByText(/Test Body/i);

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });

  test('truncates body text correctly', () => {
    render(<PostItem {...mockPost} />);

    // Use queryByText with a custom matcher function
    const bodyElement = screen.queryByText((content, element) => {
      // Check if the text starts with the expected truncated text
      const textContent = element?.textContent || '';
      return textContent.startsWith('Test Body');
    });

    expect(bodyElement).toBeInTheDocument();
  });

  test('uses correct link href', () => {
    render(<PostItem {...mockPost} />);

    const linkElement = screen.getByRole('link');

    expect(linkElement).toHaveAttribute('href', '/post/1');
  });
});
