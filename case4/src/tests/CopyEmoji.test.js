import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App.js";

it("should copy emoji when clicked on it", () => {
  render(<App />);
  // Get the emoji to copy by text content
  const emojiToCopy = screen.getByText(/100/i);

  // Simulate a click on the emoji to copy
  userEvent.click(emojiToCopy);

  // Check that the emoji to copy element has a data-clipboard-text attribute with the value of the copied emoji
  expect(emojiToCopy.parentElement.getAttribute("data-clipboard-text")).toMatch(
    "💯"
  );
});
