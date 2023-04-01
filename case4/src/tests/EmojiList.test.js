import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import emojiList from "../emojiList.json";
import App from "../App.js";

it("should render emoji list with expected titles", () => {
  // Get a subset of emojiList for test
  const emojiSubset = emojiList.slice(0, 20);
  render(<App />);

  // Check that each title in the subset is present in the rendered output
  emojiSubset.forEach((item) => {
    const emojiTitle = screen.getByText(item.title);
    expect(emojiTitle).toBeInTheDocument();
  });
});
