import { render, screen } from "@testing-library/react";
import AddAndSearchDisplay from "./index.js";

test("render Add button", () => {
  render(<AddAndSearchDisplay />);
  const buttonElement = screen.getByText("Add a resource");
  expect(buttonElement).toBeInTheDocument();
});

test("render search Bar", () => {
  render(<AddAndSearchDisplay />);
  const searchElement = screen.getByText("Find resources:");
  expect(searchElement).toBeInTheDocument();
});

test("render search bar placeholder text", () => {
  render(<AddAndSearchDisplay />);
  const placeholderElement = screen.getByPlaceholderText("Search by topic...");
  expect(placeholderElement).toBeInTheDocument();
});
