import { renderHook } from "@testing-library/react-hooks";
import { act, render, fireEvent, screen } from "@testing-library/react";
import useForm from "./useForm";

describe("useForm", () => {
  const initialValues = { name: "", email: "", password: "" };
  const validationRules = {
    name: (value) => !value && "Name is required",
    email: (value) =>
      !value || !/\S+@\S+\.\S+/.test(value) ? "Invalid email" : null,
    password: (value) => !value && "Password is required",
  };

  const callback = jest.fn();

  it("should update form data when inputs change", () => {
    const { result } = renderHook(() =>
      useForm(initialValues, validationRules, callback)
    );
    act(() => {
      result.current.handleChange({
        target: { name: "name", value: "John Doe" },
      });
    });
    expect(result.current.formData.name).toEqual("John Doe");
  });

  it("should update errors when inputs are invalid", () => {
    const { result } = renderHook(() =>
      useForm(initialValues, validationRules)
    );

    act(() => {
      result.current.handleChange({
        target: { name: "email", value: "invalid Email" },
      });
      result.current.handleSubmit({ preventDefault: jest.fn() });
    });

    expect(result.current.errors.email).toBe("Invalid email");
  });

  it("should not call the callback function when form is submitted with invalid data", () => {
    const { result } = renderHook(() =>
      useForm(initialValues, validationRules, callback)
    );

    act(() => {
      result.current.handleChange({
        target: { name: "email", value: "Invalid email" },
      });
      result.current.handleSubmit({ preventDefault: jest.fn() });
    });

    expect(callback).not.toHaveBeenCalled();
  });

  it("calls the callback function with the form data when valid data is submitted", () => {
    const initialValues = { username: "", password: "" };
    const validationRules = {
      username: (value) => !value && "Username is required",
      password: (value) => !value && "Password is required",
    };

    const TestComponent = () => {
      const { formData, handleChange, handleSubmit } = useForm(
        initialValues,
        validationRules,
        callback
      );

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="username">Username</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <button type="submit">Submit</button>
        </form>
      );
    };

    render(<TestComponent />);
    fireEvent.change(screen.getByLabelText("Username"), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "testpass" },
    });
    fireEvent.click(screen.getByText("Submit"));

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(
      { username: "testuser", password: "testpass" },
      initialValues
    );
  });
});
