/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
    it("Must display a title", () => {
    const screen = render(<Header />);

    expect(screen.getByText(/GardenMali/i)).toBeInTheDocument();

    });
}) 