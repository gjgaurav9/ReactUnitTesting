import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

test("Test Hello World Prints on screen", () => {
  render(<Greetings />);
  const helloWorldString = screen.getByText("Hello World", {exact : false});
  expect(helloWorldString).toBeInTheDocument();
});
