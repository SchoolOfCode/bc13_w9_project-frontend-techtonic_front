import { render, screen } from "@testing-library/react";
import StyledRating from "./index.js";

test("render rating", () => {
  render(<StyledRating />);
  const idElement = screen.getByText("5 Stars");
  expect(idElement).toBeInTheDocument();
});

test("render another rating", () => {
  render(<StyledRating />);
  const idElement = screen.getByText("4 Stars");
  expect(idElement).toBeInTheDocument();
});
