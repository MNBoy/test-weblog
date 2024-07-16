import { render, screen } from '@testing-library/react';
import { PostDetail } from './PostDetail';
import { usePostDetail } from './usePostDetail';

// Mock usePostDetail hook
jest.mock('./usePostDetail', () => ({
  usePostDetail: jest.fn(),
}));

const mockUsePostDetail = usePostDetail as jest.MockedFunction<
  typeof usePostDetail
>;

describe('PostDetail Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock calls before each test
  });

  test('renders loading state', () => {
    mockUsePostDetail.mockReturnValue({ post: null, isLoading: true });

    render(<PostDetail postId='1' />);

    const loadingElement = screen.getByText(/waiting/i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders post detail when loaded', () => {
    const mockPost = {
      userId: 1,
      id: 1,
      title: 'Test Title',
      body: 'Test Body',
    };

    mockUsePostDetail.mockReturnValue({ post: mockPost, isLoading: false });

    render(<PostDetail postId='1' />);

    const titleElement = screen.getByText(/Test Title/i);
    const bodyElement = screen.getByText(/Test Body/i);

    expect(titleElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });

  test('handles null post data', () => {
    mockUsePostDetail.mockReturnValue({ post: null, isLoading: false });

    render(<PostDetail postId='1' />);

    const loadingElement = screen.queryByText(/waiting/i);
    const titleElement = screen.queryByText(/Test Title/i); // Should not be in the document
    const bodyElement = screen.queryByText(/Test Body/i); // Should not be in the document

    expect(loadingElement).not.toBeInTheDocument();
    expect(titleElement).toBeNull();
    expect(bodyElement).toBeNull();
  });
});
