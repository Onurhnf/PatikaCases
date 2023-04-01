import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import App from "../App.js";

it("should re-render emoji list, after filtered cat ", () => {
  render(<App />);

  // Type "heart" into the search input field
  const searchInput = screen.getByRole("textbox");
  fireEvent.change(searchInput, { target: { value: "heart" } });

  // Verify that the filtered emoji list is correctly rendered
  const results = screen.getAllByRole("img");
  expect(results).toHaveLength(22); //22 because title has 2 emojies
  expect(results[2]).toHaveAttribute("alt", "Heart Eyes");
  expect(results[3]).toHaveAttribute("alt", "Kissing Heart");
});
