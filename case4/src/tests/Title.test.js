import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../App.js";

it("Displays the correct title", () => {
  render(<App />);

  // Checks that the title exists
  const titleText = screen.getByText(/emoji search/i);
  expect(titleText).toBeInTheDocument();
});
