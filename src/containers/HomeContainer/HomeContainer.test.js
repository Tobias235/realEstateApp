import { render, screen } from "@testing-library/react";
import HomeContainer from "./HomeContainer";

test("Renders HomeContainer and child components", () => {
  render(<HomeContainer />);

  expect(screen.getByTestId("home-container")).toBeInTheDocument();
  expect(screen.getByTestId("home-text-component")).toBeInTheDocument();
  expect(screen.getByTestId("home-button-component")).toBeInTheDocument();
});
