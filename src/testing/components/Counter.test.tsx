import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter component", () => {
  it("Counter initializes with the correct value", () => {
    const { getByTestId } = render(<Counter initialValue={10} />);
    const count = getByTestId("count");
    expect(count).toHaveTextContent("10");
  });
  it("increments when the button is clicked", () => {
    // Arrange: render the component
    const { getByTestId, getByRole } = render(<Counter initialValue={0} />);
    const incrementButton = getByRole("button", { name: "Increment" });

    // Act: click the increment button twice
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const count = Number(getByTestId("count").textContent);

    // Assert: count updated to 2
    expect(count).toEqual(2);
  });
  it("decrements when the button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialValue={0} />);
    const decrementButton = getByRole("button", { name: "Decrement" });

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    const count = Number(getByTestId("count").textContent);
    expect(count).toEqual(0);
  });
  it("resets when the button is clicked", () => {
    // ARRANGE
    const { getByTestId, getByRole } = render(<Counter initialValue={200} />);
    const resetButton = getByRole("button", { name: "Reset" });

    // ACT
    fireEvent.click(resetButton);

    // ASSERT
    const resetedCount = getByTestId("count");
    expect(resetedCount).toHaveTextContent("0");
  });
});
