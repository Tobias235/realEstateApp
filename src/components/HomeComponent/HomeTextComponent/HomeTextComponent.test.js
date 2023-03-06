import { render, screen } from "@testing-library/react";
import HomeTextComponent from "./HomeTextComponent";

test("Renders HomeTextComponent and children elements", () => {
  render(<HomeTextComponent />);

  expect(screen.getByText(/Take a step farther/i)).toBeInTheDocument();
  expect(screen.getByText(/contact us and wake up/i)).toBeInTheDocument();
});
