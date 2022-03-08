/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("Must display a title", () => {
    const screen = render(<Footer />);

    expect(screen.getByText(/Copyright reserved to CRADA/i)).toBeInTheDocument();
    
  });
})
