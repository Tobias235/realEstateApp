import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import useFetch from "./useFetch";

const mockStore = configureMockStore();

describe("useFetch", () => {
  const store = mockStore({});
  const location = "city-1";
  const propertyType = "type-1";

  it("should fetch and set properties", async () => {
    const data = {
      "property-1": { propertyType: "type-1", city: "city-1" },
      "property-2": { propertyType: "type-2", city: "city-2" },
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data),
      })
    );

    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    const { result, waitForNextUpdate } = renderHook(
      () => useFetch("", location, propertyType),
      { wrapper }
    );

    await waitForNextUpdate({ timeout: 5000 });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(store.getActions()).toEqual([
      { type: "SET_PROPERTY_TYPES", payload: ["type-1", "type-2"] },
      { type: "SET_CITIES", payload: ["city-1", "city-2"] },
    ]);
    expect(result.current[0]).toEqual({
      "property-1": { propertyType: "type-1", city: "city-1" },
    });
  });

  it("should handle fetch error", async () => {
    const dispatchMock = jest.fn();
    store.dispatch = dispatchMock;
    const expectedActions = [
      {
        type: "SET_ERROR",
        payload:
          "Sorry, there was a problem processing your request. Please try again later.",
      },
    ];
    global.fetch = jest.fn(() =>
      Promise.reject(
        new Error(
          "Sorry, there was a problem processing your request. Please try again later."
        )
      )
    );

    const wrapper = ({ children }) => (
      <Provider store={store}>{children}</Provider>
    );
    await renderHook(() => useFetch("", location, propertyType), {
      wrapper,
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith(expectedActions[0]);
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions);
    }, 1000);
  });
});
