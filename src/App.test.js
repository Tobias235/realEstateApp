import ReactDOM from "react-dom";
import App from "./App";

describe("App", () => {
  test("Renders all child components", () => {
    const div = document.createElement("div");

    setTimeout(() => {
      ReactDOM.render(<App />, document.body.appendChild(div));
    }, 0);
  });
});
