import { render, screen } from "@testing-library/react";
import SearchBar from "./index.js";

test("render Search Bar", () => {
  render(<SearchBar />);
  const searchElement = screen.getByText("Find resources:");
  expect(searchElement).toBeInTheDocument();
});

test("render Add button", () => {
  render(<SearchBar value="css" />);
  const buttonElement = screen.getByDisplayValue("css");
  expect(buttonElement).toBeInTheDocument();
});
