import { render, screen } from "@testing-library/react";
import Button from "./index.js";

test("render button", () => {
  render(<Button />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("render button prop", () => {
  render(<Button text="add-button" />);
  const buttonClassElement = screen.getByText("add-button");
  expect(buttonClassElement).toBeInTheDocument();
});
