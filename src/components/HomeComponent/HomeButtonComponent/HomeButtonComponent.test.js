import { render, screen } from "@testing-library/react";
import HomeButtonComponent from "./HomeButtonComponent";

test("Renders HomeButtonComponent and children elements", () => {
  render(<HomeButtonComponent />);

  expect(screen.getByText("View all properties")).toHaveAttribute(
    "href",
    "#properties"
  );
  expect(screen.getByText("Contact Us")).toHaveAttribute("href", "#contact");
});
