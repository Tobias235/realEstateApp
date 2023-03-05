import { render, screen, fireEvent } from "@testing-library/react";
import emailjs from "@emailjs/browser";
import ContactFormComponent from "./ContactFormComponent";

jest.mock("@emailjs/browser");

test("calls emailjs.sendForm when form is submitted", () => {
  const mockSendForm = jest.fn();
  emailjs.sendForm.mockImplementation(mockSendForm);

  render(<ContactFormComponent />);

  const nameInput = screen.getByLabelText("Name:");
  const emailInput = screen.getByLabelText("Email:");
  const subjectInput = screen.getByLabelText("Subject:");
  const messageInput = screen.getByLabelText("Message:");
  const sendButton = screen.getByRole("button", { name: /send/i });

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
  fireEvent.change(subjectInput, { target: { value: "Test email" } });
  fireEvent.change(messageInput, {
    target: { value: "This is a test email" },
  });
  fireEvent.click(sendButton);

  expect(mockSendForm).toHaveBeenCalledWith(
    "service_c414x4w",
    "template_db8af1h",
    expect.any(HTMLFormElement),
    "user_9ib4kqWUGVsJ6gQ1eBR1k",
    "PRESMIY"
  );
});

test("renders ContactFormComponent", () => {
  render(<ContactFormComponent />);
  expect(screen.getByLabelText("Name:")).toBeInTheDocument();
  expect(screen.getByLabelText("Email:")).toBeInTheDocument();
  expect(screen.getByLabelText("Subject:")).toBeInTheDocument();
  expect(screen.getByLabelText("Message:")).toBeInTheDocument();
});
