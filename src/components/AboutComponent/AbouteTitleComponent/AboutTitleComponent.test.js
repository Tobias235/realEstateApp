import { render, screen } from "@testing-library/react";
import AboutTitleComponent from "./AboutTitleComponent";

test("Renders AboutTitleComponent", () => {
  render(<AboutTitleComponent />);
  expect(screen.getByTestId("about-title-component")).toBeInTheDocument();
  expect(screen.getByText("About PRESMIY")).toBeInTheDocument();
});
