import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Renders footer", () => {
  render(<Footer />);

  expect(screen.getByTestId("footer")).toBeInTheDocument();
  expect(screen.getByText(/Created by/)).toBeInTheDocument();
  expect(screen.getByText("Tobias235")).toHaveAttribute(
    "href",
    "https://github.com/Tobias235/realEstateApp"
  );
  expect(screen.getByText("Contact image by Freepik")).toHaveAttribute(
    "href",
    "http://www.freepik.com"
  );
});
