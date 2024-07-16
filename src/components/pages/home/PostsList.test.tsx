import { render, screen } from '@testing-library/react';
import { PostsList } from './PostsList';
import { usePostsList } from './usePostsList'; // Adjust the import path as per your project setup

// Mock the usePostsList hook
jest.mock('./usePostsList.ts');

describe('PostsList Component', () => {
  beforeEach(() => {
    // Clear mock calls and reset mock implementation before each test
    (usePostsList as jest.Mock).mockReset();
  });

  test('renders loading state', () => {
    // Mock loading state
    (usePostsList as jest.Mock).mockReturnValueOnce({
      posts: [],
      isLoading: true,
    });

    render(<PostsList />);

    const loadingElement = screen.getByText(/Waiting.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders posts correctly', () => {
    // Mock loaded state with posts
    (usePostsList as jest.Mock).mockReturnValueOnce({
      posts: [
        { id: 1, title: 'Test Post 1', body: 'Test body for post 1' },
        { id: 2, title: 'Test Post 2', body: 'Test body for post 2' },
      ],
      isLoading: false,
    });

    render(<PostsList />);

    // Check if PostItem components are rendered
    const postItems = screen.getAllByRole('link'); // Assuming PostItem renders as an article
    expect(postItems).toHaveLength(2); // Assuming 2 posts are mocked

    // Check if the titles of posts are rendered
    const postTitles = screen.getAllByText(/Test Post/i);
    expect(postTitles).toHaveLength(2); // Assuming 2 posts are mocked
  });
});
