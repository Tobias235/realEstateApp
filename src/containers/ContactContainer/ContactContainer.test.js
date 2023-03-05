import { render, screen } from "@testing-library/react";
import ContactContainer from "./ContactContainer";

jest.mock(
  "../../components/ContactComponent/ContactFormComponent/ContactFormComponent",
  () => ({
    __esModule: true,
    default: () => <div data-testid="mock-contact-form"></div>,
  })
);

jest.mock(
  "../../components/ContactComponent/ContactInformationComponent/ContactInformationComponent",
  () => ({
    __esModule: true,
    default: () => <div data-testid="mock-contact-information"></div>,
  })
);

test("renders ContactFormComponent and ContactInformation component", () => {
  render(<ContactContainer />);

  expect(screen.getByTestId("mock-contact-form")).toBeInTheDocument();
  expect(screen.getByTestId("mock-contact-information")).toBeInTheDocument();
  expect(screen.getByText(/Interested in any/i)).toBeInTheDocument();
  expect(screen.getByText(/Don't hesitate to ask any/i)).toBeInTheDocument();
});
