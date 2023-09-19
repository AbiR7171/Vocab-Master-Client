import { render, screen, fireEvent } from "@testing-library/react";
import Banner from "../Pages/Home/Banner/Banner";
import { it } from "vitest";

it("should render Banner component with expected elements", () => {
  render(<Banner />);
  
  // Check if the banner container is present
  const bannerContainer = screen.getByTestId("banner-container");
  expect(bannerContainer).toBeInTheDocument();

  // Check if the heading elements are present and have expected text content
  const heading1 = screen.getByText(/The free, fun, and effective way to learn/i);
  const heading2 = screen.getByText(/Vocabulary!/i);
  expect(heading1).toBeInTheDocument();
  expect(heading2).toBeInTheDocument();

  // Check if the "Get started" button is present
  const getStartedButton = screen.getByText(/Get started/i);
  expect(getStartedButton).toBeInTheDocument();

  // Assuming the user is not logged in, so "I Already have an account" button should be present
  const alreadyHaveAccountButton = screen.getByText(/I Already have an account/i);
  expect(alreadyHaveAccountButton).toBeInTheDocument();
});

// You can write additional tests to simulate user interactions
it("should call signout function when 'Not...' link is clicked", () => {
  // Mock the signout function
  const mockSignout = jest.fn();
  jest.mock("../../../Authentication/Provider/AuthProvider", () => ({
    AuthContext: {
      Consumer: ({ children }) => children({ user: null, logOut: mockSignout }),
    },
  }));

  // render(<Banner />);
  
  // Find and click the "Not..." link
  const notLink = screen.getByText(/Not/i);
  fireEvent.click(notLink);
  
  // Check if the signout function was called
  expect(mockSignout).toHaveBeenCalled();
});
