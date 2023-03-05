import { render, screen } from "@testing-library/react";
import ContactInformationComponent from "./ContactInformationComponent";

test("renders ContactInformationComponent", () => {
  render(<ContactInformationComponent />);

  expect(screen.getByText("Write us an email")).toBeInTheDocument();
  expect(screen.getByText("Call us at +123456789")).toBeInTheDocument();

  expect(screen.getByRole("img", { alt: /call icon/i })).toBeInTheDocument();
  expect(screen.getByRole("img", { alt: /message icon/i })).toBeInTheDocument();

  expect(screen.getByAltText("Contact us")).toBeInTheDocument();
});
