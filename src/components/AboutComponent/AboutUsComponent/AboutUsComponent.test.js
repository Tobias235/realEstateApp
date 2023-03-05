import { render, screen } from "@testing-library/react";
import AboutUsComponent from "./AboutUsComponent";

test("Renders AboutUsComponent", () => {
  render(<AboutUsComponent />);

  expect(screen.getByTestId("about-us-component")).toBeInTheDocument();
  expect(screen.getByAltText("the team together")).toBeInTheDocument();
  expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
});
