import { render, screen } from "@testing-library/react";
import AboutContainer from "./AboutContainer";

jest.mock(
  "../../components/AboutComponent/AbouteTitleComponent/AboutTitleComponent",
  () => ({
    __esModule: true,
    default: () => <div data-testid="mock-about-title"></div>,
  })
);

jest.mock(
  "../../components/AboutComponent/AboutUsComponent/AboutUsComponent",
  () => ({
    __esModule: true,
    default: () => <div data-testid="mock-about-us"></div>,
  })
);

describe("AboutContainer", () => {
  test("renders AboutTitleComponent and AboutUsComponent", () => {
    render(<AboutContainer />);
    expect(screen.getByTestId("mock-about-title")).toBeInTheDocument();
    expect(screen.getByTestId("mock-about-us")).toBeInTheDocument();
  });
});
