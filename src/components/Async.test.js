import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Check list rendered or not", () => {
  test("Check list rendered or not", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "Gaurav rocks" }],
    });
    render(<Async />);

    const allListItems = await screen.findAllByRole("listitem");
    console.log("allListItems", allListItems);
    expect(allListItems).not.toHaveLength(0);
  });
});
