import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("My First Suite", () => {
  test(`Test "Hello World" Prints on screen`, () => {
    render(<Greetings />);
    const helloWorldString = screen.getByText("Hello World", { exact: false });
    expect(helloWorldString).toBeInTheDocument();
  });
  test(`Test "Good to see you" on screen`, () => {
    render(<Greetings />);
    const goodToSeeYouString = screen.getByText("Good to see you", {
      exact: false,
    });
    expect(goodToSeeYouString).toBeInTheDocument();
  });

  test('renders "Changed Text!", if the button was clicked', () => {
    // Arranged Greetings Component
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const changedText = screen.getByText("Changed Text!");
    expect(changedText).toBeInTheDocument;
  });

  test('Should not render "good to see you", if the button was clicked', () => {
    // Arranged Greetings Component
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputText = screen.queryAllByText("Good to see you");
    expect(outputText).not.toBeInTheDocument;
    expect(outputText).toBeNull;
  });
});
